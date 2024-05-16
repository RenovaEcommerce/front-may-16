"use client";

import { Button } from "@/components/Button/Button";
import { useCallback, useState } from "react";
import { FilterMobile } from "./FilterMobile";
import Select from "react-select";
import { usePathname, useSearchParams } from "next/navigation";
import { productFilter } from "@/constants/catalog/catalogFilters";
import { useFilters } from "@/lib/urlSearch/urlSearch";

const CatalogSearch = ({ products, params }: any) : any => {
	const [hasShowAdditionalRows, sethasShowAdditionalRows] = useState(false);
	const [isFilterMobile, setFilterMobile] = useState(false);

	const searchParams = useSearchParams();

	const pathname = usePathname();

	/* const handleButtonClick = () => {
		sethasShowAdditionalRows(!hasShowAdditionalRows);
	}; */

	const filterSelection = pathname.split("/");
	filterSelection.shift();
	const filterOption = filterSelection[1];
	const filterOptions = productFilter[filterOption];

	const createQueryString = useCallback(
		(name: string, value: string) => {
			const params = new URLSearchParams(searchParams.toString());
			params.set(name, value);

			return params.toString();
		},
		[searchParams],
	);

	const { filters, setFilters, setIsChecked, isChecked } = useFilters();

	return (
		<section className="relative mx-auto xl:max-w-[1440px] mb-10 px-[10px] z-20   ">
			<div className="px-5 max-sm:hidden gap-3 flex mx-auto w-full overflow-x-auto no-scrollbar ">
				{filterOptions && (
					<>
						<div className="max-w-[273px] flex flex-col ">
							<label className="text-white mb-5">Search</label>
							<input
								placeholder=""
								className="w-[273px] h-[42px] px-[15px] border-b border-zinc-600 justify-between items-center inline-flex bg-transparent placeholder:gray-paragraph text-white"
								required
								type="text"
							/>
						</div>
						<div className=" w-max flex flex-col">
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
										zIndex: 99999,
									}),
									option: (provided, state) => ({
										...provided,
										backgroundColor: state.isFocused
											? "#FBD331"
											: "black",
										color: state.isFocused
											? "black"
											: "white",
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
										color: state.isFocused
											? "black"
											: "white",
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
										color: state.isFocused
											? "black"
											: "white",
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

						<div className="max-xl:hidden flex flex-row xl:flex-col items-center justify-center text-center mt-10">
							<Button
								variant="primary"
								onClick={() => {
									setIsChecked(true);
									setFilterMobile(false);
								}}
							>
								Search
							</Button>

							<p className="xl:mt-5 max-xl:ml-10 text-title text-white">
								Clear All
							</p>
						</div>
					</>
				)}
			</div>

			<div className="xl:hidden max-sm:hidden mt-10 flex flex-row xl:flex-col items-center justify-center text-center">
				<Button variant="primary" onClick={() => setIsChecked(true)}>
					Search
				</Button>

				<p className="xl:mt-5 max-xl:ml-10 text-title text-white">
					Clear All
				</p>
			</div>

			<div
				className={`${
					isFilterMobile
						? "h-screen flex flex-col items-center fixed bg-main-dark z-50 w-full left-0 right-0 font-bold rounded transition-all overflow-hidden"
						: "max-h-0"
				} sm:hidden absolute bg-main-dark z-50 top-0 w-full left-0 right-0 font-bold rounded transition-all overflow-hidden`}
				style={{ overflowY: isFilterMobile ? "hidden" : "auto" }}
			>
				<FilterMobile
					isFilterMobile={isFilterMobile}
					setFilterMobile={setFilterMobile}
				/>
			</div>

			<div className="flex flex-col sm:flex-row md:justify-center gap-5 sm:gap-10 mt-[40px] text-main-gray">
				<div className="flex justify-between items-center">
					<p>
						Found{" "}
						<span className="text-white font-bold">{products}</span>{" "}
						items
					</p>
					<button
						className="sm:hidden w-[108px] h-[42px] p-[10px] content-center items-center rounded-[40px] font-bold text-main-yellow border-[1px] border-main-yellow bg-transparent gap-[10px]"
						onClick={() => setFilterMobile(!isFilterMobile)}
					>
						Filter
					</button>
				</div>
				<div className="flex items-center gap-2">
					<p>Sort By</p>
					<select defaultValue="price">
						<option value="asc">Ascending</option>
						<option value="desc">Descending</option>
						<option value="price">Price</option>
					</select>
				</div>
			</div>
		</section>
	);
};

export default CatalogSearch;
