import React from "react";
import ReactMarkdown from "react-markdown"; // Make sure to import ReactMarkdown

type Props = {
	markdown: string;
};

export const MyMarkdown: React.FC<Props> = ({ markdown }) => {
	return (
		<section className="relative z-10 container markdown component-mb ">
			<ReactMarkdown className="markdown">{markdown}</ReactMarkdown>
		</section>
	);
};
