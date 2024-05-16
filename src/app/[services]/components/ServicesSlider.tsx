import React from "react";
import cardImage from "/public/contentImages/ourServices/cabinets.jpeg";
import Link from "next/link";
import Image from "next/image";

interface Service {
	heading: string;
	paragraph: string;
	url: string;
	image: string;
	price: string;
}

type ServiceSlider = {
	servicesSlider: Service[];
};

const ServicesSlider: React.FC<ServiceSlider> = ({ servicesSlider }) => {

	return (
		<section className="relative container pl-5 flex my-20 slider-gap w-full overflow-x-auto no-scrollbar ">
			{servicesSlider &&
				servicesSlider.map((card) => {
					return (
						<div
							className="justify-between min-w-[300px] min-h-[490px]
              md: md:max-h-[487px]  lg:min-w-[350px] lg:min-h-[516px]  border-solid border-[1px] hover:[border-black] border-white rounded-3xl font-light "
							key={card.heading}
						>
							<Image
								className="rounded-t-xl mx-auto mb-5"
								src={cardImage}
								height={210}
								alt="service image"
							/>

							<h3 className="text-white min-h-[78px] mb-5 font-light text-title px-2 pt-2 ">
								{card.heading}
							</h3>

							<p className="px-2 top-0 white-paragraph min-h-[111px] text-base mb-5">
								{card.paragraph}
							</p>

							<div className="flex items-center justify-between px-2">
								<p className="relative   text-main-yellow">
									{card.price}
								</p>
								<Link
									className="catalog-button"
									href={card.url}
								>
									Browse
								</Link>
							</div>
						</div>
					);
				})}
		</section>
	);
};

export default ServicesSlider;
