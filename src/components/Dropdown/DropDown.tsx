import { type Service, dropdowns } from "@/constants/header/headerProperties";
import { useEffect, useState } from "react";
import arrow_yellow_right from "/public/arrow/arrow_dropdown_right.svg";

import Image from "next/image";
import { catalogOptionsHero } from "@/constants/catalog/catalogOptions";
import Link from "next/link";

interface Props {
	idType: string;
}

export const DropDown: React.FC<Props> = ({ idType }) => {
	const [selected, setSelected] = useState(0);
	const [selectedCategory, setSelectedCategory] = useState<Service | null>(
		null,
	);
	const [expandedTypes, setExpandedTypes] = useState<string[]>([]);
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);
	const [isId, setId] = useState("hardwood");

	useEffect(() => {
		setSelectedCategory(dropdowns[idType]?.[selected] ?? null);
	}, [idType, selected]);

	const toggleTypeExpansion = (type: string): void => {
		const updatedExpandedTypes = [...expandedTypes];
		const isTypeExpanded = updatedExpandedTypes.includes(type);

		if (isTypeExpanded) {
			updatedExpandedTypes.splice(updatedExpandedTypes.indexOf(type), 1);
		} else {
			updatedExpandedTypes.push(type);
		}

		setExpandedTypes(updatedExpandedTypes);
	};

	const toggleDropdown = (): void => {
		setIsDropdownOpen(!isDropdownOpen);
	};

	return (
		<section
			className={`absolute inset-0 top-32   w-screen  grid grid-flow-col bg-black text-main-gray z-20 ${
				isDropdownOpen ? "h-max" : "h-max"
			}`}
		>
			<div
				className={` container gap-x-10  grid grid-flow-col bg-black text-main-gray  z-20 ${
					isDropdownOpen ? "h-auto" : "h-auto "
				}`}
			>
				<ul className="text-left py-10 gap-10 ">
					{/* <p className="pb-[15px] text-white">Categories</p> */}
					{idType &&
						dropdowns[idType].map((category, index) => (
							<li
								className={`text-title hover:text-main-yellow cursor-pointer ${
									index === selected
										? "underline text-main-yellow"
										: ""
								}`}
								key={index}
								onMouseEnter={() => {
									setSelected(index);
									setExpandedTypes([]);
									setId(category?.id ?? "");
								}}
							>
								<Link href={category.link}>
									<div className="flex gap-4">
										{category.text}
										{index === selected && (
											<Image
												src={arrow_yellow_right}
												alt="arrow"
											/>
										)}
									</div>
								</Link>
							</li>
						))}
				</ul>

				<ul className="relative py-10 text-left   ">
					{/*                     <p className="pb-[15px] text-white">Material</p>
					 */}
					{selectedCategory?.types?.map((type) => (
						<li
							className=" text-title text-primary"
							key={type.link}
						>
							<Link
								href={type.link}
								style={{ cursor: "pointer" }}
								className={`hover:text-main-yellow ${
									expandedTypes.includes(type.link)
										? "underline text-main-yellow font-bold"
										: ""
								} cursor-pointer flex gap-4`}
							>
								{type.name}
							</Link>

							{expandedTypes.includes(type.link) && (
								<ul className="ml-4">
									{type.popularServices?.map((service) => (
										<li
											className="p-[8px] text-primary hover:text-main-yellow cursor-pointer"
											key={service.link}
										>
											<Link href={service.link}>
												{service.name}
											</Link>
										</li>
									))}
								</ul>
							)}
						</li>
					))}
				</ul>

				<div>
					{/* <div className="flex  items-center gap-4 hover:cursor-pointer">
                        <p className=" pt-[30px] pb-[23px]  underline text-main-yellow">Browse Catalog</p>
                        <Image className="relative top-1" src={arrow_yellow_right} alt="arrow" />
                    </div> */}

					<div className="flex py-10 flex-wrap gap-5 items-start h-max  ">
						{isId &&
							catalogOptionsHero[isId] &&
							catalogOptionsHero[isId].map((link, index) => (
								<Link
									className="catalog-button whitespace-nowrap ease-in-out "
									href={link.url}
									key={index}
								>
									{link.text}
								</Link>
							))}
					</div>
				</div>
			</div>
		</section>
	);
};
