export const getServicesData = async (params: any): Promise<any> => {
	const res = await fetch(
		`http://localhost:4100/services/${params.services}/`,
	);

	if (!res.ok) {
		throw new Error("Failed to fetch data");
	}

	return res.json();
};
