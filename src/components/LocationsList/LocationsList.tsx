import React from "react";
import { locationsList } from "@/constants/locationsList/locationsList";
import Link from "next/link";

export const LocationsList: React.FC = () => {
	return (
		<section className="container relative z-30">
			<h3 className="text-title text-white inside-mb">
				Services Locations
			</h3>
			<div className="flex overflow-x-auto no-scrollbar">
				<ul className="grid grid-cols-3 grid-rows-6 grid-flow-col    ">
					{locationsList.map((location) => (
						<li
							key={location.location}
							className="gray-paragraph hover:text-white"
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
