"use client";

import { ourServices } from "@/constants/ourServices/ourServices";

import { useState } from "react";
import { catalogOptionsHero } from "@/constants/catalog/catalogOptions";
import Link from "next/link";
import { ourServicesCardsData } from "@/constants/ourServices/ourServicesCardsData";
import { ServicesCard } from "../ServicesCard/ServicesCard";

export const OurServices: React.FC = (): JSX.Element  => {
	const [clickedService, setClickedService] = useState("tile");

	const handleServiceClick = (newServiceId: string): void => {
		if (clickedService !== newServiceId) {
			setClickedService(newServiceId);
		}
	};

	const selectedCategory = catalogOptionsHero[clickedService];

	return (
		<section className="border-white p-10 rounded-3xl  container w-full px-[10px] component-mb  text-white relative z-10">
			<h2 className="custom-heading sm:text-center first-letter:text-main-yellow">
				Our services
			</h2>
			<ul className="inside-mb w-[100%] cursor-pointer no-scrollbar flex overflow-x-auto">
				{ourServices.map((service) => (
					<li
						key={service.id}
						className={`small-button  ${
							clickedService === service.id
								? "small-button-active"
								: ""
						}`}
						onClick={() => handleServiceClick(service.id)}
						style={{ whiteSpace: "nowrap" }}
					>
						{service.title}
					</li>
				))}
			</ul>

			<ul className="container inside-mb flex slider-gap w-full overflow-x-auto no-scrollbar ">
				{ourServicesCardsData[clickedService].map(
					(card: object, index: number) => {
						return (
							<li className={`${
								index === 0 && "text-main-yellow"
							}`} key={index}>
								<ServicesCard
									heading={""}
									paragraph={""}
									price={0}
									url={""}
									image={""}
									{...card}
								/>
							</li>
						);
					},
				)}
			</ul>

			<ul className="py-2 lg:flex lg:flex-wrap lg:justify-center overflow-x-auto no-scrollbar grid grid-flow-col grid-rows-2 gap-x-3 gap-y-6">
				<h5 className="text-title relative bottom-2 whitespace-nowrap">
					Browse Catalog:
				</h5>
				{selectedCategory &&
					selectedCategory.map((link, index) => (
						<li  key={link.url}>
							<Link
								className={`catalog-button  whitespace-nowrap`}
								href={link.url}
								key={link.text}
							>
								{link.text}
							</Link>
						</li>
					))}
			</ul>
		</section>
	);
};
