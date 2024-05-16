/* "use client";

import React, { useEffect } from "react";

const OneBuildWidget = () => {
	useEffect(() => {
		// Function to initialize the widget
		const initWidget = () => {
			if (window.onebuild) {
				window.onebuild.init({
					key: "1build_emb.LLLLswDB.T4PXedg9Yje76A3xIE5RPF9fSzniLsQw",
				});
			} else {
				console.error("1build widget script not loaded");
			}
		};

		// Load the widget script
		const script = document.createElement("script");
		script.src = "https://cdn.1build.com/widget.js";
		script.async = true;
		script.defer = true;
		script.onload = initWidget;
		document.body.appendChild(script);

		// Cleanup function to remove the script when the component unmounts
		return () => {
			document.body.removeChild(script);
		};
	});

	return (
		<button onClick={() => window.onebuild && window.onebuild.open()}>
			Open 1build Widget
		</button>
	);
};

export default OneBuildWidget;
 */
