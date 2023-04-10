import { ChevronLeftIcon } from "@heroicons/react/20/solid";
import { ReactNode } from "react";

type LayoutFun = (props: { children: ReactNode }) => JSX.Element;

const Layout: LayoutFun = ({ children }) => {
	return (
		<div className={"relative px-6 text-gray-800 lg:px-8"}>
			<div className="flex px-4 pb-10 pt-8 lg:px-8">
				<div className="group flex text-sm font-semibold leading-6 text-slate-700 hover:text-slate-900 dark:text-slate-200 dark:hover:text-white">
					<a
						className="group text-sm flex font-semibold leading-6 text-slate-700 hover:text-slate-900 dark:text-slate-200 dark:hover:text-white"
						href="/"
					>
						<ChevronLeftIcon className="h-6" />
						Go back
					</a>
				</div>
			</div>
			<main>
				<div className="prose prose-slate dark:prose-dark">{children}</div>
			</main>
		</div>
	);
};

export default Layout;
