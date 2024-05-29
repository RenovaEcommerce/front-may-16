import Image from "next/image";
import circle from "/public/logo/why_section.svg";
import contact from "/public/logo/contact.svg";
import { Reviews } from "../Reviews/Reviews";
import { FAQ } from "../FAQ/FAQ";
import { MyMarkdown } from "../MyMarkdown/MyMarkdown";

type PropsObj = {
	id: number;
	title: string;
	description: string;
};

type Props = {
	whyArray: PropsObj[];
	whyGrid: string[];
};

export const MainWhySection: React.FC<Props> = ({ whyArray, whyGrid, markdown3, faqItems }) => {
	return (
		<section className="container component-mb  mx-auto relative z-10">
			<h2 className="custom-heading md:text-center first-letter:text-main-yellow">
				Why our clients choose us ?
			</h2>
			<ul className="flex overflow-x-auto slider-gap inside-mb no-scrollbar ">
				{whyArray.map((step) => (
					<li
						key={step.id}
						className="min-w-[300px] max-w-[300px]
					lg:min-w-[350px] lg:max-w-[350px] min-h-[200px]  border-solid border-[1px] hover:border-black border-white small-button text-left"
					>

							<div className="mb-5 flex items-center">
								<Image src={contact} alt="" />
								<div className="flex relative left-[-9px]  justify-between ">
									<h3 className="text-white font-light text-title ">
										{step.title}
									</h3>
								</div>
							</div>
							<p className="white-paragraph text-base">
								{step.description}
							</p>

					</li>
				))}
			</ul>

			<ul className="w-max md:mx-auto justify-center grid grid-cols-1 md:grid-cols-2 grid-rows-2 text-title text-left gap-[30px] md:gap-10 component-mb text-white">
				{whyGrid.map((item, index) => (
					<li key={index} className="flex items-center gap-[10px]">
						<Image src={circle} alt="" />
						{item}
					</li>
				))}
			</ul>
			<MyMarkdown markdown={markdown3} />


			<Reviews />
			<FAQ faqItems={faqItems} />


		</section>
	);
};
