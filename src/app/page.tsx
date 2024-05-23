
/* import { BackgroundPictures } from "@/components/BackgroundPictures/BackgroundPictures"; */
import { Banner } from "@/components/Banner/Banner";
import { ContactUs } from "@/components/ContactUs/ContactUs";
import { FAQ } from "@/components/FAQ/FAQ";
import { MainAbout } from "@/components/MainAbout/MainAbout";
import { MainSlider } from "@/components/MainSlider/MainSlider";
import { MainWhySection } from "@/components/MainWhySection/MainWhySection";
import { Manufacturers } from "@/components/MainManufacturers/Manufacturers";
import { OurServices } from "@/components/OurServices/OurServices";
import { Reviews } from "@/components/Reviews/Reviews";
import { Slider } from "@/components/Slider/Slider";
import { TopProducts } from "@/components/TopProducts/TopProducts";
/* import { backgroundPicturesMain } from "@/constants/background/backgroundPictures"; */
import HowWeWork from "@/components/HowWeWork/HowWeWork";
import { Perks } from "@/components/Perks/Perks";
import { CatalogBanner } from "./catalog/[[...slug]]/components/CatalogBanner";
import { MyMarkdown } from "@/components/MyMarkdown/MyMarkdown";
import BathroomRemodelCalculator from "@/components/Calculators/Bathrooms";
/* import OneBuildWidget from "@/components/Calculators/OneBuild"; */
import { ServiceAreas } from "@/components/BottomButtons/BottomButtons";
import { mainPageContent } from "@/constants/mainPage/mainPageContent";
import { ImageTextSection } from "@/components/ImageTextSection/ImageTextSection";
import { LocationsList } from "@/components/LocationsList/LocationsList";
import { FormMain } from "@/components/FormMain/FormMain";
import type { Metadata } from "next";
import TagEmbedWidget from "@/components/TikTok/TikTok";

export const metadata: Metadata = {
	title: "Renova Remodeling Experts | Kitchens, Baths, More!",
	description:
		" Upgrade your home with expert remodeling from Renova. Kitchens, bathrooms, basements & more! Free consultations, financing available",
};

export default function Home(): JSX.Element {
	return (
		<main>
			{/*  <BackgroundPictures pageType={backgroundPicturesMain} /> */}
			<div className="inside-mb">
				<Slider id="hero" />
			</div>
			<TagEmbedWidget />
			<CatalogBanner />
			<ImageTextSection {...mainPageContent.imageTextSection} />
			<Perks {...mainPageContent} />
			<TagEmbedWidget />
			<OurServices />
			<MainAbout {...mainPageContent.aboutSection} />
			<HowWeWork {...mainPageContent} />
			<MyMarkdown markdown={mainPageContent.markdown1} />
			<TopProducts />
			<CatalogBanner />
			<Banner />
			<BathroomRemodelCalculator />
			<Manufacturers />
			<MainSlider />
			<MyMarkdown markdown={mainPageContent.markdown2} />
			<MainWhySection {...mainPageContent.whySection} />
			<Reviews />
			<ContactUs />
			<FAQ {...mainPageContent} />
			<MyMarkdown markdown={mainPageContent.markdown3} />
			<ServiceAreas />
			<LocationsList />
		</main>
	);
}
