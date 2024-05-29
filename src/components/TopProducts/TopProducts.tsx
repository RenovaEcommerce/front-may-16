"use client";

import { topProducts } from "@/constants/topProducts/topProducts";
import { useEffect, useState } from "react";
import { ItemCard } from "../ItemCard/ItemCard";
import Link from "next/link";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

interface Item {
	id: number;
	name: string;
	cover: string;
	url: string;
	style: string;
	color: string;
	price: string;
	variants: string;
	thickness: string;
	measurement: string;
	image: string;
	title: string;
	description: string;
}

interface Props {
	data: Item[]; // Define the type of the data prop
}

export const TopProducts: React.FC = (): JSX.Element => {
	const [clickedService, setClickedService] = useState("tile");
	const [data, setData] = useState<Item[] | null>(null); // Initialize data as null

	useEffect(() => {
		const fetchData = async (): Promise<any> => {
			// Specify Promise return type
			const response = await fetch(
				`http://localhost:4100/products/topproducts/${clickedService}`,
			);
			const data = await response.json();
			setData(data);

			return data; // Explicitly return data (optional)
		};

		fetchData();
	}, [clickedService]);

	return (
		<section className="w-full max-w-[1440px] px-[10px] mx-auto z-10 relative text-main-gray mb-[100px] max-xl:mb-[50px]">
			<div className="flex flex-col items-center md:flex-row">
				<div className="md:text-center md:pr-8 w-full md:w-[35%] xl:w-[28%] ">
					<h2 className="custom-heading max-lg:text-[40px] mb-5 sm:mb-10 leading-tight first-letter:text-main-yellow">
						Top<br></br> Products
					</h2>
					<ul className="flex inside-mb overflow-x-auto no-scrollbar overflow-y-hidden md:flex-col items-center">
						{topProducts.map((topProduct) => (
							<li
								className={`small-button ${
									clickedService === topProduct.id
										? "small-button-active"
										: ""
								}`}
								key={topProduct.title}
								style={{ whiteSpace: "nowrap" }}
								onClick={() => setClickedService(topProduct.id)}
							>
								<div className="flex items-center gap-5">
									{topProduct.title}
								</div>
							</li>
						))}
					</ul>
					<Link
						href="/catalog"
						className="max-md:hidden w-[198px] h-[60px] p-[10px] content-center items-center
                        rounded-[40px] font-bold text-main-dark bg-main-yellow text-main-yellow border-[1px] border-solid border-main-yellow bg-transparent
                        gap-[10px]"
					>
						Go to catalog
					</Link>
				</div>
				<ul className="w-full inside-mb flex slider-gap   md:w-[56%] xl:w-[72%] overflow-x-auto no-scrollbar ">
					{data &&
						data.length > 0 && // Check for data and its length before mapping
						data.map((item: Item, index: number) => {
							return (
								<li key={index}>
									<Link href="/product">
										<ItemCard {...item} />
									</Link>
								</li>
							);
						})}

					<Link
						href="/catalog"
						className="md:hidden w-[198px] h-[60px] p-[10px] content-center items-center
						rounded-[40px] font-bold text-main-yellow border-[1px] border-main-yellow bg-transparent
						gap-[10px]"
					>
						Go to catalog
					</Link>
				</ul>
			</div>
		</section>
	);
};
