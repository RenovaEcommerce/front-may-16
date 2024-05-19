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
			heading: "Tile Installation",
			paragraph:
				"New tile installation, wide variety of tiles available for kitchen backsplash, floors, bathroom floors, shower walls.",
			url: "/tile-installation",
			image: "service_image_kitchen_cabinets",
			price: "Price starts at $2,500",
		},
		{
			heading: "Floor Tile",
			paragraph:
				"Explore our catalogue to see what floor tile will look best in your home, easy floor tile installation with us",
			url: "/service/floor-tile",
			image: "service_image_kitchen_cabinets",
			price: "Price starts at $2,500",
		},
		{
			heading: "Bathroom Tile",
			paragraph:
				"Bathroom tile available for installation in all colors and shapes, can be purchased at a discount, bathroom glows with new tile install.",
			url: "/service/bathroom-tile",
			image: "service_image_kitchen_cabinets",
			price: "Price starts at $2,500",
		},
		{
			heading: "Shower Tile",
			paragraph:
				"Shower tile installation of any shape and size, change your shower with our new tile, shower walls and shower floor changed in one call.",
			url: "/service/shower-tile",
			image: "service_image_kitchen_cabinets",
			price: "Price starts at $2,500",
		},
		{
			heading: "Backsplash Tile",
			paragraph:
				"Kitchen backsplash tile, subway tile, mosaic tile and more, can be purchased with a discount. Backsplash ideas rendered and installed by us.",
			url: "/service/backsplash-tile",
			image: "service_image_kitchen_cabinets",
			price: "Price starts at $1,200",
		},
		{
			heading: "Ceramic Tile",
			paragraph:
				"Ceramic floor tiles are a practical option for kitchen and bathroom floors. Ceramic floor tiles - installed easily in any room.",
			url: "/service/ceramic-tile",
			image: "service_image_kitchen_cabinets",
			price: "Price starts at $1,200",
		},
		{
			heading: "Porcelain Tile",
			paragraph:
				"Our porcelain tile collection offers both elegance and versatility. We offer sales and installation services for porcelain tiles.",
			url: "/service/porcelain-tile",
			image: "service_image_kitchen_cabinets",
			price: "Price starts at $2,000",
		},
		{
			heading: "Mosaic Tile",
			paragraph:
				"Mosaic kitchen backsplash, mosaic tile floors - no arguing that mosaic tile looks great anywhere it goes. Install mosaic tiles with us.",
			url: "/service/mosaic-tile",
			image: "service_image_kitchen_cabinets",
			price: "Price starts at $1,800",
		},
		{
			heading: "Heated Tile Floor",
			paragraph:
				"Radiant floor heating is a great addition to your home. Upgrade any room by adding a heated tile floor, feel the benefit of heated floors.",
			url: "/service/heated-tile-floor",
			image: "service_image_kitchen_cabinets",
			price: "Price starts at $3,000",
		},
		{
			heading: "Basement Floor Tile",
			paragraph:
				"Install specialty basement tile, don't just cover it with basement floor paint. Explore basement flooring ideas with a free consultation.",
			url: "/service/basement-floor-tile",
			image: "service_image_kitchen_cabinets",
			price: "Price starts at $2,200",
		},
		{
			heading: "Subway Tile",
			paragraph:
				"Discover our wide selection of subway tile for your kitchen backsplash or bathroom. Explore the variety of sizes and colors available.",
			url: "/service/subway-tile",
			image: "service_image_kitchen_cabinets",
			price: "Price starts at $1,200",
		},
		{
			heading: "Grout Cleaning",
			paragraph:
				"Cleaning grout is a difficult task, that's why we offer tile and grout cleaning. Our grout cleaner will make your tiles look like new.",
			url: "/service/grout-tile-cleaning",
			image: "service_image_kitchen_cabinets",
			price: "Price starts at $500",
		},
		{
			heading: "Fireplace Tile",
			paragraph:
				"Transform your fireplace with our free consultation on fireplace tile ideas and our expert fireplace tile installation services.",
			url: "/service/fireplace-tile",
			image: "service_image_kitchen_cabinets",
			price: "Price starts at $2,500",
		},
		{
			heading: "Outdoor Tile",
			paragraph:
				"We offer a wide selection of outdoor tiles for your patio to ensure a perfect fit for your needs. Explore our outdoor patio tile options.",
			url: "/service/outdoor-tile",
			image: "service_image_kitchen_cabinets",
			price: "Price starts at $2,500",
		},
	],
	countertops: [
		{
			heading: "Countertop Installation",
			paragraph:
				"We offer a wide variety of quartz countertops, marble countertops, and granite countertops. Schedule your countertop installation now.",
			url: "/countertop-installation",
			image: "service_image_kitchen_cabinets",
			price: "Price starts at $2,500",
		},
		{
			heading: "Quartz Countertops",
			paragraph:
				"Quartz countertops offer a wide range of colors and shades, making them the perfect choice for any kitchen. Discover your countertop.",
			url: "/service/quartz-countertops",
			image: "service_image_kitchen_cabinets",
			price: "Price starts at $2,500",
		},
		{
			heading: "Granite Countertops",
			paragraph:
				"Installing granite countertops in your kitchen is quick and easy. Made from natural stone, these durable surfaces add beauty to any kitchen.",
			url: "/service/granite-countertops",
			image: "service_image_kitchen_cabinets",
			price: "Price starts at $2,500",
		},
		{
			heading: "Laminate Countertops",
			paragraph:
				"Laminate countertops offer an affordable and low-maintenance option with a wide variety of colors and styles to choose from.",
			url: "/service/laminate-countertops",
			image: "service_image_kitchen_cabinets",
			price: "Price starts at $1,200",
		},
		{
			heading: "Soapstone Countertops",
			paragraph:
				"Get a unique soapstone slab for your kitchen. We can help you choose and install your soapstone countertop, pick one from our inventory.",
			url: "/service/soapstone-countertops",
			image: "service_image_kitchen_cabinets",
			price: "Price starts at $2,800",
		},
		{
			heading: "Butcher Block",
			paragraph:
				"Butcher block countertops are popular in kitchens for their timeless elegance, durability, and versatile nature, easy to cut and install.",
			url: "/service/butcher-block",
			image: "service_image_kitchen_cabinets",
			price: "Price starts at $2,000",
		},
		{
			heading: "Concrete Countertop",
			paragraph:
				"Concrete countertops give a modern industrial aesthetic to contemporary kitchens, but their installation process can be difficult.",
			url: "/service/concrete-countertops",
			image: "service_image_kitchen_cabinets",
			price: "Price starts at $3,000",
		},
		{
			heading: "Stainless Steel Countertops",
			paragraph:
				"Stainless steel countertops are a popular choice among professionals due to their ease of cleaning and hygienic properties.",
			url: "/service/stainless-steel-countertops",
			image: "service_image_kitchen_cabinets",
			price: "Price starts at $3,200",
		},
		{
			heading: "Porcelain Countertop",
			paragraph:
				"Porcelain countertops are resistant to scratches, stains, and heat, come in a wide swath of color palettes, fabricated as one seamless piece.",
			url: "/service/porcelain-countertops",
			image: "service_image_kitchen_cabinets",
			price: "Price starts at $3,500",
		},
		{
			heading: "Countertop Repair",
			paragraph:
				"When your countertop has cracks or scratches, we can repair it instead of replacing the entire surface, helping you save money.",
			url: "/service/countertop-repair",
			image: "service_image_kitchen_cabinets",
			price: "Price starts at $800",
		},
	],
	cabinets: [
		{
			heading: "Kitchen Cabinet Installation",
			paragraph:
				"Kitchen cabinets installed by professionals in your kitchen. Pick your perfect kitchen cabinet set, from our inventory.",
			url: "/kitchen-cabinet-installation",
			image: "service_image_kitchen_cabinets",
			price: "Price starts at $3,000",
		},
		{
			heading: "Kitchen Cabinets",
			paragraph:
				"Melamine, MDF, hardwood, plywood kitchen cabinets, and many more are available for purchase with select cabinets at a discount.",
			url: "/service/kitchen-cabinets",
			image: "service_image_kitchen_electrical",
			price: "Price starts at $3,000",
		},
		{
			heading: "Cabinet Design",
			paragraph:
				"Our designer services for creating kitchen and bathroom cabinet designs are complimentary. Visualize your cabinets with ease.",
			url: "/service/cabinet-design",
			image: "service_image_kitchen_countertops",
			price: "Price starts at $1,500",
		},
		{
			heading: "Cabinet Installation",
			paragraph:
				"If you need more storage, we can install cabinets in any room of your house. Cabinet Installation for all your storage needs done right.",
			url: "/service/cabinet-installation",
			image: "service_image_kitchen_electrical",
			price: "Price starts at $2,500",
		},
		{
			heading: "Bathroom Cabinets",
			paragraph:
				"Bathroom cabinets are a great way to add style to your bathroom. Specialty cabinets are available for bathroom vanity and storage needs.",
			url: "/service/bathroom-cabinets",
			image: "service_image_kitchen_backsplash",
			price: "Price starts at $2,200",
		},
		{
			heading: "Cabinet Refinishing",
			paragraph:
				"Our cabinet refacing service can save you time and money with professional results. Kitchen cabinet refinishing and more with our help.",
			url: "/service/cabinet-refinishing",
			image: "service_image_kitchen_flooring",
			price: "Price starts at $1,500",
		},
		{
			heading: "Built-in Cabinets",
			paragraph:
				"Built-in cabinets provide a seamless and timeless look to any room, creating a sense of cohesiveness, and helping to declutter your space.",
			url: "/service/built-in-cabinets",
			image: "service_image_custom_kitchen_cabinets",
			price: "Price starts at $4,000",
		},
		{
			heading: "Cabinet Door Replacement",
			paragraph:
				"Freshen up your kitchen cabinets by replacing the cabinet doors with a wide variety of options that won't break the bank.",
			url: "/service/cabinet-door-replacement",
			image: "service_image_kitchen_plumbing",
			price: "Price starts at $1,800",
		},
		{
			heading: "Cabinet Repair",
			paragraph:
				"We specialize in repairing kitchen cabinets as well as any other cabinets in your home that require fixing.",
			url: "/service/cabinet-repair",
			image: "service_image_kitchen_hardware",
			price: "Price starts at $800",
		},
		{
			heading: "Cabinet Painting",
			paragraph:
				"Brighten up your cabinets with our professional cabinet painting service. We use high-quality cabinet paint for all of your cabinets.",
			url: "/service/cabinet-painting",
			image: "service_image_kitchen_pantry",
			price: "Price starts at $1,300",
		},
		{
			heading: "Storage Cabinets",
			paragraph:
				"Add storage space and functionality to any room with our cabinet installation and sales service. See storage cabinets we sell and install.",
			url: "/service/storage-cabinets",
			image: "service_image_kitchen_expansion",
			price: "Price starts at $2,500",
		},
	],
	electrical: [
		{
			heading: "Electrical Installation",
			paragraph:
				"Upgrade your home's wiring with our electrical installation service, all electricians are licensed and bonded, worry-free installation.",
			url: "/electrical-installation",
			image: "service_image_kitchen_cabinets",
			price: "Price starts at $1,200",
		},
		{
			heading: "Electrical Panel",
			paragraph:
				"Installing an electrical panel can help stabilize voltage levels and improve the overall performance of your home's electrical system.",
			url: "/service/electrical-panel",
			image: "service_image_kitchen_cabinets",
			price: "Price starts at $1,500",
		},
		{
			heading: "Knob and Tube",
			paragraph:
				"If your home still has knob and tube wiring, we highly recommend upgrading to a modern electrical system with our licensed electricians.",
			url: "/service/knob-and-tube",
			image: "service_image_kitchen_cabinets",
			price: "Price starts at $2,500",
		},
		{
			heading: "House Rewire",
			paragraph:
				"Upgrade your home's electrical wiring for added safety and energy savings. Our certified electricians will have you saving in days.",
			url: "/service/house-rewire",
			image: "service_image_kitchen_cabinets",
			price: "Price starts at $3,500",
		},
		{
			heading: "Electrical Floor Heating",
			paragraph:
				"Installing electric floor heating in any room adds comfort and helps retain heat in your house.",
			url: "/service/electrical-floor-heating",
			image: "service_image_kitchen_cabinets",
			price: "Price starts at $3,000",
		},
		{
			heading: "Lighting Service",
			paragraph:
				"Our lighting service can add any style of interior or exterior lights to your home, including recessed, chandeliers, and outdoor lights.",
			url: "/service/lighting-service",
			image: "service_image_kitchen_cabinets",
			price: "Price starts at $1,200",
		},
		{
			heading: "Ceiling Fans Installation",
			paragraph:
				"Ceiling fans can be installed by our expert electricians in any room and customized to your specific needs and fit your interior style.",
			url: "/service/ceiling-fans",
			image: "service_image_kitchen_cabinets",
			price: "Price starts at $1,500",
		},
		{
			heading: "Under Cabinet Lighting",
			paragraph:
				"Make your cabinets stand out with our under-cabinet lighting installation a stylish and functional addition to your cabinets.",
			url: "/service/under-cabinet-lighting",
			image: "service_image_kitchen_cabinets",
			price: "Price starts at $800",
		},
		{
			heading: "Landscape lighting",
			paragraph:
				"Landscape lighting installation is essential for the beauty and functionality of your yard, use our designer to determine the best fit.",
			url: "/service/landscape-lighting",
			image: "service_image_kitchen_cabinets",
			price: "Price starts at $2,000",
		},
	],
	hvac: [
		{
			heading: "HVAC Installation",
			paragraph:
				"Expert HVAC installation, ensuring optimal comfort and energy efficiency with top-tier service.",
			url: "/hvac-installation",
			image: "service_image_kitchen_cabinets",
			price: "Price starts at $4,000",
		},
		{
			heading: "HVAC Repair",
			paragraph:
				"Get 24/7 HVAC repair support with same-day, on-site emergency visits. Experience unparalleled service any time, any day!",
			url: "/service/hvac-repair",
			image: "service_image_kitchen_cabinets",
			price: "Price starts at $1,500",
		},
		{
			heading: "HVAC Cleaning",
			paragraph:
				"Affordable HVAC cleaning with flexible scheduling. See improvements within hours. Sign up for annual service today!",
			url: "/service/hvac-cleaning",
			image: "service_image_kitchen_cabinets",
			price: "Price starts at $600",
		},
		{
			heading: "Split System Installation",
			paragraph:
				"Expert installation of split systems for optimal home comfort. Free consultation determines your needs before installation.",
			url: "/service/split-installation",
			image: "service_image_kitchen_cabinets",
			price: "Price starts at $3,000",
		},
	],
	flooring: [
		{
			heading: "Flooring Installation",
			paragraph:
				"Upgrade your home with our flooring installation. Includes various types of flooring, fixtures, and various colors.",
			url: "/flooring",
			image: "service_image_kitchen_cabinets",
			price: "Price starts at $3,000",
		},
		{
			heading: "Hardwood Flooring",
			paragraph:
				"Upgrade your home with our high-quality hardwood flooring. Choose from a variety of styles and finishes to match your décor and enhance the value of your property.",
			url: "/service/hardwood-flooring",
			image: "service_image_kitchen_cabinets",
			price: "Price starts at $5,000",
		},
		{
			heading: "Laminate Flooring",
			paragraph:
				"Our laminate flooring offers durability and a stylish appearance at an affordable price. It’s easy to install and maintain, making it ideal for high-traffic areas.",
			url: "/service/laminate-flooring",
			image: "service_image_kitchen_cabinets",
			price: "Price starts at $2,500",
		},
		{
			heading: "Carpet",
			paragraph:
				"Choose our carpet installation for comfort and style. We offer a wide range of colors and textures to fit any room’s design.",
			url: "/service/carpet",
			image: "service_image_kitchen_cabinets",
			price: "Price starts at $1,500",
		},
		{
			heading: "LVT Flooring",
			paragraph:
				"Select our LVT flooring for a cost-effective solution that doesn’t compromise on style. Ideal for areas that require durability and moisture resistance.",
			url: "/service/lvt-flooring",
			image: "service_image_kitchen_cabinets",
			price: "Price starts at $3,000",
		},
	],
	decking: [
		{
			heading: "Backyard Deck Installation",
			paragraph:
				"Renew your backyard with our year-round deck installation service. Permits, plans, and a lasting warranty are included.",
			url: "/backyard-deck-installation",
			image: "service_image_kitchen_cabinets",
			price: "Price starts at $5,000",
		},
		{
			heading: "Trex Deck",
			paragraph:
				"Discover Trex Decking with our installation: Eco-friendly, low-maintenance, & durable in all conditions, with a wide range of colors.",
			url: "/service/trex-decking",
			image: "service_image_kitchen_cabinets",
			price: "Price starts at $7,000",
		},
		{
			heading: "Composite Deck",
			paragraph:
				"Transform your outdoor space with our low-maintenance, durable composite deck: free consultations & year-round installs.",
			url: "/service/composite-deck",
			image: "service_image_kitchen_cabinets",
			price: "Price starts at $6,500",
		},
		{
			heading: "Custom Deck",
			paragraph:
				"We provide custom deck installation services for your backyard along with free renderings and expert architectural designs for durability.",
			url: "/service/custom-deck",
			image: "service_image_kitchen_cabinets",
			price: "Price starts at $8,000",
		},
		{
			heading: "Pool Deck Construction",
			paragraph:
				"Transform your pool with our deck construction service - warranty, expert consultation, renderings, and safety all in one package.",
			url: "/service/pool-deck-construction",
			image: "service_image_kitchen_cabinets",
			price: "Price starts at $10,000",
		},
		{
			heading: "Rooftop Deck Building",
			paragraph:
				"Our designers will assist you in creating rooftop deck ideas to ensure our rooftop deck installation matches your vision.",
			url: "/service/rooftop-deck-building",
			image: "service_image_kitchen_cabinets",
			price: "Price starts at $12,000",
		},
		{
			heading: "Deck Repair",
			paragraph:
				"Repair your deck, pool deck, and rooftop deck with our top-notch deck repair service—fast, flexible, and supported by a solid warranty.",
			url: "/service/deck-repair",
			image: "service_image_kitchen_cabinets",
			price: "Price starts at $2,500",
		},
		{
			heading: "Deck Restoration",
			paragraph:
				"Revitalize your deck with our deck restoration service! Expert attention to detail & free consultation for a stunning result.",
			url: "/service/deck-restoration",
			image: "service_image_kitchen_cabinets",
			price: "Price starts at $4,000",
		},
		{
			heading: "Deck Railing Installation",
			paragraph:
				"Deck railing installation: Various deck railing options are available, including cable railings, where style meets safety.",
			url: "/service/deck-railing",
			image: "service_image_kitchen_cabinets",
			price: "Price starts at $1,800",
		},
		{
			heading: "Building Deck Stairs and Steps",
			paragraph:
				"Installation of deck stairs and deck steps is available for any deck, customizing unique stairs and steps is an option with our designers.",
			url: "/service/building-deck-stairs-and-steps",
			image: "service_image_kitchen_cabinets",
			price: "Price starts at $3,000",
		},
		{
			heading: "Deck Replacement",
			paragraph:
				"Take advantage of our deck replacement service to upgrade your old deck with a stylish, modern replacement with the help of our designer.",
			url: "/service/deck-replacement",
			image: "service_image_kitchen_cabinets",
			price: "Price starts at $7,000",
		},
		{
			heading: "Timber Decking",
			paragraph:
				"With our custom timber decking installation service, we can give your backyard a more natural look that will last for years with our warranty.",
			url: "/service/timber-decking",
			image: "service_image_kitchen_cabinets",
			price: "Price starts at $5,500",
		},
	],
	windows: [
		{
			heading: "Window Installation",
			paragraph:
				"Making windows for homes, be it prefab or custom, we can install them within hours. Windows of all dimensions and thicknesses available.",
			url: "/window-installation",
			image: "service_image_kitchen_cabinets",
			price: "Price starts at $3,000",
		},
		{
			heading: "Window Replacement",
			paragraph:
				"We can replace your windows within hours for emergency home window replacement, ensuring your security and safety.",
			url: "/service/window-replacement",
			image: "service_image_kitchen_cabinets",
			price: "Price starts at $2,500",
		},
		{
			heading: "Egress Window",
			paragraph:
				"Egress window installation is essential for code compliance. Our basement egress windows come with egress window covers for protection.",
			url: "/service/egress-window",
			image: "service_image_kitchen_cabinets",
			price: "Price starts at $2,200",
		},
		{
			heading: "Energy-Efficient Windows",
			paragraph:
				"We offer top-rated energy-efficient windows for installation, saving you money on electricity bills without sacrificing the aesthetic.",
			url: "/service/energy-efficient-windows",
			image: "service_image_kitchen_cabinets",
			price: "Price starts at $3,500",
		},
		{
			heading: "Skylight Installation",
			paragraph:
				"Skylight windows maximize natural light and improve air circulation in every room, installation on any roof.",
			url: "/service/skylight-installation",
			image: "service_image_kitchen_cabinets",
			price: "Price starts at $2,800",
		},
		{
			heading: "Commercial Windows",
			paragraph:
				"Commercial windows for business projects, fully covered and insured from purchase to installation. Don't wait for the unexpected.",
			url: "/service/commercial-windows",
			image: "service_image_kitchen_cabinets",
			price: "Price starts at $4,000",
		},
	],
	doors: [
		{
			heading: "Door Installation",
			paragraph:
				"Install any type of doors, interior and exterior doors. Take advantage of our discounts for multiple door installations in your home.",
			url: "/door-installation",
			image: "service_image_kitchen_cabinets",
			price: "Price starts at $1,800",
		},
		{
			heading: "Exterior Doors",
			paragraph:
				"We specialize in the installation of exterior doors, wooden doors, and French doors. Our options include front doors, backyard doors, patio doors, and doors for sheds.",
			url: "/service/exterior-doors",
			image: "service_image_kitchen_cabinets",
			price: "Price starts at $2,500",
		},
		{
			heading: "Garage Doors",
			paragraph:
				"Garage door installation with automatic door opener conveniently, purchase with us to get a discount on garage door installation.",
			url: "/service/garage-doors",
			image: "service_image_kitchen_cabinets",
			price: "Price starts at $3,000",
		},
		{
			heading: "Sliding Doors",
			paragraph:
				"Sliding door installation service for pre-existing or new sliding doors. Add new closet sliding doors or glass sliding doors for patios.",
			url: "/service/sliding-doors",
			image: "service_image_kitchen_cabinets",
			price: "Price starts at $2,000",
		},
		{
			heading: "Door Repair",
			paragraph:
				"Door repair service for exterior and interior doors, any door in your house can be fixed: garage door, patio doors, closet doors.",
			url: "/service/door-repair",
			image: "service_image_kitchen_cabinets",
			price: "Price starts at $800",
		},
		{
			heading: "Door Replacement",
			paragraph:
				"Door replacement service: we replace old doors with new ones and offer free disposal and delivery.",
			url: "/service/door-replacement",
			image: "service_image_kitchen_cabinets",
			price: "Price starts at $1,800",
		},
		{
			heading: "Entry Door",
			paragraph:
				"Install entry doors of any style and dimensions, and add a safety door for your entry door.",
			url: "/service/entry-door",
			image: "service_image_kitchen_cabinets",
			price: "Price starts at $2,000",
		},
	],
	architecture: [
		{
			heading: "Architectural Service",
			paragraph:
				"Architectural services for city and project compliances with no delay, complete overview for any project, with all required documentation.",
			url: "/architectural-service",
			image: "service_image_kitchen_cabinets",
			price: "Price starts at $3,500",
		},
		{
			heading: "Home Design",
			paragraph:
				"Customize your ideal home with our experienced designers, who will assist you in creating the perfect design for your home.",
			url: "/service/home-design",
			image: "service_image_kitchen_cabinets",
			price: "Price starts at $5,000",
		},
		{
			heading: "Structural Engineering",
			paragraph:
				"Ensure safety and stability with our precise structural engineering for all projects that require structural changes and permits.",
			url: "/service/structural-engineering",
			image: "service_image_kitchen_cabinets",
			price: "Price starts at $4,500",
		},
		{
			heading: "Civil Engineering",
			paragraph:
				"Change landscapes with our innovative civil engineering solutions, innovative tools, and methods used in every project.",
			url: "/service/civil-engineering",
			image: "service_image_kitchen_cabinets",
			price: "Price starts at $5,000",
		},
		{
			heading: "Interior Design",
			paragraph:
				"Interior design service offered by our exceptional in-house designer, who will create elegant and functional interior designs for your home.",
			url: "/service/interior-design",
			image: "service_image_kitchen_cabinets",
			price: "Price starts at $3,500",
		},
		{
			heading: "Landscape Architect",
			paragraph:
				"Craft beautiful and functional outdoor spaces with the help of our expert outdoor architect, who has a keen eye for yards and gardens.",
			url: "/service/landscape-design",
			image: "service_image_kitchen_cabinets",
			price: "Price starts at $4,000",
		},
		{
			heading: "3-D Rendering",
			paragraph:
				"Complimentary 3D renderings for better project visualization with any extensive change in your home through designer consultation.",
			url: "/service/3d-rendering",
			image: "service_image_kitchen_cabinets",
			price: "Price starts at $2,500",
		},
		{
			heading: "Seismic Retrofitting",
			paragraph:
				"Ensure the safety and stability of your building with our seismic retrofitting service, where we take every precaution for resilience.",
			url: "/service/seismic-retrofitting",
			image: "service_image_kitchen_cabinets",
			price: "Price starts at $6,000",
		},
		{
			heading: "Foundation Repair",
			paragraph:
				"Immediate remediation of problematic foundations, stabilizing and restoring your building's integrity with our foundation repair service.",
			url: "/service/foundation-repair",
			image: "service_image_kitchen_cabinets",
			price: "Price starts at $5,000",
		},
		{
			heading: "GeoTech Engineering",
			paragraph:
				"Mitigate construction risks and optimize projects with our geotechnical services, ensuring your project's success from the start.",
			url: "/service/geotech-engineering",
			image: "service_image_kitchen_cabinets",
			price: "Price starts at $4,500",
		},
	],
	plumbing: [
		{
			heading: "Plumbing",
			paragraph:
				"Resolve any plumbing issue with our licensed plumbing service for bathrooms, kitchens, and all plumbing work.",
			url: "/plumbing-service",
			image: "service_image_kitchen_cabinets",
			price: "Price starts at $800",
		},
		{
			heading: "Kitchen Plumbing",
			paragraph:
				"Your kitchen stays dry with our kitchen plumbing service. We provide licensed plumbers to install appliances, sinks, faucets, and pipes.",
			url: "/service/kitchen-plumbing",
			image: "service_image_kitchen_cabinets",
			price: "Price starts at $1,200",
		},
		{
			heading: "Bathroom Plumbing",
			paragraph:
				"Ensure your bathroom plumbing functions perfectly, with no leaks or cracks in old pipes, new pipe installation, and layout changes.",
			url: "/service/bathroom-plumbing",
			image: "service_image_kitchen_cabinets",
			price: "Price starts at $1,500",
		},
		{
			heading: "Jacuzzi Installation",
			paragraph:
				"Professional installation of jacuzzis. Our plumbers will have you soaking in a jacuzzi in no time, getting the job done right and fast.",
			url: "/service/jacuzzi-installation",
			image: "service_image_kitchen_cabinets",
			price: "Price starts at $2,500",
		},
		{
			heading: "Toilet Installation",
			paragraph:
				"Professional installation of toilets is fast and easy. Purchase with us for free delivery and disposal of your old toilet.",
			url: "/service/toilet-installation",
			image: "service_image_kitchen_cabinets",
			price: "Price starts at $800",
		},
		{
			heading: "Home Repiping",
			paragraph:
				"Upgrade your plumbing system with repiping services to ensure that all your pipes are up to code and reliable.",
			url: "/service/home-repiping",
			image: "service_image_kitchen_cabinets",
			price: "Price starts at $3,000",
		},
		{
			heading: "Drain Cleaning",
			paragraph:
				"Clean drains and clear clogged drains in hours. We will consult with you to prevent the build-up of problems related to clogged drains.",
			url: "/service/drain-cleaning",
			image: "service_image_kitchen_cabinets",
			price: "Price starts at $500",
		},
		{
			heading: "Gas Line Installation",
			paragraph:
				"Professional installation of gas lines is performed by our certified plumbers, ensuring safety and compliance with permits and regulations.",
			url: "/service/gas-line-installation",
			image: "service_image_kitchen_cabinets",
			price: "Price starts at $1,500",
		},
		{
			heading: "Sewer Line Repair",
			paragraph:
				"Expert sewer line repair services for damaged lines available same day, with emergency response provided immediately for sewer line repair.",
			url: "/service/sewer-line-repair",
			image: "service_image_kitchen_cabinets",
			price: "Price starts at $2,500",
		},
	],
	kitchen: [
		{
			heading: "Kitchen Remodel",
			paragraph:
				"Kitchen remodeling services: design and render your dream kitchen, order all materials, and provide delivery to build your perfect space.",
			url: "/kitchen-remodel",
			image: "service_image_kitchen_addition",
			price: "Price starts at $10,000",
		},
		{
			heading: "Kitchen Design",
			paragraph:
				"Create your dream kitchen with our professional designer, who will guide you step by step through the entire process with consultations.",
			url: "/service/kitchen-design",
			image: "service_image_kitchen_addition",
			price: "Price starts at $5,000",
		},
		{
			heading: "Kitchen Tile",
			paragraph:
				"Upgrade your kitchen with elegant kitchen tile installation to complement your ideal cooking space.",
			url: "/service/kitchen-tile",
			image: "service_image_kitchen_addition",
			price: "Price starts at $2,500",
		},
		{
			heading: "Kitchen Layout",
			paragraph:
				"Optimize your kitchen space with our expert layout planning. We will ensure that it fits all your needs with comfort.",
			url: "/service/kitchen-layout",
			image: "service_image_kitchen_addition",
			price: "Price starts at $5,000",
		},
		{
			heading: "Kitchen Cabinets",
			paragraph:
				"Upgrade your kitchen storage with custom cabinet solutions or have us install prefabricated cabinets, installed within days.",
			url: "/service/kitchen-cabinets",
			image: "service_image_kitchen_addition",
			price: "Price starts at $4,000",
		},
		{
			heading: "Kitchen Countertops",
			paragraph:
				"Level up your kitchen's aesthetics with our customizable countertops, available for purchase and professional installation.",
			url: "/service/kitchen-countertops",
			image: "service_image_kitchen_addition",
			price: "Price starts at $3,500",
		},
		{
			heading: "Kitchen Flooring",
			paragraph:
				"Upgrade your kitchen flooring for durability and style. Tile or hardwood, we've got you covered with free delivery and discounts.",
			url: "/service/kitchen-flooring",
			image: "service_image_kitchen_addition",
			price: "Price starts at $4,000",
		},
		{
			heading: "Kitchen Appliances",
			paragraph:
				"Kitchen appliance installation service: save on delivery costs, free disposal of old appliances, new appliances installed in hours.",
			url: "/service/kitchen-appliances",
			image: "service_image_kitchen_addition",
			price: "Price starts at $1,500",
		},
		{
			heading: "Kitchen Lighting",
			paragraph:
				"Illuminate your kitchen with stylish and functional lighting. New kitchen lighting will make your kitchen countertops stand out.",
			url: "/service/kitchen-lighting",
			image: "service_image_kitchen_addition",
			price: "Price starts at $2,000",
		},
		{
			heading: "Patio Kitchen",
			paragraph:
				"Create an outdoor kitchen oasis with our patio kitchen installation service.",
			url: "/service/patio-kitchen",
			image: "service_image_kitchen_addition",
			price: "Price starts at $5,000",
		},
		{
			heading: "Kitchen Plumbing",
			paragraph:
				"Ensure your kitchen's plumbing works flawlessly with our services. Our plumbers will safely install all your kitchen appliances.",
			url: "/service/kitchen-plumbing",
			image: "service_image_kitchen_addition",
			price: "Price starts at $1,800",
		},
	],
	bathroom: [
		{
			heading: "Bathroom Remodel",
			paragraph:
				"Remodel your bathroom with experts, change your layout, or do a completely new addition; we have the system down for the best results.",
			url: "/bathroom-remodel",
			image: "service_image_kitchen_addition",
			price: "Price starts at $8,000",
		},
		{
			heading: "Bathroom Layout",
			paragraph:
				"Optimize your bathroom space; don't lose square footage. A change in layout can add more usable square footage to your bathroom.",
			url: "/service/bathroom-layout",
			image: "service_image_kitchen_addition",
			price: "Price starts at $4,000",
		},
		{
			heading: "Bathroom Design",
			paragraph:
				"Create a stylish and functional bathroom design with our designers, who will customize it to fit your needs and unique style.",
			url: "/service/bathroom-design",
			image: "service_image_kitchen_addition",
			price: "Price starts at $5,000",
		},
		{
			heading: "Bathroom Cabinetry",
			paragraph:
				"Bathroom cabinet installation provides stylish and reliable storage, with cabinets designed for humid environments.",
			url: "/service/bathroom-cabinetry",
			image: "service_image_kitchen_addition",
			price: "Price starts at $2,500",
		},
		{
			heading: "Heated Bathroom Floor",
			paragraph:
				"Experience the ultimate comfort of a heated bathroom floor with installation by licensed electricians.",
			url: "/service/heated-bathroom-floor",
			image: "service_image_kitchen_addition",
			price: "Price starts at $3,500",
		},
		{
			heading: "Bathroom Expansion",
			paragraph:
				"Expand your bathroom space to enhance comfort and functionality by adding a walk-in shower or tub, or a modern combination of both.",
			url: "/service/bathroom-expansion",
			image: "service_image_kitchen_addition",
			price: "Price starts at $7,000",
		},
		{
			heading: "Bathroom Shower",
			paragraph:
				"Upgrade your bathroom with a new shower installation. We provide both prefab and custom shower installations.",
			url: "/service/bathroom-shower",
			image: "service_image_kitchen_addition",
			price: "Price starts at $3,500",
		},
		{
			heading: "Bathroom Fixtures",
			paragraph:
				"Order and receive new bathroom fixtures hassle-free. Enjoy fast and seamless bathroom fixture installation service with free delivery.",
			url: "/service/bathroom-fixtures",
			image: "service_image_kitchen_addition",
			price: "Price starts at $1,500",
		},
		{
			heading: "Bathroom Plumbing",
			paragraph:
				"Ensure your bathroom plumbing works perfectly with our bathroom plumbing services; warranty is provided for all plumbing work.",
			url: "/service/bathroom-plumbing",
			image: "service_image_kitchen_addition",
			price: "Price starts at $2,000",
		},
		{
			heading: "Bathroom Tile",
			paragraph:
				"Bathroom tile installation offers the opportunity to refresh your bathroom without major changes, keeping it simple and elegant.",
			url: "/service/bathroom-tile",
			image: "service_image_kitchen_addition",
			price: "Price starts at $2,500",
		},
	],
	roofing: [
		{
			heading: "Roofing",
			paragraph:
				"Have your roof installed responsibly with our year-round roofing installation service, backed by our warranty.",
			url: "/roofing",
			image: "service_image_kitchen_addition",
			price: "Price starts at $8,000",
		},
		{
			heading: "Roof Repair",
			paragraph:
				"Resolve roofing issues promptly with our roof repair services.",
			url: "/service/roof-repair",
			image: "service_image_kitchen_addition",
			price: "Price starts at $2,500",
		},
		{
			heading: "Metal Roofing",
			paragraph:
				"Upgrade to durable and fire-resistant metal roofing for long-lasting protection.",
			url: "/service/metal-roofing",
			image: "service_image_kitchen_addition",
			price: "Price starts at $10,000",
		},
		{
			heading: "Roof Replacement",
			paragraph:
				"Install a new roof to better your home's exterior and prevent future issues. Our roof replacement service includes free disposal.",
			url: "/service/roof-replacement",
			image: "service_image_kitchen_addition",
			price: "Price starts at $8,000",
		},
		{
			heading: "Commercial Roofing",
			paragraph:
				"Protect your commercial property with our reliable commercial roofing installation service, with warranty coverage included.",
			url: "/service/commercial-roofing",
			image: "service_image_kitchen_addition",
			price: "Price starts at $15,000",
		},
		{
			heading: "Flat Roofing",
			paragraph:
				"Install a flat roof for modern and minimalist aesthetics. Flat roofing services for commercial and residential properties.",
			url: "/service/flat-roofing",
			image: "service_image_kitchen_addition",
			price: "Price starts at $12,000",
		},
		{
			heading: "Skylights",
			paragraph:
				"Bring natural light into your home with our skylight installations, which are great for reducing your energy costs.",
			url: "/service/skylights",
			image: "service_image_kitchen_addition",
			price: "Price starts at $3,000",
		},
		{
			heading: "Shingles Roof",
			paragraph:
				"Upgrade to traditional shingles for a classic look and reliable protection, shingle roofing has various options for your home's roof.",
			url: "/service/shingles-roof",
			image: "service_image_kitchen_addition",
			price: "Price starts at $6,000",
		},
		{
			heading: "Asphalt Roofing",
			paragraph:
				"Consider installing long-lasting and cost-effective asphalt roofing for your home.",
			url: "/service/asphalt-roofing",
			image: "service_image_kitchen_addition",
			price: "Price starts at $5,000",
		},
		{
			heading: "Gutter Repair",
			paragraph:
				"Ensure proper drainage with our professional gutter repair services.",
			url: "/service/gutter-repair",
			image: "service_image_kitchen_addition",
			price: "Price starts at $1,200",
		},
		{
			heading: "Gutter Cleaning",
			paragraph:
				"Ensure your gutters remain clear and fully functional with our professional gutter cleaning services.",
			url: "/service/gutter-cleaning",
			image: "service_image_kitchen_addition",
			price: "Price starts at $600",
		},
	],
	siding: [
		{
			heading: "Siding",
			paragraph:
				"Enhance your home's exterior with durable siding solutions.",
			url: "/siding",
			image: "service_image_kitchen_addition",
			price: "Price starts at $7,000",
		},
		{
			heading: "Siding Repair",
			paragraph:
				"Restore the beauty and integrity of your siding with our repair services.",
			url: "/service/siding-repair",
			image: "service_image_kitchen_addition",
			price: "Price starts at $3,000",
		},
		{
			heading: "Vinyl Siding",
			paragraph:
				"Upgrade to low-maintenance and versatile vinyl siding for your home.",
			url: "/service/vinyl-siding",
			image: "service_image_kitchen_addition",
			price: "Price starts at $6,000",
		},
		{
			heading: "Hardie Siding",
			paragraph:
				"Opt for durable and weather-resistant Hardie siding for long-lasting protection.",
			url: "/service/hardie-siding",
			image: "service_image_kitchen_addition",
			price: "Price starts at $8,000",
		},
		{
			heading: "Cedar Siding",
			paragraph:
				"Enhance your home's natural charm with beautiful cedar siding.",
			url: "/service/cedar-siding",
			image: "service_image_kitchen_addition",
			price: "Price starts at $10,000",
		},
		{
			heading: "Aluminum Siding",
			paragraph:
				"Choose lightweight and durable aluminum siding for your home's exterior.",
			url: "/service/aluminum-siding",
			image: "service_image_kitchen_addition",
			price: "Price starts at $9,000",
		},
		{
			heading: "Stone Veneer",
			paragraph:
				"Add elegance and texture to your home with stylish stone veneer siding.",
			url: "/service/stone-veneer",
			image: "service_image_kitchen_addition",
			price: "Price starts at $11,000",
		},
		{
			heading: "Composite Siding",
			paragraph:
				"Opt for eco-friendly and durable composite siding for your home.",
			url: "/service/composite-siding",
			image: "service_image_kitchen_addition",
			price: "Price starts at $8,500",
		},
	],
	excavation: [
		{
			heading: "Excavation Service",
			paragraph: "P",
			url: "/excavation-contractors",
			image: "service_image_kitchen_addition",
			price: "Price starts at $4,000",
		},
		{
			heading: "Site Preparation",
			paragraph:
				"Professional excavation services for site preparation, land clearing, grading, and earthwork.",
			url: "/service/site-preparation",
			image: "service_image_kitchen_addition",
			price: "Price starts at $7,000",
		},
		{
			heading: "Earthworks",
			paragraph:
				"Shape and mold the land to suit your construction needs with earthworks.",
			url: "/service/earthworks",
			image: "service_image_kitchen_addition",
			price: "Price starts at $10,000",
		},
		{
			heading: "Grading",
			paragraph:
				"Achieve a level and stable surface for construction with our grading services.",
			url: "/service/grading",
			image: "service_image_kitchen_addition",
			price: "Price starts at $6,000",
		},
		{
			heading: "Land Clearing",
			paragraph:
				"Clear your land of obstacles and vegetation to prepare for construction.",
			url: "/service/land-clearing",
			image: "service_image_kitchen_addition",
			price: "Price starts at $5,000",
		},
		{
			heading: "Dirt Removal",
			paragraph:
				"Efficiently remove excess dirt and debris from your construction site.",
			url: "/service/dirt-removal",
			image: "service_image_kitchen_addition",
			price: "Price starts at $4,000",
		},
	],
	basement: [
		{
			heading: "Basement Finishing",
			paragraph:
				"Transform your basement into functional living space with our finishing services.",
			url: "/basement-finishing",
			image: "service_image_kitchen_addition",
			price: "Price starts at $10,000",
		},
		{
			heading: "Basement Flooring",
			paragraph:
				"Choose from a variety of flooring options to enhance your basement's comfort and style.",
			url: "/service/basement-flooring",
			image: "service_image_kitchen_addition",
			price: "Price starts at $5,000",
		},
		{
			heading: "Basement Remodel",
			paragraph:
				"Revamp your basement for improved functionality and aesthetics with our remodeling services.",
			url: "/service/basement-remodel",
			image: "service_image_kitchen_addition",
			price: "Price starts at $12,000",
		},
		{
			heading: "Basement Entertainment Center",
			paragraph:
				"Create the ultimate entertainment space in your basement with our customized solutions.",
			url: "/service/basement-entertainment-center",
			image: "service_image_kitchen_addition",
			price: "Price starts at $8,000",
		},
		{
			heading: "Basement Bathroom",
			paragraph:
				"Add convenience and value to your basement with a professionally installed bathroom.",
			url: "/service/basement-bathroom",
			image: "service_image_kitchen_addition",
			price: "Price starts at $6,000",
		},
		{
			heading: "Basement Waterproofing",
			paragraph:
				"Protect your basement from moisture and water damage with our waterproofing solutions.",
			url: "/service/basement-waterproofing",
			image: "service_image_kitchen_addition",
			price: "Price starts at $5,500",
		},
		{
			heading: "Basement Insulation",
			paragraph:
				"Ensure year-round comfort and energy efficiency in your basement with proper insulation.",
			url: "/service/basement-insulation",
			image: "service_image_kitchen_addition",
			price: "Price starts at $4,500",
		},
		{
			heading: "Basement Bar",
			paragraph:
				"Create a stylish and functional bar space in your basement for entertaining guests.",
			url: "/service/basement-bar",
			image: "service_image_kitchen_addition",
			price: "Price starts at $7,000",
		},
		{
			heading: "Basement Windows",
			paragraph:
				"Brighten up your basement and improve ventilation with new windows.",
			url: "/service/basement-windows",
			image: "service_image_kitchen_addition",
			price: "Price starts at $3,500",
		},
	],
	attic: [
		{
			heading: "Attic Finishing",
			paragraph:
				"Transform your attic into usable living space with our finishing services.",
			url: "/attic-finishing",
			image: "service_image_kitchen_addition",
			price: "Price starts at $10,000",
		},
		{
			heading: "Attic Ladder",
			paragraph:
				"Gain easy access to your attic with a professionally installed attic ladder.",
			url: "/service/attic-ladder",
			image: "service_image_kitchen_addition",
			price: "Price starts at $1,500",
		},
		{
			heading: "Attic Insulation",
			paragraph:
				"Ensure energy efficiency and comfort in your home with proper attic insulation.",
			url: "/service/attic-insulation",
			image: "service_image_kitchen_addition",
			price: "Price starts at $3,500",
		},
		{
			heading: "Attic Drywall",
			paragraph:
				"Finish your attic walls with durable and attractive drywall.",
			url: "/service/attic-drywall",
			image: "service_image_kitchen_addition",
			price: "Price starts at $4,000",
		},
		{
			heading: "Attic Windows and Skylights",
			paragraph:
				"Brighten up your attic space and improve ventilation with new windows and skylights.",
			url: "/service/attic-windows-and-skylights",
			image: "service_image_kitchen_addition",
			price: "Price starts at $2,800",
		},
		{
			heading: "Attic Storage Solutions",
			paragraph:
				"Maximize your attic space with customized storage solutions.",
			url: "/service/attic-storage-solutions",
			image: "service_image_kitchen_addition",
			price: "Price starts at $3,000",
		},
		{
			heading: "Attic Ventilation",
			paragraph:
				"Ensure proper airflow and ventilation in your attic for improved comfort and energy efficiency.",
			url: "/service/attic-ventilation",
			image: "service_image_kitchen_addition",
			price: "Price starts at $2,500",
		},
		{
			heading: "Attic Lighting",
			paragraph:
				"Illuminate your attic space with effective and energy-efficient lighting solutions.",
			url: "/service/attic-lighting",
			image: "service_image_kitchen_addition",
			price: "Price starts at $1,800",
		},
		{
			heading: "Attic Heating and Cooling",
			paragraph:
				"Ensure year-round comfort in your attic with effective heating and cooling solutions.",
			url: "/service/attic-heating-and-cooling",
			image: "service_image_kitchen_addition",
			price: "Price starts at $4,000",
		},
		{
			heading: "Attic Bathroom Addition",
			paragraph:
				"Add convenience and value to your home with a professionally installed attic bathroom.",
			url: "/service/attic-bathroom-addition",
			image: "service_image_kitchen_addition",
			price: "Price starts at $7,000",
		},
	],
	landscaping: [
		{
			heading: "Landscaping",
			paragraph:
				"We provide landscape services to cater all your backyard and front yard needs.",
			url: "/landscaping",
			image: "service_image_kitchen_addition",
			price: "Price starts at $5,000",
		},
		{
			heading: "Landscape Design",
			paragraph:
				"Transform your outdoor space with customized landscape design solutions.",
			url: "/service/landscape-design",
			image: "service_image_kitchen_addition",
			price: "Price starts at $3,500",
		},
		{
			heading: "Grading",
			paragraph:
				"Achieve a level and stable surface for your landscape with our grading services.",
			url: "/service/grading",
			image: "service_image_kitchen_addition",
			price: "Price starts at $6,000",
		},
		{
			heading: "Planting",
			paragraph:
				"Enhance the beauty of your landscape with expert planting services.",
			url: "/service/planting",
			image: "service_image_kitchen_addition",
			price: "Price starts at $2,500",
		},
		{
			heading: "Tree Removal",
			paragraph:
				"Remove unwanted or hazardous trees from your landscape safely and efficiently.",
			url: "/service/tree-removal",
			image: "service_image_kitchen_addition",
			price: "Price starts at $3,000",
		},
		{
			heading: "Patio Installation",
			paragraph:
				"Create an inviting outdoor living space with our professional patio installation services.",
			url: "/service/patio-installation",
			image: "service_image_kitchen_addition",
			price: "Price starts at $5,500",
		},
		{
			heading: "Sod Installation",
			paragraph:
				"Achieve a lush and healthy lawn quickly with our sod installation services.",
			url: "/service/sod-installation",
			image: "service_image_kitchen_addition",
			price: "Price starts at $3,500",
		},
		{
			heading: "Fence Installation",
			paragraph:
				"Enhance privacy and security in your outdoor space with our fence installation services.",
			url: "/service/fence-installation",
			image: "service_image_kitchen_addition",
			price: "Price starts at $4,000",
		},
		{
			heading: "Retaining Walls",
			paragraph:
				"Add functionality and visual appeal to your landscape with professionally built retaining walls.",
			url: "/service/retaining-walls",
			image: "service_image_kitchen_addition",
			price: "Price starts at $6,500",
		},
		{
			heading: "Fountain",
			paragraph:
				"Add elegance and tranquility to your landscape with a beautiful fountain feature.",
			url: "/service/fountain",
			image: "service_image_kitchen_addition",
			price: "Price starts at $7,000",
		},
		{
			heading: "Fire Pits",
			paragraph:
				"Create a cozy gathering spot in your outdoor space with a custom fire pit.",
			url: "/service/fire-pits",
			image: "service_image_kitchen_addition",
			price: "Price starts at $4,000",
		},
		{
			heading: "Path Installation",
			paragraph:
				"Enhance accessibility and aesthetics in your landscape with professionally installed paths.",
			url: "/service/path-installation",
			image: "service_image_kitchen_addition",
			price: "Price starts at $2,800",
		},
		{
			heading: "Irrigation Installation",
			paragraph:
				"Ensure your landscape stays lush and healthy with a professionally installed irrigation system.",
			url: "/service/irrigation-installation",
			image: "service_image_kitchen_addition",
			price: "Price starts at $3,500",
		},
		{
			heading: "Power Washing",
			paragraph:
				"Restore the beauty of your outdoor surfaces with our power washing services.",
			url: "/service/power-washing",
			image: "service_image_kitchen_addition",
			price: "Price starts at $800",
		},
		{
			heading: "Weed Control",
			paragraph:
				"Keep your landscape pristine and weed-free with our effective weed control solutions.",
			url: "/service/weed-control",
			image: "service_image_kitchen_addition",
			price: "Price starts at $500",
		},
		{
			heading: "Landscape Lighting",
			paragraph:
				"Highlight the beauty of your landscape and enhance safety with professionally installed lighting.",
			url: "/service/landscape-lighting",
			image: "service_image_kitchen_addition",
			price: "Price starts at $1,800",
		},
	],
	painting: [
		{
			heading: "Painting",
			paragraph:
				"Refresh and revitalize your indoor space with our professional interior painting services.",
			url: "/painting",
			image: "service_image_kitchen_addition",
			price: "Price starts at $2,000",
		},
		{
			heading: "Interior Painting",
			paragraph:
				"Refresh and revitalize your indoor space with our professional interior painting services.",
			url: "/service/interior-painting",
			image: "service_image_kitchen_addition",
			price: "Price starts at $2,000",
		},
		{
			heading: "Exterior Painting",
			paragraph:
				"Protect and beautify your home's exterior with our expert exterior painting services.",
			url: "/service/exterior-painting",
			image: "service_image_kitchen_addition",
			price: "Price starts at $3,500",
		},
		{
			heading: "Cabinet Painting",
			paragraph:
				"Transform the look of your cabinets with our high-quality cabinet painting services.",
			url: "/service/cabinet-painting",
			image: "service_image_kitchen_addition",
			price: "Price starts at $1,800",
		},
		{
			heading: "Trim Painting",
			paragraph:
				"Enhance the visual appeal of your space with professionally painted trim.",
			url: "/service/trim-painting",
			image: "service_image_kitchen_addition",
			price: "Price starts at $1,500",
		},
		{
			heading: "Room Painting",
			paragraph:
				"Add personality and style to any room with our expert room painting services.",
			url: "/service/room-painting",
			image: "service_image_kitchen_addition",
			price: "Price starts at $2,000",
		},
		{
			heading: "Ceiling Painting",
			paragraph:
				"Brighten and refresh your space with professionally painted ceilings.",
			url: "/service/ceiling-painting",
			image: "service_image_kitchen_addition",
			price: "Price starts at $1,800",
		},
		{
			heading: "Deck Painting",
			paragraph:
				"Protect and enhance your deck with our professional deck painting services.",
			url: "/service/deck-painting",
			image: "service_image_kitchen_addition",
			price: "Price starts at $2,500",
		},
		{
			heading: "Siding Painting",
			paragraph:
				"Give your home's siding a fresh new look with our expert siding painting services.",
			url: "/service/siding-painting",
			image: "service_image_kitchen_addition",
			price: "Price starts at $3,000",
		},
		{
			heading: "Fence Painting",
			paragraph:
				"Revitalize your fence and enhance your outdoor space with our fence painting services.",
			url: "/service/fence-painting",
			image: "service_image_kitchen_addition",
			price: "Price starts at $2,000",
		},
		{
			heading: "Varnishing",
			paragraph:
				"Protect and enhance the natural beauty of wood surfaces with our varnishing services.",
			url: "/service/varnishing",
			image: "service_image_kitchen_addition",
			price: "Price starts at $2,500",
		},
		{
			heading: "Stucco",
			paragraph:
				"Restore and beautify your stucco surfaces with our professional stucco services.",
			url: "/service/stucco",
			image: "service_image_kitchen_addition",
			price: "Price starts at $3,500",
		},
	],
	masonry: [
		{
			heading: "Masonry Services",
			paragraph:
				"Expert masonry services, including brick laying, stone masonry, and more.",
			url: "/masonry-services",
			image: "service_image_kitchen_addition",
			price: "Price starts at $5,000",
		},
		{
			heading: "Brick Laying and Repair",
			paragraph:
				"Enhance your property with expert brick laying and repair services.",
			url: "/service/brick-laying-and-repair",
			image: "service_image_kitchen_addition",
			price: "Price starts at $5,000",
		},
		{
			heading: "Stone Masonry",
			paragraph:
				"Add timeless beauty to your property with our professional stone masonry services.",
			url: "/service/stone-masonry",
			image: "service_image_kitchen_addition",
			price: "Price starts at $6,000",
		},
		{
			heading: "Seismic Retrofitting",
			paragraph:
				"Ensure the safety and stability of your property with our seismic retrofitting services.",
			url: "/service/seismic-retrofitting",
			image: "service_image_kitchen_addition",
			price: "Price starts at $7,000",
		},
		{
			heading: "Chimney Masonry",
			paragraph:
				"Keep your chimney in top condition with our expert chimney masonry services.",
			url: "/service/chimney-masonry",
			image: "service_image_kitchen_addition",
			price: "Price starts at $4,500",
		},
		{
			heading: "Concrete Block",
			paragraph:
				"Build durable structures with our professional concrete block services.",
			url: "/service/concrete-block",
			image: "service_image_kitchen_addition",
			price: "Price starts at $3,500",
		},
		{
			heading: "Masonry Restoration",
			paragraph:
				"Restore the beauty and integrity of your masonry with our restoration services.",
			url: "/service/masonry-restoration",
			image: "service_image_kitchen_addition",
			price: "Price starts at $6,000",
		},
		{
			heading: "Stone Veneer",
			paragraph:
				"Enhance your property's appearance with stylish and durable stone veneer.",
			url: "/service/stone-veneer",
			image: "service_image_kitchen_addition",
			price: "Price starts at $8,000",
		},
		{
			heading: "Commercial Masonry",
			paragraph:
				"Trust our expertise for all your commercial masonry needs.",
			url: "/service/commercial-masonry",
			image: "service_image_kitchen_addition",
			price: "Price starts at $12,000",
		},
	],
};
