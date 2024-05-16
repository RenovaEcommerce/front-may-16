import Image from "next/image";
import { Button } from "../Button/Button";
import about_picture from "/public/contentImages/servicesPage/countertops/countertop_services.jpg";
import { MyMarkdown } from "../MyMarkdown/MyMarkdown";
import Link from "next/link";

type Props = {
	h2: string,
	markdown: string
}

export const MainAbout: React.FC<Props> = ({ h2, markdown }) => {
	return (
		<section className="container  mb-[100px] max-md:mb-[50px] z-10 relative text-main-gray">
			<div className="flex justify-between max-sm:flex-col sm:flex-row md:gap-[11.08%] w-full max-w-screen-xl mx-auto mx-xl:items-center">
				<div className="w-full md:w-[49.41%] md:max-w-[49.41%]">
					<h3 className="text-title leading-[22px] md:leading-[28px]">
						ABOUT RENOVA
					</h3>
					<h2 className="mt-[40px] xl:mt-[143px] custom-heading max-lg:text-[40px] leading-tight first-letter:text-main-yellow">
						{h2}
					</h2>
					<Image
						className="relative right-3 rounded-r-xl xl:hidden"
						src={about_picture}
						alt=""
					/>
				</div>
				<div className="flex flex-col w-full md:w-[50%] max-md:mt-[40px] text-main-gray">
					<MyMarkdown markdown={markdown} />
					<Button
						className=" mt-[40px] md:mt-[26px] w-max right-0 hover:bg-white hover:text-black transition duration-100"
						variant="primary"
					>
						<Link href="/about">More</Link>
					</Button>
				</div>
			</div>
		</section>
	);
};