import facebook from "/public/logo/facebook.svg";
import instagram from "/public/logo/instagram.svg";
import linkedin from "/public/logo/linkedin.svg";

export const SOCIALS_SIZE = 45;

type SocialIcon = {
	id: string;
	href: string;
	icon: any;
};

export const socialIcons: SocialIcon[] = [
	{
		id: "facebook",
		href: "/",
		icon: facebook,
	},
	{
		id: "instagram",
		href: "/",
		icon: instagram,
	},
	{
		id: "linkedin",
		href: "/",
		icon: linkedin,
	},
];
