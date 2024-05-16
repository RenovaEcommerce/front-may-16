"use client";

import Image from "next/image";
import Link from "next/link";

import classes from "./Header.module.css";

import header_logo from "/public/logo/header_logo.svg";
import mobile_menu from "/public/logo/mobile_menu.svg";
import search from "/public/logo/icons8-search.svg";
import closing from "/public/logo/close.svg";

import header_arrow_down from "/public/arrow/header_arrow_down.svg";
import {
	ICON_SIZE,
	headerData,
	headerIcons,
} from "@/constants/header/headerProperties";
import { DropDown } from "../Dropdown/DropDown";
import { useEffect, useState } from "react";
import { Geo } from "../Geo/Geo";
import NavMobile from "../NavMobile/NavMobile";
import { SOCIALS_SIZE, socialIcons } from "@/constants/socialIcons/socialIcons";

export const Header: React.FC = (): JSX.Element => {
	const [hasIdType, setHasIdtype] = useState("");
	const [isOpen, setIsOpen] = useState(false);
	const [isDropdownHovered, setIsDropdownHovered] = useState(false);
	const [isNavMobile, setIsNavMobile] = useState(false);

	/* search */

	const [searchQuery, setSearchQuery] = useState("");
	const [searchResults, setSearchResults] = useState<any[]>([]); // Состояние для
	const [searchDropdown, setSearchDropdown] = useState(false);

	const handleSearchInputChange = async (
		e: React.ChangeEvent<HTMLInputElement>,
	) => {
		setSearchQuery(e.target.value);
		setSearchDropdown(true);
		try {
			const response = await fetch(
				`http://localhost:4100/blog/search/${e.target.value}`,
			); // Отправляем GET запрос к API
			if (!response.ok) {
				throw new Error("Ошибка при выполнении запроса");
			}
			const data = await response.json(); // Получаем данные из ответа
			setSearchResults(data); // Сохраняем результаты поиска в состояние
		} catch (error) {
			console.error("Ошибка при выполнении запроса:", error);
		}
	};

	/* search end */

	const dropdownOpenHandler = (id: string): void => {
		setHasIdtype(id);
		setIsOpen(true);
	};

	useEffect(() => {
		const handleOutsideClick = (ele: any): void => {
			if (isNavMobile && !ele.target.closest(".nav-mobile-container")) {
				setIsNavMobile(false);
			}
		};

		if (isNavMobile) {
			document.body.style.overflow = "hidden";
			document.addEventListener("click", handleOutsideClick);
		} else {
			document.body.style.overflow = "auto";
			document.removeEventListener("click", handleOutsideClick);
		}

		return () => {
			document.body.style.overflow = "auto";
			document.removeEventListener("click", handleOutsideClick);
		};
	}, [isNavMobile]);


	return (
		<header className="container sm:mb-10">
			<Geo />
			<div className="flex pb-5 justify-between items-end  border-b-[1px] border-solid border-black">
				<ul className="flex gap-5">
					{socialIcons?.map(({ icon, href, id }: any) => (
						<li key={id}>
							<Link href={href}>
								<Image
									src={icon}
									height={SOCIALS_SIZE}
									width={SOCIALS_SIZE}
									alt="social-icons"
								/>
							</Link>
						</li>
					))}
				</ul>

				<div className="relative flex max-sm:hidden items-center gap-2">
					<input
						placeholder="Search"
						className="h-[42px] w-96 border-b border-zinc-600 justify-between items-center inline-flex bg-transparent placeholder:gray-paragraph text-white"
						required
						type="text"
						value={searchQuery}
						onChange={handleSearchInputChange} // Обработчик изменения ввода
						onMouseDown={() => setSearchDropdown(true)}
					/>

					<Image alt="search-icon" src={search} height={25} />

					<div
						className={`${
							searchDropdown ? "block" : "hidden"
						} h-96 w-96  top-20 flex flex-col gap-2  absolute bg-black text-white p-5 rounded-3xl mx-auto z-50 overflow-y-auto`}
					>
						<div className="flex items-center">
							<h5 className="small-button">Products</h5>
							<h5 className="small-button">Information</h5>
							<button
								className="ml-auto relative "
								onClick={() => setSearchDropdown(false)}
							>
								<Image
									alt="form-closing-button"
									src={closing}
								/>{" "}
							</button>
						</div>
						{searchResults.map((result) => (
							<Link
								onClick={() => setSearchDropdown(false)}
								className="border-b pb-2 border-white border-solid border-b hover:bg-main-yellow"
								href={`/blog/${result.url}`}
							>
								{result.metaTitle}
							</Link>
						))}
					</div>
				</div>

				{/* <p className="text-main-gray max-md:hidden">
          6th Floor, 1606 ASCEND, Adress Where City 400601
        </p> */}
				<div className="text-right flex flex-col">
					<a className="text-main-yellow" href="tel:123-44-444">
						+ 123 45 6789
					</a>
					<a
						className="text-main-yellow"
						href="mailto:email@example.com"
					>
						email@example.com
					</a>
				</div>
			</div>

			<div className={classes.header}>
				<Link href="/">
					<Image
						src={header_logo}
						height={37}
						width={176}
						alt="header logo"
					/>
				</Link>

				<ul className={classes.header_links}>
					{headerData.map(({ title, dropdown, href, id }) => (
						<li key={id} className="flex items-center">
							<Link className="flex" href={href}>
								{title}
							</Link>
							{dropdown && (
								<Image
									onMouseEnter={() => {
										dropdownOpenHandler(id);
										setIsOpen(true);
									}}
									onMouseLeave={() => {
										if (!isDropdownHovered || !isOpen) {
											setTimeout(() => {
												setIsOpen(false);
											}, 60);
										} else {
											setIsDropdownHovered(true);
										}
									}}
									src={header_arrow_down}
									height={ICON_SIZE}
									width={ICON_SIZE}
									alt="catalog arrow down"
									className="hover:shadow-2xl"
								/>
							)}
						</li>
					))}
				</ul>

				<div
					className={`${
						isNavMobile
							? "h-screen flex flex-col items-center fixed bg-main-dark z-50 w-full left-0 right-0 font-bold rounded transition-all overflow-hidden"
							: "max-h-0"
					} lg:hidden absolute bg-main-dark z-50 top-0 w-full left-0 right-0 font-bold rounded transition-all overflow-hidden`}
					style={{ overflowY: isNavMobile ? "hidden" : "auto" }}
				>
					<NavMobile
						isNavMobile={isNavMobile}
						setIsNavMobile={setIsNavMobile}
					/>
				</div>

				<div className="flex items-center">
					<div className={classes.header_icons}>
						{headerIcons.map(({ id, alt, href, icon }) => (
							<Link href={href} key={id}>
								<Image
									src={icon}
									height={ICON_SIZE}
									width={ICON_SIZE}
									alt={alt}
								/>
							</Link>
						))}
					</div>
					<div
						onClick={() => setIsNavMobile(!isNavMobile)}
						className="cursor-pointer lg:hidden ml-[20px]"
					>
						<Image
							src={mobile_menu}
							height={ICON_SIZE}
							width={ICON_SIZE}
							alt="mobile_menu"
						/>
					</div>
				</div>
			</div>
			<div
				className={` z-20  ${
					isOpen || isDropdownHovered ? " block" : "hidden"
				}`}
			>
				<div
					onMouseEnter={() => setIsDropdownHovered(true)}
					onMouseLeave={() => {
						setIsDropdownHovered(false);
					}}
				>
					<DropDown idType={hasIdType} />
				</div>
			</div>
		</header>
	);
};
