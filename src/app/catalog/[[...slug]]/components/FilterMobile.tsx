"use client";

import { Button } from "@/components/Button/Button";
import Image from "next/image";
import React from "react";
import mobile_menu_close from "/public/logo/mobile_menu_close.svg";
import Select from "react-select";
import { productFilter } from "@/constants/catalog/catalogFilters";
import { usePathname } from "next/navigation";
import { useFilters } from "@/lib/urlSearch/urlSearch";

type FilterMobileProps = {
    isFilterMobile: boolean;
    setFilterMobile: React.Dispatch<React.SetStateAction<boolean>>;
}

export const FilterMobile: React.FC<FilterMobileProps> = ({
	isFilterMobile,
	setFilterMobile,
}: any) => {

	const { filters, setFilters, setIsChecked, isChecked } = useFilters();

	const pathname = usePathname();

	const filterSelection = pathname.split("/");
	filterSelection.shift();
	const filterOption = filterSelection[1];
	const filterOptions = productFilter[filterOption];

	return (
		<div
			className={`fixed top-0 left-0 right-0 bottom-0 z-50 bg-main-dark flex flex-col overflow-y-auto ${
				isFilterMobile ? "block" : "hidden"
			}`}
		>
			<div
				onClick={() => setFilterMobile(!isFilterMobile)}
				className="absolute top-[21px] right-[21px] cursor-pointer lg:hidden ml-[20px]"
			>
				<Image
					src={mobile_menu_close}
					height={21}
					width={21}
					alt="mobile_menu"
				/>
			</div>
			<div className="mt-[50px] px-[10px] mb-[29px]">
				<h2 className="font-black text-white text-[50px] mb-[50px]">
					Filter
				</h2>
				<div className="w-max mx-auto mb-10 flex flex-col gap-y-10">
					<div className="w-max flex flex-col">
						<label className="text-white mb-5">Color</label>
						<Select
							options={filterOptions.color}
							isMulti
							closeMenuOnSelect={false}
							styles={{
								control: (provided, state) => ({
									...provided,
									borderRadius: "none",
									width: "273px",
									height: "42px",
									borderBottom: "1px solid #5A5A5A",
									borderTop: state.isFocused
										? "none"
										: "none",
									borderRight: state.isFocused
										? "none"
										: "none",
									borderLeft: state.isFocused
										? "none"
										: "none",
									justifyContent: "space-between",
									alignItems: "center",
									display: "inline-flex",
									backgroundColor: "transparent",
									color: "#FFFFFF",
								}),
								placeholder: (provided) => ({
									...provided,
									color: "#9CA3AF",
									border: "none",
								}),
								singleValue: (provided) => ({
									...provided,
									color: "#FFFFFF",
								}),
								dropdownIndicator: (provided) => ({
									...provided,
									color: "yellow",
								}),
								menu: (provided) => ({
									...provided,
									borderRadius: "none",
									backgroundColor: "black",
									color: "white",
								}),
								option: (provided, state) => ({
									...provided,
									backgroundColor: state.isFocused
										? "#FBD331"
										: "black",
									color: state.isFocused ? "black" : "white",
								}),
							}}
							onChange={(selectedOption) => {
								let colorArr = selectedOption.map(
									(item) => item.value,
								);
								let colorQuerry = colorArr.join(",");

								setFilters({
									...filters,
									color: colorQuerry,
								});
							}}
						/>
					</div>
					<div className="w-max flex flex-col">
						<label className="text-white mb-5">Material</label>
						<Select
							options={filterOptions.material}
							isMulti
							closeMenuOnSelect={false}
							styles={{
								control: (provided, state) => ({
									...provided,
									borderRadius: "none",
									width: "273px",
									height: "42px",
									borderBottom: "1px solid #5A5A5A",
									borderTop: state.isFocused
										? "none"
										: "none",
									borderRight: state.isFocused
										? "none"
										: "none",
									borderLeft: state.isFocused
										? "none"
										: "none",
									justifyContent: "space-between",

									alignItems: "center",
									display: "inline-flex",
									backgroundColor: "transparent",
									color: "#FFFFFF",
								}),
								input: (provided) => ({
									...provided,
									color: "white", // Установка цвета текста в белый
								}),
								placeholder: (provided) => ({
									...provided,
									color: "#9CA3AF",
									border: "none",
								}),
								singleValue: (provided) => ({
									...provided,
									color: "#FFFFFF",
								}),
								dropdownIndicator: (provided) => ({
									...provided,
									color: "yellow",
								}),
								menu: (provided) => ({
									...provided,
									borderRadius: "none",
									backgroundColor: "black",
									color: "white",
								}),

								option: (provided, state) => ({
									...provided,
									backgroundColor: state.isFocused
										? "#FBD331"
										: "black",
									color: state.isFocused ? "black" : "white",
								}),
							}}
							onChange={(selectedOption) => {
								let materialArr = selectedOption.map(
									(item) => item.value,
								);
								let materialQuerry = materialArr.join(",");

								setFilters({
									...filters,
									material: materialQuerry,
								});
							}}
						/>
					</div>
					<div className="w-max flex flex-col">
						<label className="text-white mb-5">Style</label>
						<Select
							options={filterOptions.style}
							isMulti
							closeMenuOnSelect={false}
							styles={{
								control: (provided, state) => ({
									...provided,
									borderRadius: "none",
									width: "273px",
									height: "42px",
									borderBottom: "1px solid #5A5A5A",
									borderTop: state.isFocused
										? "none"
										: "none",
									borderRight: state.isFocused
										? "none"
										: "none",
									borderLeft: state.isFocused
										? "none"
										: "none",
									justifyContent: "space-between",

									alignItems: "center",
									display: "inline-flex",
									backgroundColor: "transparent",
									color: "#FFFFFF",
								}),
								input: (provided) => ({
									...provided,
									color: "white", // Установка цвета текста в белый
								}),
								placeholder: (provided) => ({
									...provided,
									color: "#9CA3AF",
									border: "none",
								}),
								singleValue: (provided) => ({
									...provided,
									color: "#FFFFFF",
								}),
								dropdownIndicator: (provided) => ({
									...provided,
									color: "yellow",
								}),
								menu: (provided) => ({
									...provided,
									borderRadius: "none",
									backgroundColor: "black",
									color: "white",
								}),

								option: (provided, state) => ({
									...provided,
									backgroundColor: state.isFocused
										? "#FBD331"
										: "black",
									color: state.isFocused ? "black" : "white",
								}),
							}}
							onChange={(selectedOption) => {
								/* {selectedOption && router.push(
										pathname +
											"/search?" +
											createQueryString(
												"style",
												selectedOption[0].value,
											),
									);} */
							}}
						/>
					</div>
				</div>
				<div className="max-lg:hidden flex flex-row xl:flex-col items-center justify-center text-center mt-10">
					<Button
						variant="primary"
						onClick={() => setIsChecked(true)}
					>
						Search
					</Button>

					<p className="xl:mt-5 max-xl:ml-10 text-title text-white">
						Clear All
					</p>
				</div>

				<div className="w-full! items-center justify-center text-center">
					<Button
						onClick={() => {
							setIsChecked(true);
							setFilterMobile(false);
						}}
						variant="primary"
					>
						Find Products
					</Button>
					<p className="mt-5 text-white">Clear All</p>
				</div>
			</div>
		</div>
	);
};
