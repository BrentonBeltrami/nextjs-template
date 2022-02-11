import Foot from "./Footer";
import Navbar from "./NavigationBar";

export default function Layout({ children }) {
	return (
		<div className="">
			<div className="flex flex-col h-screen">
				<Navbar {...children} />
				<div className="flex-grow bg-background-default">{children}</div>
				<Foot />
			</div>
		</div>
	);
}

