import Image from "next/image";
import cardImage from "/public/contentImages/ourServices/cabinets.jpeg";
import Link from "next/link";

type Props = {
  heading: string;
  paragraph: string;
  price: number;
  url: string;
  image: string;
};

export const ServicesCard: React.FC<Props> = ({
  heading,
  paragraph,
  price,
  url,
  image,
}) => {
  return (
		<Link href={url}>
			<div
				className="relative justify-between min-w-[300px] min-h-[490px] max-w-[300px] max-h-[490px]
        lg:min-w-[350px] lg:min-h-[516px] lg:max-w-[350px] lg:max-h-[516px]  border-solid border-[1px] hover:[border-black] border-white rounded-3xl font-light "
				key={heading}
			>
				<div className="relative h-[260px]">
					<Image
						alt="service-image"
						className="rounded-t-3xl mx-auto mb-2"
						src={cardImage}
						fill
					/>
				</div>

				<h3 className="text-white min-h-[78px] font-light text-title px-2 pt-2 ">
					{heading}
				</h3>

				<p className="px-2 top-0 gray-paragraph min-h-[90px] text-base mb-5">
					{paragraph}
				</p>
				<p className="px-2">{price}</p>
			</div>
		</Link>
  );
};
