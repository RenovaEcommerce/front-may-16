export const getServiceSubData= async (params: any): Promise<any> => {
	const res = await fetch(
		`http://localhost:4100/servicesub/${params.servicename}/`,
	);

	if (!res.ok) {
		throw new Error("Failed to fetch data");
	}

	return res.json();
};
