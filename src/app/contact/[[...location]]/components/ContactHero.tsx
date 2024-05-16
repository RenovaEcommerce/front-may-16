import Image from "next/image";
import hero_section from "/public/contentImages/contact/hero_section.jpg";
import { SOCIALS_SIZE, socialIcons } from "@/constants/socialIcons/socialIcons";
import Link from "next/link";

export const ContactHero: React.FC = () => (
	<section className="container mt-[100px] max-xl:mt-[50px] flex flex-col px-[10px] lg:flex-row items-center lg:justify-between component-mb">
		<div className="component-mb">
			<h1 className="lg:absolute inside-mb text-white text-hero-title font-black max-sm:text-[50px] max-lg:text-[60px] text-right">
				CONTACT US
			</h1>
			<div className="flex flex-col lg:flex-row inside-mb lg:mt-[265px] text-white gap-[40px] lg:gap-[70px]">
				<h3 className="text-title">ABOUT ANY QUESTIONS</h3>
				<ul>
					<li className="text-main-yellow text-title">
						+ 123 45 6789
					</li>
					<li className="text-main-yellow pb-[30px]">
						email@example.com
					</li>
					<li className="w-[200px] pb-[30px]">
						16th Floor, 1606 ASCEND, Adress Where City 400601
					</li>
					<li className="w-[140px] pb-[30px]">
						Monday - Saturday 9:00 - 18:00
					</li>
					<li className="flex gap-5">
						{socialIcons?.map(({ icon, href, id }) => (
							<Link key={id} href={href}>
								<Image
									src={icon}
									height={SOCIALS_SIZE}
									width={SOCIALS_SIZE}
									alt="social_icon"
								/>
							</Link>
						))}
					</li>
				</ul>
			</div>
		</div>
		<Image className="max-xl:hidden" src={hero_section} alt="" />
	</section>
);
