"use client";

import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import right_arrow from "/public/logo/hero_right_arrow.svg";
import left_arrow from "/public/logo/thero_left_arrow.svg";

import React, { type FC } from "react";
import { swiperConfig } from "@/constants/swiperConfig/swiperConfig";
import type { SwiperContent } from "@/types/swiper/swiper";

import "./swiper.css";

interface SwiperProps {
	id: string;
}

export const Slider: FC<SwiperProps> = ({ id }) => {
	// @ts-ignore
	const { settings, content, buttons, swiperSlide, width } = swiperConfig[id];

	const SelectedSlide = swiperSlide;

	return (
		<section className="container inside-mb">
			<Swiper pagination={true} {...settings}>
				{content.map((slide: SwiperContent) => (
					<SwiperSlide className="pb-[45px]" key={slide.id}>
						<SelectedSlide {...slide} />
					</SwiperSlide>
				))}
			</Swiper>
		</section>
	);
};
