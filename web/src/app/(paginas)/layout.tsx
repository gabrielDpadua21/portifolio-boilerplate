import ChatButton from "@/components/chat/ChatButton";
import React from "react";

export default function Layout(props: { children: React.ReactNode }) {
	return (
		<div>
			<div>{props.children}</div>
			<ChatButton />
		</div>
	);
}
