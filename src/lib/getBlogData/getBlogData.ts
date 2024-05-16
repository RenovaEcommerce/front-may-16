export const getBlogData = async (search = ""): Promise<any> => {
	let res;

	if (search === "") {
		res = await fetch(`http://localhost:4100/blog/`);
	} else {
		res = await fetch(`http://localhost:4100/blog/${search}`);
	}

	if (!res.ok) {
		throw new Error("Failed to fetch data");
	}

	return res.json();
};
