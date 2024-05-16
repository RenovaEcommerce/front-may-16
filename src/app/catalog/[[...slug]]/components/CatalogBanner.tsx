import { Button } from "@/components/Button/Button";

export const CatalogBanner:React.FC = ():any => (
	<div className="container mx-auto flex flex-col md:flex-row md:justify-around md:items-center component-mb">
		<p className="text-title-large max-lg:text-[24px] font-black text-main-yellow">
			Need Help?
		</p>
		<p className="text-title md:hidden text-white max-lg:text-[24px]">
			FREE DESIGN HELP
		</p>

		<p className="text-main-gray max-w-[385px]">
			Work with one of our expert designers! Theyll help design your space
			in your style, to fit your needs.
		</p>
		<p className="text-title text-white max-md:hidden max-lg:text-[24px]">
			FREE DESIGN HELP
		</p>

		<Button variant="secondary" className="mt-[10px] float-right">
			I need a consultation
		</Button>
	</div>
);
