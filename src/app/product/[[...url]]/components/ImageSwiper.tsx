"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

type ImageSwiperProps = {
	images: string[];
	category?: string;
};

export const ImageSwiper: React.FC<ImageSwiperProps> = ({ images }) => {
	return (
		<div className="sm:max-w-[650px] max-sm:max-w-[350px] mx-auto inside-mb ">
			<Swiper
				modules={[Navigation, Pagination, Scrollbar]}
				slidesPerView={1}
				pagination={{ clickable: true }}
				scrollbar={{ draggable: true }}
				breakpoints={{
					640: {
						width: 350,
					},
					3000: {
						width: 650,
					},
				}}
			>
				{images.map((image, index) => (
					<SwiperSlide
						className="rounded-3xl mb-10 sm:min-h-[650px] sm:min-w-[650px]  max-sm:min-w-[350px] max-sm:min-h-[350px]"
						key={index}
					>
						<Image
							src={image}
							className="rounded-3xl"
							alt="Gallery image"
							fill
							objectFit="cover"
						/>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};
