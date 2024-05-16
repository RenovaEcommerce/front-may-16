interface ServiceCard {
	heading: string;
	paragraph: string;
	url: string;
	image: string;
	price: string;
  }

  type ServiceCategory = { [key: string]: ServiceCard[] }; // Key is string (category name), value is ServiceCard array

  export const ourServicesCardsData: ServiceCategory = {
	tile: [
		{
			heading: "Deck Builders",
			paragraph:
				"Осуществите мекачества. Сроки. Индивидуальный подход. Дизайн. Ремонт. Техника. Мебель. Гарантия. Сроки. Подход.",
			url: "/deck-builders",
			image: "service_image_kitchen_cabinets",
			price: "Price starts at $1,200",
		},
		{
			heading: "Deck Builders",
			paragraph:
				"Upgrade your kitchen with our cabinet installation. Includes new cabinets, colorful doors, fixtures, and various colors.",
			url: "/deck-builders",
			image: "service_image_kitchen_cabinets",
			price: "Price starts at $1,200",
		},
	],
	countertops: [
		{
			heading: "Deck Builders",
			paragraph:
				"Upgrade your kitchen with our cabinet installation. Includes new cabinets, colorful doors, fixtures, and various colors.",
			url: "/deck-builders",
			image: "service_image_kitchen_cabinets",
			price: "Price starts at $1,200",
		},
		{
			heading: "Deck Builders",
			paragraph:
				"Upgrade your kitchen with our cabinet installation. Includes new cabinets, colorful doors, fixtures, and various colors.",
			url: "/deck-builders",
			image: "service_image_kitchen_cabinets",
			price: "Price starts at $1,200",
		},
		{
			heading: "Deck Builders",
			paragraph:
				"Upgrade your kitchen with our cabinet installation. Includes new cabinets, colorful doors, fixtures, and various colors.",
			url: "/deck-builders",
			image: "service_image_kitchen_cabinets",
			price: "Price starts at $1,200",
		},
	],
	kitchen: [
		{
			heading: "Kitchen Remodel",
			paragraph:
				"Upgrade your kitchen with our cabinet installation. Includes new cabinets, colorful doors, fixtures, and various colors.",
			url: "/kitchen-remodel",
			image: "service_image_kitchen_cabinets",
			price: "Price starts at $1,200",
		},
		{
			heading: "Kitchen Cabinet Installation Hfdgsfdgs",
			paragraph:
				"Upgrade your kitchen with our cabinet installation. Includes new cabinets, colorful doors, fixtures, and various colors.",
			url: "/services/kitchen-cabinet-installation",
			image: "service_image_kitchen_cabinets",
			price: "Price starts at $1,200",
		},
		{
			heading: "Kitchen Island Installation",
			paragraph:
				"Add a central hub to your kitchen with our island installation. Includes cabinets, countertops, and waterfall designs.",
			url: "/kitchen-island-installation",
			image: "service_image_kitchen_island",
			price: "Price starts at $1,500",
		},
		{
			heading: "Kitchen Countertop Replacement fdfghhdssa",
			paragraph:
				"Choose from marble, quartz, concrete, or tile for your new kitchen countertops.",
			url: "/kitchen-countertop-installation",
			image: "service_image_kitchen_countertops",
			price: "Price starts at $1,300",
		},
		{
			heading: "Kitchen Appliance Installation",
			paragraph:
				"Upgrade your kitchen appliances with our installation service. Includes refrigerator, dishwasher, range, oven, and more.",
			url: "/kitchen-appliances-installation",
			image: "service_image_kitchen_appliances",
			price: "Price starts at $1,800",
		},
		{
			heading: "Kitchen Electrical Installation",
			paragraph:
				"Ensure your kitchen is electrically safe with our installation service. Includes new circuits, outlets, and appliance wiring.",
			url: "/kitchen-electrical-installation",
			image: "service_image_kitchen_electrical",
			price: "Price starts at $1,000",
		},
		{
			heading: "Kitchen Backsplash Tile Installation",
			paragraph:
				"Add a stylish backsplash to your kitchen with our tile installation service. Includes subway tile, porcelain, and ceramic options.",
			url: "/kitchen-backsplash-tile-installation",
			image: "service_image_kitchen_backsplash",
			price: "Price starts at $1,200",
		},
		{
			heading: "Kitchen Flooring Installation",
			paragraph:
				"Choose from tile, hardwood, or floor tiles for your new kitchen flooring.",
			url: "/kitchen-tile-floor-installation",
			image: "service_image_kitchen_flooring",
			price: "Price starts at $1,100",
		},
		{
			heading: "Custom Kitchen Cabinetry Installation",
			paragraph:
				"Design your dream kitchen with our custom cabinetry service. Includes MDF, HDF, and custom doors.",
			url: "/custom-kitchen-cabinet-installation",
			image: "service_image_custom_kitchen_cabinets",
			price: "Price starts at $2,000",
		},
		{
			heading: "Kitchen Plumbing Installation",
			paragraph:
				"Ensure your kitchen plumbing is up to date with our installation service. Includes dishwasher, sink, and new plumbing.",
			url: "/kitchen-plumbing-installation",
			image: "service_image_kitchen_plumbing",
			price: "Price starts at $1,500",
		},
		{
			heading: "Kitchen Hardware Installation",
			paragraph:
				"Complete your kitchen with our hardware installation service. Includes cabinet handles, drawer knobs, and more.",
			url: "/kitchen-hardware-installation",
			image: "service_image_kitchen_hardware",
			price: "Price starts at $800",
		},
		{
			heading: "Kitchen Pantry Build",
			paragraph:
				"Expand your kitchen storage with our pantry build service. Includes new pantry doors, shelves, and ideas.",
			url: "/kitchen-pantry-build",
			image: "service_image_kitchen_pantry",
			price: "Price starts at $1,300",
		},
		{
			heading: "Kitchen Area Expansion",
			paragraph:
				"Open up your kitchen with our area expansion service. Includes kitchen renewal and addition projects.",
			url: "/kitchen-area-expansion",
			image: "service_image_kitchen_expansion",
			price: "Price starts at $2,500",
		},
		{
			heading: "Kitchen Layout Change",
			paragraph:
				"Rearrange your kitchen for better flow and functionality with our layout change service.",
			url: "/kitchen-layout-change",
			image: "service_image_kitchen_layout",
			price: "Price starts at $1,800",
		},
		{
			heading: "Kitchen Addition Build",
			paragraph:
				"Expand your kitchen space with our addition build service. Includes new kitchen layouts and design.",
			url: "/kitchen-addition-build",
			image: "service_image_kitchen_addition",
			price: "Price starts at $3,000",
		},
		{
			heading: "Kitchen Window Installation",
			paragraph:
				"Bring in natural light with our kitchen window installation service. Includes bay windows, awning windows, and more.",
			url: "/kitchen-window-installation",
			image: "service_image_kitchen_windows",
			price: "Price starts at $1,500",
		},
		{
			heading: "Kitchen Paint and Drywall",
			paragraph:
				"Refresh your kitchen's look with our paint and drywall service. Includes wall coloring and repair.",
			url: "/kitchen-drywall-and-paint",
			image: "service_image_kitchen_paint",
			price: "Price starts at $1,200",
		},
		{
			heading: "Kitchen Countertop Installation",
			paragraph:
				"Choose from concrete, marble, quartz, or butcher block for your new kitchen countertops.",
			url: "/kitchen-countertop-installation",
			image: "service_image_kitchen_countertops",
			price: "Price starts at $1,300",
		},
		{
			heading: "Kitchen ADA Compliance",
			paragraph:
				"Ensure your kitchen is accessible with our ADA compliance service. Includes design and installation.",
			url: "/ADA-kitchen-build",
			image: "service_image_kitchen_ADA",
			price: "Price starts at $2,000",
		},
		{
			heading: "Kitchen Architectural Permits",
			paragraph:
				"Осуществите мечту о новой кухне! Дизайн, ремонт, техника, мебель. Гарантия качества. Сроки. Индивидуальный подход.",
			url: "/kitchen-architectural-permits",
			image: "service_image_kitchen_permits",
			price: "Price starts at $1,000",
		},
		{
			heading: "Kitchen Design Services",
			paragraph:
				"Transform your kitchen with our design services. Includes new design, on-demand design, and interior design.",
			url: "/kitchen-design-services",
			image: "service_image_kitchen_design",
			price: "Price starts at $1,500",
		},
		{
			heading: "Materials for Kitchen",
			paragraph:
				"Find everything you need for your kitchen renovation with our materials service. Includes cabinets, tile, flooring, and more.",
			url: "/kitchen-materials",
			image: "service_image_kitchen_materials",
			price: "Price starts at $1,000",
		},
	],
	electrical: [
		{
			heading: "Deck Builders",
			paragraph:
				"Upgrade your kitchen with our cabinet installation. Includes new cabinets, colorful doors, fixtures, and various colors.",
			url: "/deck-builders",
			image: "service_image_kitchen_cabinets",
			price: "Price starts at $1,200",
		},
		{
			heading: "Deck Builders",
			paragraph:
				"Upgrade your kitchen with our cabinet installation. Includes new cabinets, colorful doors, fixtures, and various colors.",
			url: "/deck-builders",
			image: "service_image_kitchen_cabinets",
			price: "Price starts at $1,200",
		},
		{
			heading: "Deck Builders",
			paragraph:
				"Upgrade your kitchen with our cabinet installation. Includes new cabinets, colorful doors, fixtures, and various colors.",
			url: "/deck-builders",
			image: "service_image_kitchen_cabinets",
			price: "Price starts at $1,200",
		},
	],
	hvac: [
		{
			heading: "Deck Builders",
			paragraph:
				"Upgrade your kitchen with our cabinet installation. Includes new cabinets, colorful doors, fixtures, and various colors.",
			url: "/deck-builders",
			image: "service_image_kitchen_cabinets",
			price: "Price starts at $1,200",
		},
		{
			heading: "Deck Builders",
			paragraph:
				"Upgrade your kitchen with our cabinet installation. Includes new cabinets, colorful doors, fixtures, and various colors.",
			url: "/deck-builders",
			image: "service_image_kitchen_cabinets",
			price: "Price starts at $1,200",
		},
		{
			heading: "Deck Builders",
			paragraph:
				"Upgrade your kitchen with our cabinet installation. Includes new cabinets, colorful doors, fixtures, and various colors.",
			url: "/deck-builders",
			image: "service_image_kitchen_cabinets",
			price: "Price starts at $1,200",
		},
	],
	flooring: [
		{
			heading: "Deck Builders",
			paragraph:
				"Upgrade your kitchen with our cabinet installation. Includes new cabinets, colorful doors, fixtures, and various colors.",
			url: "/deck-builders",
			image: "service_image_kitchen_cabinets",
			price: "Price starts at $1,200",
		},
	],
	decking: [
		{
			heading: "Deck Builders",
			paragraph:
				"Upgrade your kitchen with our cabinet installation. Includes new cabinets, colorful doors, fixtures, and various colors.",
			url: "/deck-builders",
			image: "service_image_kitchen_cabinets",
			price: "Price starts at $1,200",
		},
		{
			heading: "Deck Builders",
			paragraph:
				"Upgrade your kitchen with our cabinet installation. Includes new cabinets, colorful doors, fixtures, and various colors.",
			url: "/deck-builders",
			image: "service_image_kitchen_cabinets",
			price: "Price starts at $1,200",
		},
		{
			heading: "Deck Builders",
			paragraph:
				"Upgrade your kitchen with our cabinet installation. Includes new cabinets, colorful doors, fixtures, and various colors.",
			url: "/deck-builders",
			image: "service_image_kitchen_cabinets",
			price: "Price starts at $1,200",
		},
		{
			heading: "Deck Builders",
			paragraph:
				"Upgrade your kitchen with our cabinet installation. Includes new cabinets, colorful doors, fixtures, and various colors.",
			url: "/deck-builders",
			image: "service_image_kitchen_cabinets",
			price: "Price starts at $1,200",
		},
	],
	windows: [
		{
			heading: "Deck Builders",
			paragraph:
				"Upgrade your kitchen with our cabinet installation. Includes new cabinets, colorful doors, fixtures, and various colors.",
			url: "/deck-builders",
			image: "service_image_kitchen_cabinets",
			price: "Price starts at $1,200",
		},
		{
			heading: "Deck Builders",
			paragraph:
				"Upgrade your kitchen with our cabinet installation. Includes new cabinets, colorful doors, fixtures, and various colors.",
			url: "/deck-builders",
			image: "service_image_kitchen_cabinets",
			price: "Price starts at $1,200",
		},
		{
			heading: "Deck Builders",
			paragraph:
				"Upgrade your kitchen with our cabinet installation. Includes new cabinets, colorful doors, fixtures, and various colors.",
			url: "/deck-builders",
			image: "service_image_kitchen_cabinets",
			price: "Price starts at $1,200",
		},
	],
	doors: [
		{
			heading: "Deck Builders",
			paragraph:
				"Upgrade your kitchen with our cabinet installation. Includes new cabinets, colorful doors, fixtures, and various colors.",
			url: "/deck-builders",
			image: "service_image_kitchen_cabinets",
			price: "Price starts at $1,200",
		},
		{
			heading: "Deck Builders",
			paragraph:
				"Upgrade your kitchen with our cabinet installation. Includes new cabinets, colorful doors, fixtures, and various colors.",
			url: "/deck-builders",
			image: "service_image_kitchen_cabinets",
			price: "Price starts at $1,200",
		},
		{
			heading: "Deck Builders",
			paragraph:
				"Upgrade your kitchen with our cabinet installation. Includes new cabinets, colorful doors, fixtures, and various colors.",
			url: "/deck-builders",
			image: "service_image_kitchen_cabinets",
			price: "Price starts at $1,200",
		},
	],
	architecture: [
		{
			heading: "Deck Builders",
			paragraph:
				"Upgrade your kitchen with our cabinet installation. Includes new cabinets, colorful doors, fixtures, and various colors.",
			url: "/deck-builders",
			image: "service_image_kitchen_cabinets",
			price: "Price starts at $1,200",
		},
		{
			heading: "Deck Builders",
			paragraph:
				"Upgrade your kitchen with our cabinet installation. Includes new cabinets, colorful doors, fixtures, and various colors.",
			url: "/deck-builders",
			image: "service_image_kitchen_cabinets",
			price: "Price starts at $1,200",
		},
		{
			heading: "Deck Builders",
			paragraph:
				"Upgrade your kitchen with our cabinet installation. Includes new cabinets, colorful doors, fixtures, and various colors.",
			url: "/deck-builders",
			image: "service_image_kitchen_cabinets",
			price: "Price starts at $1,200",
		},
	],
	plumbing: [
		{
			heading: "Deck Builders",
			paragraph:
				"Upgrade your kitchen with our cabinet installation. Includes new cabinets, colorful doors, fixtures, and various colors.",
			url: "/deck-builders",
			image: "service_image_kitchen_cabinets",
			price: "Price starts at $1,200",
		},
		{
			heading: "Deck Builders",
			paragraph:
				"Upgrade your kitchen with our cabinet installation. Includes new cabinets, colorful doors, fixtures, and various colors.",
			url: "/deck-builders",
			image: "service_image_kitchen_cabinets",
			price: "Price starts at $1,200",
		},
		{
			heading: "Deck Builders",
			paragraph:
				"Upgrade your kitchen with our cabinet installation. Includes new cabinets, colorful doors, fixtures, and various colors.",
			url: "/deck-builders",
			image: "service_image_kitchen_cabinets",
			price: "Price starts at $1,200",
		},
	],
};
