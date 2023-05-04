import ApplicationLogo from "./ApplicationLogo";
import {Link} from "@inertiajs/react";

const Header = () => {
    return (
        <div className="mx-auto max-w-2xl md:mx-0">
        <div className="mt-10 flex flex-row items-center justify-start">
            <Link href="/">
                <ApplicationLogo />
            </Link>
            <div className="mx-4 h-10 border-l-2 border-gray-300"></div>
            <h1 className="text-2xl font-black tracking-tight text-gray-900 sm:text-4xl">
                NPI RECORD SEARCH
            </h1>
        </div>
        <p className="leading-2 mt-2 text-lg text-gray-600">
            Find your healthcare provider in the National Provider Identifier
            registry and verify their information.
        </p>
    </div>
    );
}
export default Header;
