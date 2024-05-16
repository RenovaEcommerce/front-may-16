import Image from "next/image";
import about_picture from "/public/contentImages/servicesPage/countertops/countertop_services.jpg";

interface ImageTextSectionProps {
    phrase: string;
	image: string;
	imageAlt: string;
    h1: string;
    paragraph1: string;
    paragraph2: string;
    price: string;
}

export const ImageTextSection: React.FC<ImageTextSectionProps> = ({
	phrase,
	image,
	imageAlt,
	h1,
	paragraph1,
	paragraph2,
	price,
}) => {
	return (
		<section className="container">
			{/* Mobile */}
			<div className=" lg:hidden max-sm:[block w-full mx-auto max-w-[1440px] relative z-10 component-mb flex flex-col items-center">
				<div className="flex-col">
					<div className="max-w-full">
						<p className="text-white font-light text-title mb-5">
							{phrase}
						</p>
						<h1 className="custom-heading max-md:text-[40px] leading-tight max-lg:text-[45px] mb-5 first-letter:text-main-yellow">
							{h1}
						</h1>
					</div>
					<Image
						className="float-right  rounded-l-xl sm:max-lg:hidden relative left-3"
						src={image}
						height={440}
						width={440}
						alt={imageAlt}
					/>
				</div>
				<div className="flex">
					<div className="mt-[44px]">
						<p className="mb-8 text-main-yellow items-center">
							{price}
						</p>
						<p className="text-main-gray ml-auto mb-10">
							{paragraph1}
						</p>
						<p className="text-main-gray ml-auto">{paragraph2}</p>
					</div>
				</div>
			</div>

			{/* DeskTop */}

			<div className=" max-lg:hidden lg:[block w-full mx-auto max-w-[1440px] relative z-10 mb-20 lg:mt-[100px] max-md:px-2 flex flex-col item-center lg:justify-end]  ">
				<div className="flex ">
					<div className="max-w-full ">
						<p className="text-white font-light text-title">
							{phrase}
						</p>
						<h1 className="custom-heading max-md:text-[40px] leading-tight max-lg:text-[45px] mb-10 first-letter:text-main-yellow">
							{h1}
						</h1>
					</div>
				</div>
				<div className="flex justify-between items-center gap-10">
					<div className="lg:max-w-[826px] mt-[44px]  md:items-end">
						<p className="mb-8 text-main-yellow items-center">
							{price}
						</p>
						<p className="text-main-gray  mb-10">{paragraph1}</p>
						<p className="text-main-gray ">{paragraph2}</p>
						<div className="relative lg:hidden mt-[40px] sm:mx-auto sm:w-full"></div>
					</div>

					<div className="relative">
						<Image
							src={image}
							height={350}
							width={650}
							alt={imageAlt}
							className=" rounded-l-xl max-xl:hidden" // Убедитесь, что изображение растягивается на всю ширину
						/>
					</div>
				</div>
			</div>
		</section>
	);
};
