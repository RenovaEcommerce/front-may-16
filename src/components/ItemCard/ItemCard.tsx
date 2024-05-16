import Image from "next/image";
import Link from "next/link";

type ItemCardProps = {
	cover: string;
	image: string;
	title: string;
	color: string;
	style: string;
	description: string;
	thickness: any;
	price: any;
	url: string;
	measurement: any;
	variants?: any; // Making variants optional
};

export const ItemCard: React.FC<ItemCardProps> = ({
	cover,
	url,
	style,
	color,
	thickness,
	price,
	measurement,
	variants,
}) => {
	return (
		<Link href={`/product/${url}`}>
			<div
				className="justify-between min-w-[300px] min-h-[490px] max-w-[300px] max-h-[490px]
               lg:min-w-[350px] lg:min-h-[516px] lg:max-w-[350px] lg:max-h-[516px]  border-solid border-[1px] hover:[border-black] border-white rounded-3xl font-light "
			>
				<Image
					src={cover}
					height={324}
					width={324}
					className="rounded-3xl mx-auto"
					alt="product-card-image"
				/>

				<div className="px-[20px] py-5  ">
					<h3 className="text-title pb-1 text-black">{style}</h3>
					<p className="text-main-gray font-extralight pb-1">
						{color}
					</p>
					<p className="pb-1">{`$${price}`}</p>
					<div className="flex">
						{variants &&
							variants.map((variant: any) => {
								return (
									<Image
										key={variant}
										src={cover}
										height={24}
										width={24}
										alt="product-card-variants"
									/>
								);
							})}
					</div>
				</div>
			</div>
		</Link>
	);
};
