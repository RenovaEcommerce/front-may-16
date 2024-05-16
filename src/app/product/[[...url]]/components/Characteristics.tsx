import React from "react";
import { productItems } from "@/constants/itemCards/itemCards";
import Markdown from "react-markdown";

export const Characteristics: React.FC = () => {
	const product = productItems[0];

	return (
		<section className="container component-mb">
			<div className="sm:flex justify-between">
				<div className="max-w-[459px]">
					<h2 className="custom-heading  inside-mb">
						Characteristics
					</h2>
					<div className="grid grid-cols-2 gap-5  items-center">
						{product.manufacturer && (
							<>
								<h2 className="text-main-gray text-title">
									Manufacturer
								</h2>{" "}
								<h2 className="text-white">
									{product.manufacturer}
								</h2>
							</>
						)}
						{product.thickness && (
							<>
								<h2 className="text-main-gray text-title">
									Sizes
								</h2>
								<h2 className="text-white">
									{product.thickness}
								</h2>
							</>
						)}
						{product.material && (
							<>
								<h2 className="text-main-gray text-title">
									Material
								</h2>
								<h2 className="text-white">
									{product.material}
								</h2>
							</>
						)}
						{product.type && (
							<>
								<h2 className="text-main-gray text-title">
									Type
								</h2>
								<h2 className="text-white">{product.type}</h2>
							</>
						)}

						{product.application && (
							<>
								<h2 className="text-main-gray text-title">
									Application
								</h2>
								<h2 className="text-white">
									{product.application}
								</h2>
							</>
						)}
					</div>
					<div className="my-10">
						<Markdown>{""}</Markdown>
					</div>
				</div>
				<div className="max-w-[459px] max-sm:component-mb">
					<h3 className="custom-heading inside-mb">How to get</h3>
					<div className="grid grid-cols-2 gap-5">
						<p className="text-white  text-title">TYPE</p>
						<p className="text-white font-light">
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit.
						</p>
						<p className="text-white text-title">TYPE</p>
						<p className="text-white font-light">
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit.
						</p>
						<p className="text-white  text-title">TYPE</p>
						<p className="text-white font-light">
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};
