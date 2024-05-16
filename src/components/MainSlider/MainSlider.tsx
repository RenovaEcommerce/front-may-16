import { Slider } from "../Slider/Slider";

export const MainSlider: React.FC = () => {
	return (
		<div className="mb-[100px] max-md:mb-[50px] w-full 2xl:max-w-[1680px] mx-auto">
			<Slider id="main_swiper" />
		</div>
	);
};
