"use client";

// Import necessary dependencies and assets
import Image from "next/image";
import right from "/public/logo/hero_right_arrow.svg";
import down from "/public/arrow/arrow_dropdown_down.svg";
import { useState } from "react";

type FAQItem = {
	question: string;
	answer: string;
};

type FaqProps = {
	faqItems: FAQItem[];
};

export const FAQ: React.FC<FaqProps> = ({ faqItems }): JSX.Element => {
	const [clickedItems, setClickedItems] = useState(Array(4).fill(false));

	// Function to handle item click and toggle visibility
	const handleItemClick = (index: any): void => {
		setClickedItems((prevClickedItems) => {
			const newClickedItems = [...prevClickedItems];
			newClickedItems[index] = !newClickedItems[index];

			return newClickedItems;
		});
	};

	return (
		<section className="container component-mb  relative z-10">
			<h3 className="w-max mx-auto  custom-heading first-letter:text-main-yellow">
				FAQ
			</h3>

			<ul className="w-full md:w-[650px] mx-auto">
				{faqItems.map((item: FAQItem, index: number) => (
					<li key={`q${index + 1}`} id={`q${index + 1}`}>

							<div
								onClick={() => handleItemClick(index)}
								className="flex items-center mb-[32px] text-main-gray font-medium text-title hover:cursor-pointer hover:shadow-lg"
							>
								<Image
									src={clickedItems[index] ? down : right}
									height={25}
									width={25}
									alt=""
								/>
								<h4 className="ml-[10px]">{item.question}</h4>
							</div>

							<p
								className={`mb-[32px] text-main-gray ${
									clickedItems[index] ? "block" : "hidden"
								}`}
							>
								{item.answer}
							</p>

					</li>
				))}
			</ul>
		</section>
	);
};
