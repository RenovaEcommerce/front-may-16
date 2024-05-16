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
import { MyMarkdown } from "@/components/MyMarkdown/MyMarkdown";
import HowWeWork from "@/components/HowWeWork/HowWeWork";
import { ServiceAreas } from "@/components/BottomButtons/BottomButtons";
import { OurPartners } from "@/components/OurPartners/OurPartners";
import { LocationsList } from "@/components/LocationsList/LocationsList";
import ServicesAbout from "@/app/[services]/components/ServicesAbout";

type LocationParams = {
    location: string[];
}

export async function generateStaticParams({ params }: {params: LocationParams}): Promise<any> {
    const url = await fetch(`http://localhost:4100/location/`).then((res) =>
        res.json(),
    );

    return [];
}

export async function generateMetadata( { params }: { params: LocationParams }, parent: any): Promise<any> {
	const city = params.location
    const product = await fetch(`http://localhost:4100/location/${city}`).then(
        (res) => res.json(),
    );
    const previousImages = (await parent).openGraph?.images || [];

    return {
        title: product[0].title,
		description: product[0].description,
        openGraph: {
            images: ["/some-specific-page-image.jpg", ...previousImages],
        },
    };
}

async function getLocationData(params: LocationParams): Promise<any> {
	const city = params.location
    const res = await fetch(`http://localhost:4100/location/${city}`);

    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }

    return res.json();
}

export default async function Page({ params }: {params: LocationParams}): Promise<any> {


	const data = await getLocationData(params);

	const props = { ...data[0] };
console.log(data)
	return (
		<main>
			{/* <BackgroundPictures pageType={backgroundPicturesMain} /> */}
			<Slider id="hero" />
			<ServicesAbout {...props.about} />
			<OurServices />
			<HowWeWork {...props} />
			<MyMarkdown markdown={props.markdown1} />
			<TopProducts />
			<Banner />
			<MainAbout {...props.aboutSection} />
			<Manufacturers />
			<MainSlider />
			<MainWhySection {...props.whySection} />
			<Reviews />
			<FAQ {...props} />
			<ContactUs />
			<MyMarkdown markdown={props.markdown2} />
			<OurPartners />
			<ServiceAreas />
			<LocationsList />
		</main>
	);
}
