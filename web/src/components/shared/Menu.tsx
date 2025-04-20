import Link from "next/link";

export default function Menu() {
	return (
		<nav className="flex gap-6">
			<MenuItem href="/" selected={true}>
				Home
			</MenuItem>
			<MenuItem href="/projeto/1" selected={false}>
				Projeto
			</MenuItem>
			<MenuItem href="/whatsapp" selected={false} newTab={true}>
				Contato
			</MenuItem>
		</nav>
	);
}

function MenuItem(props: {
	href: string;
	children: React.ReactNode;
	selected: boolean;
	newTab?: boolean;
}) {
	return (
		<Link href={props.href} target={props.newTab ? "_blank" : "_self"}>
			{props.children}
		</Link>
	);
}
