import Image from "next/image";
import circle from "/public/logo/why_section.svg";

type Perk = {
    heading: string;
    paragraph: string;
};

type Props = {
    phrase1: string;
    phrase2: string;
	image1: string
	image1alt: string
	priceLine1: string;
	priceLine2: string;
    sectionH2: string;
    sectionP1: string;
    sectionP2: string;
	image2: string;
	image2alt: string
    section2H2: string;
    section2P1: string;
    section2P2: string;
    perks: Perk[];
};

const ServicesAbout: React.FC<Props> = ({
	phrase1,
	phrase2,
	priceLine1,
	priceLine2,
	image1,
	image1alt,
	sectionH2,
	sectionP1,
	sectionP2,
	image2,
	image2alt,
	section2H2,
	section2P1,
	section2P2,
	perks,
}) => {

	console.log(phrase1)

	return (
		<section className="container component-mb relative z-10">
			{/* mobile tablet  version 1 */}
			<div className="lg:hidden">
				<div className="component-mb max-sm:[block w-full mx-auto max-w-[1440px] relative z-10 flex flex-col items-center]">
					<div className="flex-col">
						<div className="max-w-full ">
							<p className="text-white font-light text-title mb-5">
								{phrase1}
							</p>
							<h2 className="custom-heading first-letter:text-main-yellow ">
								{sectionH2}
							</h2>
						</div>
						<div className="sm:max-lg:hidden relative h-[250px] w-full left-3 mb-5">
							<Image
								className="rounded-l-xl"
								src={image1}
								alt={image1alt}
								fill
							/>
						</div>
					</div>

					<div className="flex">
						<div className="lg:mt-[44px]">
							<p className="mb-8 text-main-yellow items-center">
								{priceLine1}
							</p>
							<p className="text-main-gray ml-auto mb-10">
								{sectionP1}
							</p>
							<p className="text-main-gray ml-auto">
								{sectionP2}
							</p>
						</div>
					</div>
				</div>

				<ul className="flex component-mb slider-gap w-full overflow-y-hidden overflow-x-auto no-scrollbar ">
					{perks.map((item) => {
						return (
							<li
								key={item.heading}
								className="h-max hover:h-max min-w-[350px]  border-solid border-[1px] hover:border-black border-white small-button text-white font-light text-title"
							>
								<div className="mb-5 flex items-center">
									<Image src={circle} alt="circle icon" />

									<h3 className="text-white font-light text-title relative left-4 ">
										{item.heading}
									</h3>
								</div>
								<p className="white-paragraph text-base min-h-[67px] ">
									{item.paragraph}
								</p>
							</li>
						);
					})}
				</ul>

				{/* mobile tablet version 2 */}
				<div className="lg:hidden max-sm:block relative z-10  flex flex-col">
					<div className="flex-col">
						<div className="max-w-full">
							<h3 className="text-white font-light text-title mb-5">
								{phrase2}
							</h3>
							<h2 className="custom-heading ">{section2H2}</h2>
						</div>
						<div className="sm:max-lg:hidden relative h-[250px] w-full right-3 mb-5">
							<Image
								className="rounded-r-xl"
								src={image2}
								alt={image2alt}
								fill
							/>
						</div>
					</div>
					<div className="flex">
						<div className="lg:mt-[44px]">
							<p className="mb-8 text-main-yellow items-center">
								{priceLine2}
							</p>
							<p className="text-main-gray ml-auto mb-10">
								{section2P1}
							</p>
							<p className="text-main-gray ml-auto">
								{section2P2}
							</p>
						</div>
					</div>
				</div>
			</div>

			{/* tablet and desktop */}
			<div className="max-lg:hidden">
				<div className="text-right  lg:[block w-full mx-auto max-w-[1440px] relative z-10 mb-20 flex flex-col item-center lg:justify-end]  ">
					<div className="flex ">
						<div className="max-w-full ">
							<p className="text-white font-light text-title">
								{phrase1}
							</p>
							<h2 className="custom-heading max-lg:text-[40px] leading-tight first-letter:text-main-yellow   mb-10">
								{sectionH2}
							</h2>
						</div>
					</div>
					<div className="flex items-end gap-10">
						<div className="lg:max-w-[826px] mt-[44px]  lg:items-end">
							<p className="mb-8 text-main-yellow items-center">
								{priceLine1}
							</p>
							<p className="text-main-gray  mb-10">{sectionP1}</p>
							<p className="text-main-gray ">{sectionP2}</p>
							<div className="relative lg:hidden mt-[40px] sm:mx-auto sm:w-full"></div>
						</div>
						<div className="relative h-[300px] w-[600px] max-xl:hidden">
							<Image
								src={image1}
								fill
								alt={image1alt}
								className="rounded-l-xl sm:rounded-3xl " // Убедитесь, что изображение растягивается на всю ширину
							/>
						</div>
					</div>
				</div>

				<ul className="flex inside-mb slider-gap w-full overflow-y-hidden overflow-x-auto no-scrollbar ">
					{perks.map((item) => {
						return (
							<li
								key={item.heading}
								className="h-max hover:h-max min-w-[350px]   border-solid border-[1px] hover:border-black  small-button text-white font-light text-title"
							>
								<div className="mb-5 flex items-center">
									<Image src={circle} alt="circle icon" />

									<h3 className="text-white font-light text-title relative left-4 ">
										{item.heading}
									</h3>
								</div>
								<p className="white-paragraph text-base min-h-[67px] ">
									{item.paragraph}
								</p>
							</li>
						);
					})}
				</ul>

				<div className=" lg:[block w-full mx-auto max-w-[1440px] relative z-10 flex flex-col item-center lg:justify-end]  ">
					<div className="flex justify-end">
						<div className="text-right">
							<p className="text-white font-light text-title">
								{phrase2}
							</p>
							<h2 className="custom-heading max-lg:text-[40px] leading-tight first-letter:text-main-yellow  mb-10">
								{section2H2}
							</h2>
						</div>
					</div>
					<div className="flex gap-10 md:items-end">
						<div className="relative h-[300px] w-[600px] max-xl:hidden">
							<Image
								src={image2}
								fill
								alt={image2alt}
								className="rounded-l-xl sm:rounded-3xl " // Убедитесь, что изображение растягивается на всю ширину
							/>
						</div>
						<div className="lg:max-w-[826px] mt-[44px] lg:items-end">
							<p className="mb-8 text-main-yellow items-center">
								{priceLine2}
							</p>
							<p className="text-main-gray  mb-10">
								{section2P1}
							</p>
							<p className="text-main-gray ">{section2P2}</p>
							<div className="relative lg:hidden mt-[40px] sm:mx-auto sm:w-full"></div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ServicesAbout;
