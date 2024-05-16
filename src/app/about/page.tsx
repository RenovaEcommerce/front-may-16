import { ServicesHero } from "../[services]/components/ServicesHero";
import ServicesAbout from "../[services]/components/ServicesAbout";
import { MainWhySection } from "@/components/MainWhySection/MainWhySection";
import { ContactUs } from "@/components/ContactUs/ContactUs";
import { FullWidthHorizontalSlider } from "@/components/FullWidthHorizontalSlider";
import { aboutPageContent } from "@/constants/aboutPage/aboutPage";
import { LocationsList } from "@/components/LocationsList/LocationsList";
import { FormComponent } from "@/components/FormMain/FormComponent";
import { MainSlider } from "@/components/MainSlider/MainSlider";

const About: React.FC = () => (
	
	<main>
		<ServicesHero
		{...aboutPageContent.hero}
		/>
		<ServicesAbout {...aboutPageContent.about} />
		<MainWhySection {...aboutPageContent.whySection} />
		<FullWidthHorizontalSlider />
		<FormComponent />
		<MainSlider />
		<ContactUs />
		<LocationsList />
	</main>
);

export default About;
