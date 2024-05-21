import React from "react";
import { locationsList } from "@/constants/locationsList/locationsList";
import Link from "next/link";

export const LocationsList: React.FC = () => {
	return (
		<section className="container relative z-30 inside-mb">
			<h3 className="text-title text-white inside-mb">Locations</h3>
			<div
				className="flex overflow-x-auto no-scrollbar"
				style={{ height: "calc(100% / 5)" }}
			>
				<ul className="flex flex-wrap justify-between h-full text-left">
					{locationsList.map((location) => (
						<li
							key={location.location}
							className="gray-paragraph hover:text-white hover:cursor-pointer flex-grow"
							style={{ flex: "1 0 18%", maxWidth: "18%" }} // 18% for 5 items per row considering margins
						>
							<Link href={location.link}>
								{location.location}
							</Link>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
};
