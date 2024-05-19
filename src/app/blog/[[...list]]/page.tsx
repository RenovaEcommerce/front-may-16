import { BackgroundPictures } from "@/components/BackgroundPictures/BackgroundPictures";
import { ServicesHero } from "../../[services]/components/ServicesHero";
import { BlogCards } from "../components/BlogCards";
import { BlogFilter } from "../components/BlogFilter";
import { backgroundPicturesServices } from "@/constants/background/backgroundPictures";
import { getBlogData } from "@/lib/getBlogData/getBlogData";
import { ServiceAreas } from "@/components/BottomButtons/BottomButtons";
import { LocationsList } from "@/components/LocationsList/LocationsList";
import { MyMarkdown } from "@/components/MyMarkdown/MyMarkdown";
import { aboutPageContent } from "@/constants/aboutPage/aboutPage";

type Props = {
	params: { list: string[] }; // Update type for 'list' to be an array of strings
};

const page: React.FC<Props> = async ({ params }: Props) => {
	let blogData;

	if (Object.keys(params).length === 0) {
		blogData = await getBlogData();
	} else {
		const paramsArray = params.list; // Use const for better immutability
		const search = paramsArray.join("/");
		blogData = await getBlogData(search);
	}

	return (
		<main>
			<BackgroundPictures pageType={backgroundPicturesServices} />

			<ServicesHero {...aboutPageContent.hero} />
			<BlogFilter />
			<BlogCards cards={blogData} />

			<MyMarkdown {...blogData[0].markdown} />

			<ServiceAreas />
			<LocationsList />
		</main>
	);
};

export default page;
