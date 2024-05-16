import Image from "next/image";
import { productItems } from "@/constants/itemCards/itemCards";
import favorite from "/public/logo/ph_heart-thin.svg";
import add from "/public/logo/add.svg";
import Link from "next/link";

export interface Product {
	inStock: boolean;
	price?: number;
	measurement?: string;
}

export interface Variant {
	url: string;
	image: string;
	color: string;
}

export type ProductImageProps = {
	style: string;
	variants?: Variant[]; // Optional array of variants data
	category: string;
	cover?: boolean; // Optional flag for cover image
	price?: number;
	collection?: string;
	color: string;
	width?: string; // Optional width information
	images?: string[]; // Optional array of image URLs (if not using variants)
};

export const ProductImage: React.FC<ProductImageProps> = ({
	style,
	variants,
	category,
	cover,
	price,
	collection,
	color,
	width,
	images,
}) => {
	const product = productItems[0];

	return (
		<div className="flex flex-col justify-between">
			<div className="flex items-center pb-2 gap-5">
				<Image
					alt="favorite-button"
					src={favorite}
					height={50}
					width={50}
				/>
				<p className="text-title-large text-white font-black">
					{style}
				</p>
			</div>
			<p className="text-white pb-5">{color}</p>

			{product.inStock ? (
				<p className="text-main-gray ">In stock</p>
			) : (
				<p className="text-main-gray ">Special Order</p>
			)}
			{product.price && (
				<p>
					<span className="text-title text-main-yellow">
						${price}
					</span>{" "}
					<span className="text-title text-main-gray">
						{product.measurement}
					</span>
				</p>
			)}

			{variants && (
				<div className="flex w-full gap-5 items-center mb-5 overflow-x-auto">
					<h3 className="text-main-gray">Select Color</h3>
					<ul className="flex gap-2 no-scrollbar">
						{variants.map((variant, index) => (
							<li key={index} className="flex-shrink-0">
								<Link href={`/product/${variant.url}`}>
									<Image
										className="rounded-3xl object-cover"
										src={variant.image}
										height={40} // Assuming consistent image dimensions
										width={40}
										alt={`Color ${variant.color}`} // Providing alt text for accessibility
									/>
								</Link>
							</li>
						))}
					</ul>
				</div>
			)}
			{width && (
				<div className="flex mt-[40px] gap-5 items-center">
					<p className="text-main-gray">Size</p>
					<button className="small-button border-solid border-[1px] border-white hover:border-black">
						{width}
					</button>
				</div>
			)}
			<div className="flex mt-[40px] items-center gap-20 pb-5">
				<div className="flex gap-5 items-center">
					<Image alt="" src={add} />
					<p>1</p>
					<Image alt="" src={add} />
				</div>
				<button>Add To Cart</button>
			</div>
			<p className="text-title text-white">
				We install it to your kitchen
			</p>
			<div className="flex items-center gap-5">
				<p className="text-main-gray">
					You will be able to add a service in order
				</p>
				<Link className="yellow-link" href="/services">
					More about service
				</Link>
			</div>
		</div>
	);
};

export default ProductImage;
