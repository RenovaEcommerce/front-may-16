import { BlogCard } from "./BlogCard";
import { CatalogBanner } from "@/app/catalog/[[...slug]]/components/CatalogBanner";

interface BlogCardProps {
	markdown: string;
	url: string;
	createdAt: string
}

type BlogCard = {
	cards: BlogCardProps[]
}

export const BlogCards: React.FC<BlogCard> = ({ cards }) => {
	return (
		<section className="container relative component-mb z-20">
			<CatalogBanner />
			<ul className="flex flex-col gap-y-10">
				{cards.map((card) => (
					<BlogCard key={card.url} {...card} />
				))}
			</ul>
		</section>
	);
};
