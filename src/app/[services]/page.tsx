import countertopHeroBottom from "/public/contentImages/countertopHero/countertop-in-modern-kitchen-2021-08-26-15-44-13-utc 1.png";
import React from "react";
import { ServicesHero } from "./components/ServicesHero";
import ServicesAbout from "./components/ServicesAbout";
import { FAQ } from "@/components/FAQ/FAQ";
import { ServicesReviews } from "./components/ServicesReviews";
import { ContactUs } from "@/components/ContactUs/ContactUs";

import { getServicesData } from "@/lib/getServiceData/getServiceData";
import { TopProducts } from "@/components/TopProducts/TopProducts";
import type { Metadata, ResolvingMetadata } from "next";
import ServicesSlider from "./components/ServicesSlider";
import { Manufacturers } from "@/components/MainManufacturers/Manufacturers";
import ServicesButtons from "./components/ServicesButtons";
import HowWeWork from "@/components/HowWeWork/HowWeWork";
import { MyMarkdown } from "@/components/MyMarkdown/MyMarkdown";
import { CatalogBanner } from "../catalog/[[...slug]]/components/CatalogBanner";
import { BackgroundPictures } from "@/components/BackgroundPictures/BackgroundPictures";
import { backgroundPicturesServices } from "@/constants/background/backgroundPictures";
import { LocationsList } from "@/components/LocationsList/LocationsList";

type Props = {
  params: { services: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const id = params.services;

  const service = await fetch(`http://localhost:4100/services/${id}`).then(
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


export async function generateStaticParams(): Promise<{ services: string }[]> {
  const url = await fetch(`http://localhost:4100/services/`).then((res) =>
    res.json(),
  )

  return url.map((post: { service: string }) => ({
    services: post.service,
  }));

}


const Services: React.FC<{ params: { services: string } }> = async ({
  params,
}) => {

  const servicesData = await getServicesData(params);
  const servicesPageData = servicesData[0];
console.log(servicesPageData.about)
  return (
		<main>
			<BackgroundPictures pageType={backgroundPicturesServices} />
			<ServicesHero
				{...servicesPageData.hero}
				imageBottom={countertopHeroBottom}
			/>
			<ServicesAbout {...servicesPageData.about} />
			<CatalogBanner />
			<HowWeWork howWeWork = {servicesPageData.howWeWork} />
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

export default Services;
