import header_liked from "/public/logo/header_liked.svg";
import header_cart from "/public/logo/header_cart.svg";
import header_user from "/public/logo/header_user.svg";
import type { HeaderData, HeaderIcons } from "@/types/header/headerData";

export const ICON_SIZE = 26;

export const headerData: HeaderData[] = [
	{
		id: "products",
		title: "Products",
		href: "/catalog",
		dropdown: true,
	},
	{
		id: "services",
		title: "Services",
		href: "/services",
		dropdown: true,
	},
	{
		id: "about",
		title: "About Us",
		href: "/about",
		dropdown: false,
	},
	{
		id: "blog",
		title: "Blog",
		href: "/blog",
		dropdown: false,
	},
	{
		id: "cooperation",
		title: "Cooperation",
		href: "/cooperation",
		dropdown: true,
	},
	{
		id: "contact",
		title: "Contact",
		href: "/contact",
		dropdown: false,
	},
];

export const headerIcons: HeaderIcons[] = [
	{
		id: 1,
		icon: header_liked,
		alt: "header_liked_icon",
		href: "/liked",
	},
	{
		id: 2,
		icon: header_cart,
		alt: "header_cart_icon",
		href: "/cart",
	} /* ,
	{
		id: 3,
		icon: header_user,
		alt: "header_user_icon",
		href: "/",
	} */,
];

interface PopularService {
	name: string;
	link: string;
}

interface Type {
	name: string;
	link: string;
	popularServices?: PopularService[];
}

export interface Service {
	link: string;
	text: string;
	id?: string;
	types: Type[];
}

export const dropdowns: { [key: string]: Service[] } = {
	services: [
		{
			id: "tile",
			link: "/tile-installation",
			text: "Tile Installation",
			types: [
				{ name: "Floor Tile", link: "/service/floor-tile" },
				{ name: "Bathroom Tile", link: "/service/bathroom-tile" },
				{ name: "Shower Tile", link: "/service/shower-tile" },
				{ name: "Backsplash Tile", link: "/service/backsplash-tile" },
				{ name: "Ceramic Tile", link: "/service/ceramic-tile" },
				{ name: "Porcelain Tile", link: "/service/porcelain-tile" },
				{ name: "Mosaic Tile", link: "/service/mosaic-tile" },
				{
					name: "Heated Tile Floor",
					link: "/service/heated-tile-floor",
				},
				{
					name: "Basement Floor Tile",
					link: "/service/basement-floor-tile",
				},
				{ name: "Subway Tile", link: "/service/subway-tile" },
				{
					name: "Grout Cleaning",
					link: "/service/grout-tile-cleaning",
				},
				{ name: "Fireplace Tile", link: "/service/fireplace-tile" },
				{ name: "Outdoor Tile", link: "/service/outdoor-tile" },
			],
		},
		{
			id: "countertops",
			link: "/countertop-installation",
			text: "Countertops",
			types: [
				{
					name: "Quartz Countertops",
					link: "/service/quartz-countertops",
				},
				{
					name: "Granite Countertops",
					link: "/service/granite-countertops",
				},
				{
					name: "Laminate Countertops",
					link: "/service/laminate-countertops",
				},
				{
					name: "Soapstone Countertops",
					link: "/service/soapstone-countertops",
				},
				{ name: "Butcher Block", link: "/service/butcher-block" },
				{
					name: "Concrete Countertop",
					link: "/service/concrete-countertops",
				},
				{
					name: "Stainless Steel Countertops",
					link: "/service/stainless-steel-countertops",
				},
				{
					name: "Porcelain Countertop",
					link: "/service/porcelain-countertops",
				},
				{
					name: "Countertop Repair",
					link: "/service/countertop-repair",
				},
			],
		},
		{
			id: "cabinets",
			link: "/kitchen-cabinet-installation",
			text: "Cabinet Installation",
			types: [
				{ name: "Cabinet Design", link: "/service/cabinet-design" },
				{
					name: "Bathroom Cabinets",
					link: "/service/bathroom-cabinets",
				},
				{
					name: "Cabinet Refinishing",
					link: "/service/cabinet-refinishing",
				},
				{
					name: "Built-in Cabinets",
					link: "/service/built-in-cabinets",
				},
				{
					name: "Cabinet Door Replacement",
					link: "/service/cabinet-door-replacement",
				},
				{ name: "Cabinet Repair", link: "/service/cabinet-repair" },
				{ name: "Cabinet Painting", link: "/service/cabinet-painting" },
				{ name: "Storage Cabinets", link: "/service/storage-cabinets" },
			],
		},
		{
			id: "electrical",
			link: "/electrical-installation",
			text: "Electrical Installation",
			types: [
				{ name: "Electrical Panel", link: "/service/electrical-panel" },
				{ name: "Knob and Tube", link: "/service/knob-and-tube" },
				{ name: "House Rewire", link: "/service/house-rewire" },
				{
					name: "Electrical Floor Heating",
					link: "/service/electrical-floor-heating",
				},
				{ name: "Lighting Service", link: "/service/lighting-service" },
				{
					name: "Ceiling Fans Installation",
					link: "/service/ceiling-fans",
				},
				{
					name: "Under Cabinet Lighting",
					link: "/service/under-cabinet-lighting",
				},
				{
					name: "Landscape Lighting",
					link: "/service/landscape-lighting",
				},
			],
		},
		{
			id: "landscaping",
			link: "/landscaping",
			text: "Landscaping Services",
			types: [
				{ name: "Landscape Design", link: "/service/landscape-design" },
				{ name: "Grading", link: "/service/grading" },
				{ name: "Planting", link: "/service/planting" },
				{ name: "Tree Removal", link: "/service/tree-removal" },
				{
					name: "Patio Installation",
					link: "/service/patio-installation",
				},
				{ name: "Sod Installation", link: "/service/sod-installation" },
				{
					name: "Fence Installation",
					link: "/service/fence-installation",
				},
				{ name: "Retaining Walls", link: "/service/retaining-walls" },
				{ name: "Fountain", link: "/service/fountain" },
				{ name: "Fire Pits", link: "/service/fire-pits" },
				{
					name: "Path Installation",
					link: "/service/path-installation",
				},
				{
					name: "Irrigation Installation",
					link: "/service/irrigation-installation",
				},
				{ name: "Power Washing", link: "/service/power-washing" },
				{ name: "Weed Control", link: "/service/weed-control" },
				{
					name: "Landscape Lighting",
					link: "/service/landscape-lighting",
				},
			],
		},
		{
			id: "flooring",
			link: "/flooring",
			text: "Flooring",
			types: [
				{
					name: "Hardwood Flooring",
					link: "/service/hardwood-flooring",
				},
				{
					name: "Laminate Flooring",
					link: "/service/laminate-flooring",
				},
				{ name: "Carpet", link: "/service/carpet" },
				{ name: "LVT Flooring", link: "/service/lvt-flooring" },
			],
		},
		{
			id: "roofing",
			link: "/roofing",
			text: "Roofing",
			types: [
				{
					name: "Roof Repair",
					link: "/service/roof-repair",
				},
				{
					name: "Metal Roofing",
					link: "/service/metal-roofing",
				},
				{
					name: "Roof Replacement",
					link: "/service/roof-replacement",
				},
				{
					name: "Commercial Roofing",
					link: "/service/commercial-roofing",
				},
				{
					name: "Flat Roofing",
					link: "/service/flat-roofing",
				},
				{
					name: "Skylights",
					link: "/service/skylights",
				},
				{
					name: "Shingles Roof",
					link: "/service/shingles-roof",
				},
				{
					name: "Asphalt Roofing",
					link: "/service/asphalt-roofing",
				},
				{
					name: "Gutter Repair",
					link: "/service/gutter-repair",
				},
				{
					name: "Gutter Cleaning",
					link: "/service/gutter-cleaning",
				},
			],
		},
		{
			id: "doors",
			link: "/door-installation",
			text: "Doors",
			types: [
				{ name: "Interior Doors", link: "/service/interior-doors" },
				{ name: "Exterior Doors", link: "/service/exterior-doors" },
				{ name: "Garage Doors", link: "/service/garage-doors" },
				{ name: "Sliding Doors", link: "/service/sliding-doors" },
				{ name: "Door Repair", link: "/service/door-repair" },
				{ name: "Door Replacement", link: "/service/door-replacement" },
				{ name: "Entry Door", link: "/service/entry-door" },
			],
		},
		{
			id: "bathrooms",
			link: "/bathroom-remodel",
			text: "Bathroom Remodel",
			types: [
				{ name: "Bathroom Tile", link: "/service/bathroom-tile" },
				{
					name: "Bathroom Cabinetry",
					link: "/service/bathroom-cabinetry",
				},
				{
					name: "Bathroom Plumbing",
					link: "/service/bathroom-plumbing",
				},
				{
					name: "Bathroom Fixture",
					link: "/service/bathroom-fixtures",
				},
				{ name: "Bathroom Shower", link: "/service/bathroom-shower" },
			],
		},
		{
			id: "plumbing",
			link: "/plumbing-service",
			text: "Plumbing Services",
			types: [
				{
					name: "Kitchen Plumbing",
					link: "/service/kitchen-plumbing",
				},
				{
					name: "Bathroom Plumbing",
					link: "/service/bathroom-plumbing",
				},
				{
					name: "Jacuzzi Installation",
					link: "/service/jacuzzi-installation",
				},
				{
					name: "Toilet Installation",
					link: "/service/toilet-installation",
				},
				{
					name: "Home Repiping",
					link: "/service/home-repiping",
				},
				{
					name: "Drain Cleaning",
					link: "/service/drain-cleaning",
				},
				{
					name: "Gas Line Installation",
					link: "/service/gas-line-installation",
				},
				{
					name: "Sewer Line Repair",
					link: "/service/sewer-line-repair",
				},
			],
		},

		{
			id: "masonry",
			link: "/masonry-services",
			text: "Masonry Services",
			types: [
				{
					name: "Brick Laying and Repair",
					link: "/service/brick-laying-and-repair",
				},
				{
					name: "Stone Masonry",
					link: "/service/stone-masonry",
				},
				{
					name: "Seismic Retrofitting",
					link: "/service/seismic-retrofitting",
				},
				{
					name: "Chimney Masonry",
					link: "/service/chimney-masonry",
				},
				{
					name: "Concrete Block",
					link: "/service/concrete-block",
				},
				{
					name: "Masonry Restoration",
					link: "/service/masonry-restoration",
				},
				{
					name: "Stone Veneer",
					link: "/service/stone-veneer",
				},
				{
					name: "Commercial Masonry",
					link: "/service/commercial-masonry",
				},
			],
		},
		{
			id: "attic",
			link: "/attic-finishing",
			text: "Attic Finishing",
			types: [
				{ name: "Attic Insulation", link: "/service/attic-insulation" },
				{ name: "Attic Drywall", link: "/service/attic-drywall" },
				{
					name: "Attic Windows and Skylights",
					link: "/service/attic-windows-and-skylights",
				},
				{
					name: "Attic Storage Solutions",
					link: "/service/attic-storage-solutions",
				},
				{
					name: "Attic Ventilation",
					link: "/service/attic-ventilation",
				},
				{ name: "Attic Lighting", link: "/service/attic-lighting" },
				{
					name: "Attic Heating and Cooling",
					link: "/service/attic-heating-and-cooling",
				},
				{
					name: "Attic Bathroom Addition",
					link: "/service/attic-bathroom-addition",
				},
			],
		},
		{
			id: "architecture",
			link: "/architectural-service",
			text: "Architecture",
			types: [
				{ name: "Home Design", link: "/service/home-design" },
				{
					name: "Structural Engineering",
					link: "/service/structural-engineering",
				},
				{
					name: "Civil Engineering",
					link: "/service/civil-engineering",
				},
				{ name: "Interior Design", link: "/service/interior-design" },
				{
					name: "Landscape Architect",
					link: "/service/landscape-design",
				},
				{
					name: "GeoTech Engineering",
					link: "/service/geotech-engineering",
				},
				{ name: "3-D Rendering", link: "/service/3d-rendering" },
				{
					name: "Seismic Retrofitting",
					link: "/service/seismic-retrofitting",
				},
				{
					name: "Foundation Repair",
					link: "/service/foundation-repair",
				},
			],
		},
		{
			id: "basement",
			link: "/basement-finishing",
			text: "Basement Finishing",
			types: [
				{
					name: "Basement Flooring",
					link: "/service/basement-flooring",
				},
				{ name: "Basement Remodel", link: "/service/basement-remodel" },
				{
					name: "Basement Entertainment Center",
					link: "/service/basement-entertainment-center",
				},
				{
					name: "Basement Bathroom",
					link: "/service/basement-bathroom",
				},
				{
					name: "Basement Waterproofing",
					link: "/service/basement-waterproofing",
				},
				{
					name: "Basement Insulation",
					link: "/service/basement-insulation",
				},
				{ name: "Basement Bar", link: "/service/basement-bar" },
				{ name: "Basement Windows", link: "/service/basement-windows" },
			],
		},
		{
			id: "hvac",
			link: "/hvac-installation",
			text: "HVAC Installation",
			types: [
				{ name: "HVAC Repair", link: "/service/hvac-repair" },
				{ name: "HVAC Cleaning", link: "/service/hvac-cleaning" },
				{
					name: "Split System Installation",
					link: "/service/split-system-installation",
				},
			],
		},
		{
			id: "excavation",
			link: "/excavation-contractors",
			text: "Excavation Service",
			types: [
				{ name: "Site Preparation", link: "/service/site-preparation" },
				{ name: "Earthworks", link: "/service/earthworks" },
				{ name: "Grading", link: "/service/grading" },
				{ name: "Land Clearing", link: "/service/land-clearing" },
				{ name: "Dirt Removal", link: "/service/dirt-removal" },
			],
		},
		{
			id: "kitchen",
			link: "/kitchen-remodel",
			text: "Kitchen Remodel",
			types: [
				{ name: "Kitchen Cabinets", link: "/service/kitchen-cabinets" },
				{
					name: "Kitchen Countertops",
					link: "/service/kitchen-countertops",
				},
				{ name: "Kitchen Flooring", link: "/service/kitchen-flooring" },
				{
					name: "Kitchen Appliances",
					link: "/service/kitchen-appliances",
				},
				{ name: "Kitchen Lighting", link: "/service/kitchen-lighting" },
				{ name: "Kitchen Plumbing", link: "/service/kitchen-plumbing" },
				{ name: "Patio Kitchen", link: "/service/patio-kitchen" },
			],
		},
		{
			id: "windows",
			link: "/window-installation",
			text: "Window Services",
			types: [
				{
					name: "Window Replacement",
					link: "/service/window-replacement",
				},
				{ name: "Egress Window", link: "/service/egress-window" },
				{
					name: "Energy-Efficient Windows",
					link: "/service/energy-efficient-windows",
				},
				{
					name: "Skylight Installation",
					link: "/service/skylight-installation",
				},
				{
					name: "Commercial Windows",
					link: "/service/commercial-windows",
				},
			],
		},
		{
			id: "decking",
			link: "/backyard-deck-installation",
			text: "Deck Building",
			types: [
				{ name: "Trex Deck", link: "/service/trex-decking" },
				{ name: "Composite Deck", link: "/service/composite-deck" },
				{ name: "Custom Deck", link: "/service/custom-deck" },
				{
					name: "Pool Deck Construction",
					link: "/service/pool-deck-construction",
				},
				{
					name: "Rooftop Deck Building",
					link: "/service/rooftop-deck-building",
				},
				{ name: "Deck Repair", link: "/service/deck-repair" },
				{ name: "Deck Restoration", link: "/service/deck-restoration" },
				{
					name: "Deck Railing Installation",
					link: "/service/deck-railing",
				},
				{
					name: "Building Deck Stairs and Steps",
					link: "/service/building-deck-stairs-and-steps",
				},
				{ name: "Deck Replacement", link: "/service/deck-replacement" },
				{ name: "Timber Decking", link: "/service/timber-decking" },
			],
		},
		{
			id: "siding",
			link: "/siding",
			text: "Siding",
			types: [
				{
					name: "Siding Repair",
					link: "/service/siding-repair",
				},
				{
					name: "Vinyl Siding",
					link: "/service/vinyl-siding",
				},
				{
					name: "Hardie Siding",
					link: "/service/hardie-siding",
				},
				{
					name: "Cedar Siding",
					link: "/service/cedar-siding",
				},
				{
					name: "Aluminum Siding",
					link: "/service/aluminum-siding",
				},
				{
					name: "Stone Veneer",
					link: "/service/stone-veneer",
				},
				{
					name: "Composite Siding",
					link: "/service/composite-siding",
				},
			],
		},
		{
			id: "painting",
			link: "/painting",
			text: "Painting Services",
			types: [
				{
					name: "Interior Painting",
					link: "/service/interior-painting",
				},
				{
					name: "Exterior Painting",
					link: "/service/exterior-painting",
				},
				{
					name: "Cabinet Painting",
					link: "/service/cabinet-painting",
				},
				{
					name: "Trim Painting",
					link: "/service/trim-painting",
				},
				{
					name: "Room Painting",
					link: "/service/room-painting",
				},
				{
					name: "Ceiling Painting",
					link: "/service/ceiling-painting",
				},
				{
					name: "Deck Painting",
					link: "/service/deck-painting",
				},
				{
					name: "Siding Painting",
					link: "/service/siding-painting",
				},
				{
					name: "Fence Painting",
					link: "/service/fence-painting",
				},
				{
					name: "Varnishing",
					link: "/service/varnishing",
				},
				{
					name: "Stucco",
					link: "/service/stucco",
				},
			],
		},
	],
	products: [
		{
			link: "/countertop-installation-near-me",
			text: "Countertop Installation",
			types: [
				{
					name: "Quartz Countertops",
					link: "/quartz_countertops",
				},
				{
					name: "Marble Countertops",
					link: "/marble_countertops",
				},
				{
					name: "Granite Countertops",
					link: "/granite_countertops",
				},
				{
					name: "Onyx Countertops",
					link: "/onyx_countertops",
				},
				{
					name: "Remnants",
					link: "/remnants",
				},
				{
					name: "Travertine Countertops",
					link: "/travertine_countertops",
				},
				{
					name: "Limestone Countertops",
					link: "/limestone_countertops",
				},
				{
					name: "Soapstone Countertops",
					link: "/soapstone_countertops",
				},
			],
		},
		{
			link: "/flooring",
			text: "Flooring",
			types: [
				{
					name: "Hardwood Flooring",
					link: "/hardwood_flooring",
					popularServices: [
						{
							name: "Hardwood Floor Installation",
							link: "/hardwood_floor_installation",
						},
						{
							name: "Hardwood Floor Refinishing",
							link: "/hardwood_floor_refinishing",
						},
						{
							name: "Custom Staining",
							link: "/hardwood_custom_staining",
						},
						{
							name: "Wood Floor Repair",
							link: "/hardwood_floor_repair",
						},
						{
							name: "Patterned Wood Flooring",
							link: "/hardwood_patterned_flooring",
						},
					],
				},
				{
					name: "Laminate Flooring",
					link: "/laminate_flooring",
					popularServices: [
						{
							name: "Laminate Floor Installation",
							link: "/laminate_floor_installation",
						},
						{
							name: "Laminate Floor Repair",
							link: "/laminate_floor_repair",
						},
						{
							name: "Moisture-Resistant Laminate",
							link: "/laminate_moisture_resistant",
						},
						{
							name: "Embossed Laminate Designs",
							link: "/laminate_embossed_designs",
						},
						{
							name: "Laminate Floor Removal",
							link: "/laminate_floor_removal",
						},
					],
				},
				{
					name: "Tile Flooring",
					link: "/tile_flooring",
					popularServices: [
						{
							name: "Tile Floor Installation",
							link: "/tile_floor_installation",
						},
						{
							name: "Tile Floor Repair",
							link: "/tile_floor_repair",
						},
						{
							name: "Grout Cleaning",
							link: "/tile_grout_cleaning",
						},
						{
							name: "Porcelain Tile Options",
							link: "/tile_porcelain_options",
						},
						{
							name: "Custom Tile Patterns",
							link: "/tile_custom_patterns",
						},
					],
				},
				// Add more types as needed
			],
		},
	],
};
