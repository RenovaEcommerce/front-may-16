interface CatalogCategory {
	title: string;
	id: string;
	url: string;
	text: string;
}

export const catalogCategories: CatalogCategory[] = [
	{
		title: "all products",
		id: "all_products",
		url: "",
		text: "Browse All Products",
	},
	{
		title: "decking",
		id: "decking",
		url: "decking",
		text: "Browse All Products",
	},
	{
		title: "countertops",
		id: "countertops",
		url: "countertops",
		text: "Browse Countertops",
	},
	{ title: "windows", id: "windows", url: "windows", text: "Browse Windows" },
	{ title: "doors", id: "doors", url: "doors", text: "Browse Doors" },
	{ title: "tile", id: "tile", url: "tile", text: "Browse Tile" },

	{ title: "hvac", id: "hvac", url: "hvac", text: "Browse HVAC" },
	{
		title: "kitchen cabinets",
		id: "cabinets",
		url: "cabinets",
		text: "Browse Kitchen Cabinets",
	},
	{
		title: "hardwood",
		id: "hardwood",
		url: "hardwood",
		text: "Browse Hardwood",
	},
	{
		title: "carpet",
		id: "carpet",
		url: "carpets",
		text: "Browse Carpet",
	},
];
