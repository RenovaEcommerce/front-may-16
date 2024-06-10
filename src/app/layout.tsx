import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";
import NextBreadcrumb from "@/components/Breadcrumbs/Breadcrumbs";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}): JSX.Element {
	return (
		<html lang="en">
			<body className="bg-main-dark">
				<Header />
				<div className="container">
					<NextBreadcrumb
						homeElement={<span className="text-white ">Home</span>}
						separator={<span color="main-gray">|</span>}
						activeClasses="text-main-yellow hover:underline"
						listClasses="hover:underline mx-2 text-white"
						capitalizeLinks
					/>
				</div>
				<Toaster position="top-center" />
				{children}
				<Footer />
			</body>
		</html>
	);
}
