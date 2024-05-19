import ServicesAbout from "@/app/[services]/components/ServicesAbout";
import { ServicesHero } from "@/app/[services]/components/ServicesHero";
import { ServicesReviews } from "@/app/[services]/components/ServicesReviews";
import ServicesSlider from "@/app/[services]/components/ServicesSlider";
import { CatalogBanner } from "@/app/catalog/[[...slug]]/components/CatalogBanner";
import { BackgroundPictures } from "@/components/BackgroundPictures/BackgroundPictures";
import { ContactUs } from "@/components/ContactUs/ContactUs";
import { FAQ } from "@/components/FAQ/FAQ";
import HowWeWork from "@/components/HowWeWork/HowWeWork";
import { LocationsList } from "@/components/LocationsList/LocationsList";
import { Manufacturers } from "@/components/MainManufacturers/Manufacturers";
import { MyMarkdown } from "@/components/MyMarkdown/MyMarkdown";
import { TopProducts } from "@/components/TopProducts/TopProducts";
import { backgroundPicturesServices } from "@/constants/background/backgroundPictures";
import { getServiceSubData } from "@/lib/getServiceSubData/getServiceSubData";
import { Metadata, ResolvingMetadata } from "next";

type Props = {
	params: { servicename: string };
	searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
	{ params }: Props,
	parent: ResolvingMetadata,
): Promise<Metadata> {
	const id = params.servicename;

	const service = await fetch(`http://localhost:4100/servicesub/${id}`).then(
		(res) => res.json(),
	);

	const previousImages = (await parent).openGraph?.images || [];

	return {
		title: service[0].title,
		description: service[0].description,
		openGraph: {
			images: ["/some-specific-page-image.jpg", ...previousImages],
		},
	};
}

export async function generateStaticParams(): Promise<
	{ servicename: string }[]
> {
	const url = await fetch(`http://localhost:4100/servicesub/`).then((res) =>
		res.json(),
	);

	return url.map((post: { servicename: string }) => ({
		services: post.servicename,
	}));
}

const ServiceSub: React.FC<{ params: { servicename: string } }> = async ({
	params,
}) => {
	const servicesData = await getServiceSubData(params);
	const servicesPageData = servicesData[0];

	return (
		<main>
			<BackgroundPictures pageType={backgroundPicturesServices} />
			<ServicesHero {...servicesPageData.hero} />
			<ServicesAbout {...servicesPageData.about} />
			<CatalogBanner />
			<HowWeWork {...servicesPageData} />
			<TopProducts />
			<Manufacturers />
			<ServicesSlider {...servicesPageData} />
			<FAQ {...servicesPageData} />
			<ServicesReviews />
			{/* <ServicesButtons {...servicesPageData} /> */}
			<MyMarkdown {...servicesPageData} />
			<ContactUs />
			<LocationsList />
		</main>
	);
};

export default ServiceSub;
