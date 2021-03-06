import Link from "next/link";

export default function Navbar() {
	return (
		<div className="w-screen mx-auto bg-background-default px-4 sm:px-6 lg:px-8">
			<div className="flex justify-between py-4">
			<Link href="/">
				<div className="cursor-pointer text-primary-default">Navigation Bar</div>
			</Link>
			<Link href="/theme">
				<div className="cursor-pointer text-primary-default">Settings</div>
			</Link>
			</div>
		</div>
	);
}
