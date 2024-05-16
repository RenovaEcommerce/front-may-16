import { SOCIALS_SIZE, socialIcons } from "@/constants/socialIcons/socialIcons";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../Button/Button";

export const ContactUs: React.FC = () => {
	return (
		<section className="container mb-[100px] max-md:mb-[50px] z-10 relative">
			<h3 className="w-max mx-auto custom-heading  first-letter:text-main-yellow">
				Contact Us
			</h3>

			<ul className="w-full flex max-md:flex-col max-md:text-center items-center justify-between md:gap-x-[30px] lg:gap-x-[70px]">
				<li className="flex flex-col text-main-yellow max-md:max-w-[214px] max-md:mb-5">
					<Link href="/" className="text-[20px] font-medium">
						+ 123 45 6789
					</Link>
					<Link href="/" className="text-[16px] font-semibold">
						email@example.com
					</Link>
				</li>
				<li className="flex text-main-gray text-[16px] font-light max-md:mb-5">
					<Link href="/">
						16th Floor, 1606 ASCEND, Adress Where City 400601
					</Link>
				</li>
				<li className="text-main-gray text-[16px] max-md:mb-5 font-light">
					Monday - Saturday 9:00 - 18:00
				</li>
				<li className="flex space-between gap-2">
					{socialIcons?.map(({ icon, href, id }: any) => (
						<Link key={id} href={href}>
							<Image
								src={icon}
								height={SOCIALS_SIZE}
								width={SOCIALS_SIZE}
								alt=""
							/>
						</Link>
					))}
				</li>
				<li className="max-md:mt-[40px]">
					<Button
						variant="secondary"
						className="hover:bg-white hover:text-black transition duration-100"
					>
						Get a Call
					</Button>
				</li>
			</ul>
		</section>
	);
};
