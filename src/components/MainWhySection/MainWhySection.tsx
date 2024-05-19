import Image from "next/image";
import circle from "/public/logo/why_section.svg";
import contact from "/public/logo/contact.svg";

type PropsObj = {
	id: number;
	title: string;
	description: string;
};

type Props = {
	whyArray: PropsObj[];
	whyGrid: string[];
};

export const MainWhySection: React.FC<Props> = ({ whyArray, whyGrid }) => {
	return (
		<section className="container mb-[100px] max-md:mb-[50px] md:text-center   mx-auto  text-white relative z-10">
			<h2 className="custom-heading first-letter:text-main-yellow">
				Why our clients choose us ?
			</h2>
			<ul className="flex overflow-x-auto slider-gap inside-mb no-scrollbar ">
				{whyArray.map((step) => (
					<li
						key={step.id}
						className="min-w-[300px] max-w-[300px]
					lg:min-w-[350px] lg:max-w-[350px] min-h-[200px]  border-solid border-[1px] hover:border-black border-white small-button text-left"
					>
						<div className="">
							<div className="mb-5 flex items-center">
								<Image src={contact} alt="" />
								<div className="flex relative left-[-9px]  justify-between ">
									<p className="text-white font-light text-title ">
										{step.title}
									</p>
								</div>
							</div>
							<p className="white-paragraph text-base">
								{step.description}
							</p>
						</div>
					</li>
				))}
			</ul>

			<ul className="w-max md:mx-auto justify-center grid grid-cols-1 md:grid-cols-2 grid-rows-2 text-title text-left gap-[30px] md:gap-10 ">
				{whyGrid.map((item, index) => (
					<li key={index} className="flex items-center gap-[10px]">
						<Image src={circle} alt="" />
						{item}
					</li>
				))}
			</ul>
		</section>
	);
};
