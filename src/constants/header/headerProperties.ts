import header_liked from "/public/logo/header_liked.svg";
import header_cart from "/public/logo/header_cart.svg";
import header_user from "/public/logo/header_user.svg"
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
	}/* ,
	{
		id: 3,
		icon: header_user,
		alt: "header_user_icon",
		href: "/",
	} */
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
			link: "/countertop-installation",
			text: "Countertops",
			id: "countertops",
			types: [
				{
					name: "Quartz Countertops",
					link: "/quartz-countertop-installation",
				},
				{
					name: "Granite Countertops",
					link: "/granite-countertop-installation",
				},
				{
					name: "Laminate Countertops",
					link: "/laminate-countertop-installation",
				},
				{
					name: "Soapstone Countertops",
					link: "/soapstone-countertop-installation",
				},
				{
					name: "Butcher Block",
					link: "/butcher-block-installation",
				},
				{
					name: "Concrete Countertops",
					link: "/concrete-countertop-installation",
				},
				{
					name: "Stainless Steel Countertops",
					link: "/stainless-steel-countertops",
				},
				{
					name: "Porcelain Countertops",
					link: "/porcelain-countertops",
				},
				{
					name: "Countertop Repair",
					link: "/countertop-repair",
				},
			],
		},
		{
			link: "/flooring",
			text: "Flooring & Tile",
			id: "hardwood",
			types: [
				{
					name: "Hardwood Flooring",
					link: "/hardwood-floor-installation",
				},
				{
					name: "Laminate Flooring",
					link: "/laminate-floor",
				},
				{
					name: "Tile Flooring",
					link: "/tile-installers",
				},
				// Add more types as needed
			],
		},
		{
			link: "/door-installation",
			text: "Doors",
			id: "doors",
			types: [
				{
					name: "Interior Doors",
					link: "/intertor-door-installation",
				},
				{
					name: "Exterior Doors",
					link: "/exterior-doors-installation",
				},
				{
					name: "Garage Doors",
					link: "/garage-door-installation",
				},
				{
					name: "Sliding Doors",
					link: "/sliding-doors-installation",
				},
				{
					name: "Door Repair",
					link: "/door-repair",
				},
			],
		},
		{
			id: "cabinets",
			link: "/cabinet-installer",
			text: "Cabinet Installer",
			types: [
				{
					name: "Cabinet Designer",
					link: "/cabinet-designer",
				},
				{
					name: "Cabinet Refinishing",
					link: "/cabinet-refinishing",
				},
				{
					name: "Bathroom Vanity",
					link: "/bathroom-vanity-installation-near-me",
				},
				{
					name: "Storage Cabinets",
					link: "/storage-cabinets",
				},
			],
		},
		{
			id: "bathrooms",
			link: "/bathroom-remodel",
			text: "Bathroom Remodel",
			types: [
				{
					name: "Bathroom Tile",
					link: "/bathroom-tile-installation",
				},
				{
					name: "Bathroom Cabinetry",
					link: "/bathroom-cabinet-installation",
				},
				{
					name: "Bathroom Plumbing",
					link: "/bathroom-plumbing",
				},
				{
					name: "Bathroom Fixture",
					link: "/bathroom-fixture-installation",
				},
				{
					name: "Bathroom Shower",
					link: "/bathroom-shower-remodel",
				},
			],
		},
		{
			link: "/attic-renovation",
			text: "Attic Renovation",
			id: "attic",
			types: [
				{
					name: "Attic Finishing",
					link: "/attic-finishing",
				},
				{
					name: "Attic Insulation",
					link: "/attic-insulation",
					popularServices: [
						{
							name: "Attic Blown-In Insulation",
							link: "/attic_blown_in_insulation",
						},
						{
							name: "Attic Spray Foam Insulation",
							link: "/attic_spray_foam_insulation",
						},
						{
							name: "Attic Batt Insulation",
							link: "/attic_batt_insulation",
						},
					],
				},
				{
					name: "Attic Drywall",
					link: "/drywall-attic",
					popularServices: [
						{
							name: "Attic Drywall Installation",
							link: "/attic_drywall_installation",
						},
						{
							name: "Attic Ceiling Finishing",
							link: "/attic_ceiling_finishing",
						},
						{
							name: "Attic Painting",
							link: "/attic_painting",
						},
					],
				},
				{
					name: "Attic Windows and Skylights",
					link: "/attic-windows-skylights",
					popularServices: [
						{
							name: "Attic Window Installation",
							link: "/attic_window_installation",
						},
						{
							name: "Attic Skylight Installation",
							link: "/attic_skylight_installation",
						},
						{
							name: "Attic Window Replacement",
							link: "/attic_window_replacement",
						},
					],
				},
				{
					name: "Attic Storage Solutions",
					link: "/attic-storage-solutions",
					popularServices: [
						{
							name: "Attic Built-In Shelving",
							link: "/attic_built_in_shelving",
						},
						{
							name: "Attic Closet Conversion",
							link: "/attic_closet_conversion",
						},
						{
							name: "Attic Custom Cabinets",
							link: "/attic_custom_cabinets",
						},
					],
				},
				{
					name: "Attic Ventilation",
					link: "/attic-ventilation",
					popularServices: [
						{
							name: "Attic Vent Installation",
							link: "/attic_vent_installation",
						},
						{
							name: "Attic Fan Installation",
							link: "/attic_fan_installation",
						},
						{
							name: "Attic Ventilation Upgrade",
							link: "/attic_ventilation_upgrade",
						},
					],
				},
				{
					name: "Attic Lighting",
					link: "/attic-lighting",
					popularServices: [
						{
							name: "Attic LED Lighting Installation",
							link: "/attic_led_lighting_installation",
						},
						{
							name: "Attic Skylight Lighting",
							link: "/attic_skylight_lighting",
						},
						{
							name: "Attic Recessed Lighting",
							link: "/attic_recessed_lighting",
						},
					],
				},
				{
					name: "Attic Heating and Cooling",
					link: "/attic-heating-cooling",
					popularServices: [
						{
							name: "Attic HVAC Installation",
							link: "/attic_hvac_installation",
						},
						{
							name: "Attic Insulated Ductwork",
							link: "/attic_insulated_ductwork",
						},
						{
							name: "Attic Radiant Heating",
							link: "/attic_radiant_heating",
						},
					],
				},
				{
					name: "Attic Bathroom Addition",
					link: "/attic-bathroom",
					popularServices: [
						{
							name: "Attic Bathroom Plumbing",
							link: "/attic_bathroom_plumbing",
						},
						{
							name: "Attic Shower Installation",
							link: "/attic_shower_installation",
						},
						{
							name: "Attic Bathroom Ventilation",
							link: "/attic_bathroom_ventilation",
						},
					],
				},
				// Add more types and popular services as needed
			],
		},
		{
			id: "architecture",
			link: "/architecture-firms",
			text: "Architecture",
			types: [
				{
					name: "Home Design",
					link: "/home-design",
				},
				{
					name: "Structural Engineer",
					link: "/structural-engineer",
				},
				{
					name: "Civil Engineering",
					link: "/civil-engineering-companies",
				},
				{
					name: "Interior Design",
					link: "/interior-design",
				},
				{
					name: "Landscape Architect",
					link: "/landscape-architect",
				},
				{
					name: "GeoTech Engineering",
					link: "/geotech-engineering",
				},
				// Add more types and popular services as needed
			],
		},
		{
			id: "basement",
			link: "/basement-finishing-contractors",
			text: "Basement Finishing",
			types: [
				{
					name: "Basement Flooring",
					link: "/basement-flooring",
				},
				{
					name: "Basement Remodel",
					link: "/basement-remodel",
				},
				{
					name: "Basement Entertainment Center",
					link: "/basement-entertainment-center",
				},
				{
					name: "Basement Bathroom",
					link: "/basement_bathroom",
					popularServices: [
						{
							name: "Basement Bathroom Plumbing",
							link: "/basement_bathroom_plumbing",
						},
						{
							name: "Basement Shower Installation",
							link: "/basement_shower_installation",
						},
						{
							name: "Basement Toilet Addition",
							link: "/basement_toilet_addition",
						},
						{
							name: "Basement Vanity Installation",
							link: "/basement_vanity_installation",
						},
					],
				},
				{
					name: "Basement Windows",
					link: "/basement-windows",
				},
			],
		},
		{
			id: "hvac",
			link: "/hvac-installation",
			text: "HVAC Installation",
			types: [
				{
					name: "HVAC Repair",
					link: "/hvac-repair",
				},
				{
					name: "Heating and Cooling",
					link: "/heating-and-cooling",
				},
				{
					name: "HVAC Cleaning",
					link: "/hvac-cleaning",
				},
				{
					name: "Mini Split Installation",
					link: "/mini-split-system-installers",
				},
			],
		},
		{
			id: "excavation",
			link: "/excavating-contractors",
			text: "Excavation",
			types: [
				{
					name: "Site Preparation",
					link: "/site-preparation-contractors",
				},
				{
					name: "Earthworks",
					link: "/earthwork-contractor",
				},
				{
					name: "Grading",
					link: "/grading-and-excavating-contractors",
				},
				{
					name: "Land Clearing",
					link: "/land-clearing",
				},
				{
					name: "Dirt Removal",
					link: "/excavation-dirt-removal",
				},
			],
		},
		{
			id: "kitchen",
			link: "/kitchen-remodel",
			text: "Kitchen Remodel",
			types: [
				{
					name: "Kitchen Cabinets",
					link: "/kitchen-cabinets",
				},
				{
					name: "Kitchen Countertops",
					link: "/kitchen-countertops",
				},
				{
					name: "Kitchen Flooring",
					link: "/kitchen-flooring",
				},
				{
					name: "Kitchen Appliances",
					link: "/kitchen_appliances",
				},
				{
					name: "Kitchen Lighting",
					link: "/kitchen-lighting",
				},

				{
					name: "Kitchen Plumbing",
					link: "/kitchen-plumbing",
				},
			],
		},
		{
			id: "windows",
			link: "/window-services",
			text: "Window Services",
			types: [
				{
					name: "Window Installation",
					link: "/window-installation",
				},
				{
					name: "Window Replacement",
					link: "/window-repair",
				},
				{
					name: "Egress Window",
					link: "/egress-window",
				},
				{
					name: "Energy-Efficient Windows",
					link: "/energy-efficient_windows",
				},
				{
					name: "Skylight Installer",
					link: "/skylight-installer",
				},
				{
					name: "Commercial Windows",
					link: "/commercial-windows",
				},
			],
		},
		{
			id: "decking",
			link: "/deck-building",
			text: "Deck Building",
			types: [
				{
					name: "Composite Decking",
					link: "/composite-decking",
				},
				{
					name: "Wood Decking",
					link: "/wood-decking",
				},
				{
					name: "Trex Decking",
					link: "/trex-decking",
				},
				{
					name: "Deck Resurfacing",
					link: "/deck-resurfacing",
				},
				{
					name: "Hardwood Decking",
					link: "/hardwood-decking",
				},
				{
					name: "Pergola",
					link: "/pergola-builder",
				},
			],
		},
		{
			id: "plumbing",
			link: "/plumbing-services",
			text: "Plumbing Services",
			types: [
				{
					name: "Kitchen Plumbing",
					link: "/kitchen-plumbing",
				},
				{
					name: "Bathroom Plumbing",
					link: "/bathroom-plumbing",
				},
				{
					name: "Jacuzzi Installation",
					link: "/jacuzzi-installation",
				},
				{
					name: "Toilet Installation",
					link: "/toilet-installation",
				},
				{
					name: "Repiping Specialists",
					link: "/repiping-specialists",
				},
				{
					name: "Gas Line Repeir",
					link: "/gas-line-repair",
				},
				{
					name: "Sewer Line Repair",
					link: "/sewer-line-repair",
				},
			],
		},
		{
			id: "electrical",
			link: "/electrical-services",
			text: "Electrical Services",
			types: [
				{
					name: "Electrical Panel Installation",
					link: "/electrical-panel-installation",
				},
				{
					name: "Knob and Tube",
					link: "/knob-and-tube-wiring-replacement",
				},
				{
					name: "House Rewire",
					link: "/house-rewire",
				},
				{
					name: "Electric Floor Heating",
					link: "/electric-floor-heating",
				},
				{
					name: "Lightning Service",
					link: "/lightning-service",
				},
				{
					name: "Ceiling Fans Installation",
					link: "/ceiling-fans-installation",
				},
				{
					name: "Under Cabinet Lightning",
					link: "/under-cabinet-lightning",
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
