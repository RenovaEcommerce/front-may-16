import { FormMain } from "@/components/FormMain/FormMain";
import Image from "next/image";
import image_bottom from "/public/contentImages/countertopHero/countertop-in-modern-kitchen-2021-08-26-15-44-13-utc 1.png"
interface ServicesHeroProps {
	h1: string
	heroH2: string;
	imageBottom: string;
	heroP: string;
}

export const ServicesHero: React.FC<ServicesHeroProps> = ({
	h1,
	heroH2,
	heroP,
	imageBottom
}) => {
	return (
		<section className="container h-full relative pr-[10px]  pt-[21px]  sm:pt-[50px] mb-10">
			<h1 className="text-right text-hero-title lg:ml-[45px] max-sm:text-[35px] max-lg:text-[60px] lg:text-[100px] 2xl:[text-[150px] font-black relative z-10 text-white first-letter:text-main-yellow">
				{h1}
			</h1>

			<div className="flex flex-col gap-10 justify-between lg:flex-row mt-[42px] xl:mt-[100px] lg:mt-[107px] component-mb">
				<Image
					src={image_bottom}
					alt="countertop image"
					className="w-full  rounded-r-xl  relative right-3"
					width={100}
					height={100}
				/>
				<div className="lg:ml-[82px] max-xl:mt-[15px] w-full xl:max-w-[312px] text-white">
					<p className="mb-[15px] text-title">{heroH2}</p>
					<p className="mb-[30px] text-base">{heroP}</p>
					<FormMain />
				</div>
			</div>
		</section>
	);
};
