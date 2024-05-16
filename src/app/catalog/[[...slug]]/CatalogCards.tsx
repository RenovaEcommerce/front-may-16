import { ItemCard } from "@/components/ItemCard/ItemCard";

interface CatalogCardsProps {
	products: any[]; // Replace `Product` with your actual product type (union or interface)
  }

export const CatalogCards:React.FC<CatalogCardsProps> = async ({ products }) => {


	return (
		<section
			className="container relative z-10 justify-center  component-mb
		md:w-[100%]
		"
		>
			<div className="w-max mx-auto slider-gap grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 ">
				{products?.map((item: any) => {
					return (
						<ItemCard
							key={item.id}
							className="col-span-1"
							{...item}
						/>
					);
				})}
			</div>
		</section>
	);
};
