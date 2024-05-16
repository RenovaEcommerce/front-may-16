import Image from "next/image";

import contact from "/public/logo/contact.svg";

import Link from "next/link";

interface DescriptionObject {
	p1: string
	p2: string
	p3: string
}

interface HowWeWorkObj {
    id: number;
    title: string;
    description: DescriptionObject;
    imagePath: string; // Added imagePath field
}

type Props = {
    howWeWork: HowWeWorkObj[];
}

const HowWeWork: React.FC<Props> = ({ howWeWork }) => (
	<section className="container component-mb ">
		<h2 className="inside-mb w-max mx-auto custom-heading first-letter:text-main-yellow">
			How we work
		</h2>

		<ul className="flex overflow-x-auto slider-gap  no-scrollbar ">

			{howWeWork.map((step: HowWeWorkObj) => (

				<li
					key={step.id}
					className="min-w-[350px] max-w-[350px]
					lg:min-w-[450px] lg:max-w-[450px] min-h-[250px]  border-solid border-[1px] hover:border-black border-white small-button "
				>
					<div className="">
						<div className="mb-5 flex items-center">
							<Image src={contact} alt="" />
							<div className="flex relative left-[-9px]  justify-between ">
								<p className="text-white font-light text-title ">
									{step?.title}
								</p>
							</div>
						</div>

						<ul className="pr-2">
							<li className="relative left-4 white-paragraph text-base flex items-start gap-2 min-h-[50px]">
								<span className="  bg-black rounded-full text-main-gray h-8 p-2 w-8 flex items-center justify-center">
									1
								</span>

								{step.description.p1}
							</li>
							<li className="relative left-4 white-paragraph text-base flex items-start gap-2 min-h-[50px]">
								<span className="bg-black rounded-full text-main-gray h-8 p-2 w-8 flex items-center justify-center">
									2
								</span>
								{step.description.p2}
							</li>
							<li className="relative left-4 white-paragraph text-base flex items-start gap-2 min-h-[50px]">
								<span className="bg-black rounded-full text-main-gray h-8 p-2 w-8 flex items-center justify-center">
									3
								</span>
								{step.description.p3}
							</li>
						</ul>
					</div>
				</li>
			))}
		</ul>
	</section>
);

export default HowWeWork;
