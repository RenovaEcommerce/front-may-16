import Image from "next/image";
import logo_bottom from "/public/logo/logo_bottom.svg";
import Link from "next/link";
import { SOCIALS_SIZE, socialIcons } from "@/constants/socialIcons/socialIcons";
import { topProducts } from "@/constants/topProducts/topProducts";
import { Button } from "../Button/Button";
import { dropdowns } from "@/constants/header/headerProperties";

export const Footer: React.FC = () => {
	return (
		<footer className="container  text-main-gray z-10 relative border-t-[1px] border-solid border-black pt-5">
			<div className="flex  w-max mx-auto max-sm:items-center max-sm:text-center items-start md:flex-row flex-col pb-[60px]  md:gap-[20px] lg:gap-[90px] xl:gap-[157px] ">
				<Image src={logo_bottom} width={145} height={159} alt="renova logo" />
				<ul className="max-w-[194px] max-md:mt-[40px]">
					<li className="mb-[20px] max-sm:hidden">
						6th Floor, 1606 ASCEND, Adress Where City 400601
					</li>
					<li className="sm:mb-[20px]">
						<Link href="/">+ 123 45 6789</Link>
					</li>
					<li className="mb-[20px]">
						<Link href="/">email@example.com</Link>
					</li>
					<li className="mb-[20px] sm:hidden">
						6th Floor, 1606 ASCEND, Adress Where City 400601
					</li>
					<li className="mb-[20px]">
						Monday - Saturday <br></br> 9:00 - 18:00 9:00 - 18:00
					</li>
					<li className="flex justify-between">
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
				</ul>
				<div className="max-sm:hidden flex max-md:gap-x-[58px] max-md:mt-5 md:gap-[30px] lg:gap-[90px] xl:gap-[157px]">
					<div>
						<h3 className="relative left-4 text-title text-white mb-[20px]">
							PRODUCTS
						</h3>
						<ul className=" text-left ">
							{topProducts.map((topProduct) => (
								<li
									className="mb-[10px] text-primary small-button"
									key={topProduct.title}
								>
									{topProduct.title}
								</li>
							))}
						</ul>
					</div>
					<div>
						<h3 className="relative left-4 text-title text-white mb-[20px]">
							SERVICES
						</h3>
						<ul className="text-left ">
							{dropdowns.services.map((service) => (
								<li
									className="mb-[10px] text-primary small-button "
									key={service.text}
								>
									<Link href={service.link}>
										{service.text}
									</Link>
								</li>
							))}
						</ul>
					</div>

					<div className="max-xl:hidden ">
						<p className="text-title text-white mb-[20px]">MENU</p>
						<ul>
							<li className="mb-[15px] ">
								<Link href="/">Main</Link>{" "}
							</li>
							<li className="mb-[15px]">
								<Link href="/">Services</Link>{" "}
							</li>
							<li className="mb-[15px]">
								<Link href="/">Catalog</Link>{" "}
							</li>
							<li className="mb-[15px]">
								<Link href="/">Blog</Link>{" "}
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div className="flex max-sm:flex-col justify-center items-center gap-2.5 pb-[60px]">
				<p className="text-title ">ANY QUESTIONS?</p>
				<Button
					variant="secondary"
					className="max-sm:mt-[20px] max-sm:mb-[40px] hover:bg-white hover:text-black transition duration-100"
				>
					Get a Consultation
				</Button>
			</div>
			<p className="w-max mx-auto pb-[34px]">
				Copyright © All rights reserved
			</p>
		</footer>
	);
};
