export const getTotalPages = (category: string) => {
    switch (category) {
        case "carpets":
            return 31;
        case "hardwoods":
            return 6;
        case "vinyls":
            return 5;
        case "tiles":
            return 70;
        case "sinks":
            return 6;
        case "faucets":
            return 8;
        case "vanities":
            return 196;
        default:
            throw new Error("Invalid item type");
    }
}