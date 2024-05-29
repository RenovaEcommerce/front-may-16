import React from "react";
import ReactMarkdown from "react-markdown"; // Make sure to import ReactMarkdown

type Props = {
	markdown: string;
}

export const MyMarkdown: React.FC<Props> = ({ markdown }) => {
	return (

			<ReactMarkdown className="markdown-b markdown">{markdown}</ReactMarkdown>

	)
}
