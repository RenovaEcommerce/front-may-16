import Image from "next/image";
import type { FC } from "react";
import type { SwiperContent } from "@/types/swiper/swiper";

export const HeroSlide: FC<SwiperContent> = ({ heroImage }) => (
	<section className=" bg-white min-w-full h-[480px] rounded-3xl pb-40 flex relative max-sm:px-[10px] xl:max-w-screen-xl mx-auto pt-[21px] sm:pt-[50px] sm:pr-[10px] justify-center items-center">
		<Image
			alt="banner-image"
			className="relative my-auto w-full rounded-3xl"
			src={heroImage}
			fill
		/>
	</section>
);
