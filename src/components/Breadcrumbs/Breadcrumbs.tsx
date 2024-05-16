"use client";

import type { ReactNode } from "react";

import { usePathname } from "next/navigation";
import Link from "next/link";

type TBreadCrumbProps = {
	homeElement: ReactNode;
	separator: ReactNode;
	containerClasses?: string;
	listClasses?: string;
	activeClasses?: string;
	capitalizeLinks?: boolean;
};

const NextBreadcrumb: React.FC<TBreadCrumbProps> = ({
	homeElement,
	separator,
	listClasses,
	activeClasses,
	capitalizeLinks,
}: TBreadCrumbProps) => {
	const paths = usePathname();
	const pathNames = paths.split("/").filter((path) => path);

	return (
		<div>
			<ul className="container flex">
				{pathNames.length >= 1 && (
					<li className="">
						<Link href={"/"}>{homeElement}</Link>
					</li>
				)}
				{pathNames.length > 0 && separator}
				{pathNames.map((link, index) => {
					let href = `/${pathNames.slice(0, index + 1).join("/")}`;
					let itemClasses =
						paths === href ? ` ${activeClasses}` : listClasses;
					let itemLink = capitalizeLinks
						? link[0].toUpperCase() + link.slice(1, link.length)
						: link;

					return (
						<div key={index}>
							<li className={itemClasses}>
								<Link href={href}>{itemLink}</Link>
							</li>
							{pathNames.length !== index + 1 && separator}
						</div>
					);
				})}
			</ul>
		</div>
	);
};

export default NextBreadcrumb;
