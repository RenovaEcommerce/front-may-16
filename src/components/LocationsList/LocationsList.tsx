'use client'
import React from "react";
import { locationsList } from "@/constants/locationsList/locationsList";
import Link from "next/link";

export const LocationsList: React.FC = () => {

	return (
		<section className="container relative z-30 inside-mb">
			<h3 className="text-title text-white inside-mb">Washington</h3>
			<nav className="inside-mb">
				<ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-8 gap-x-4 text-left">
					{locationsList.wa.map((location) => (
						<li
							key={location.location}
							className="gray-paragraph hover:text-white hover:cursor-pointer whitespace-nowrap"
						>
							<Link href={location.link}>
								{location.location}
							</Link>
						</li>
					))}
				</ul>
			</nav>
			{/* <h3 className="text-title text-white inside-mb">
				British Columbia
			</h3>
			<div>
				<ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-8 gap-x-4 text-left">
					{locationsList.bc.map((location) => (
						<li
							key={location.location}
							className="gray-paragraph hover:text-white hover:cursor-pointer whitespace-nowrap"
						>
							<Link href={location.link}>
								{location.location}
							</Link>
						</li>
					))}
				</ul>
			</div> */}

		</section>
	);
};
