import ColorBlob from "@/Components/ColorBlob";
import SearchForm from "@/Components/SearchForm";
import ApplicationLogo from "@/Components/ApplicationLogo";
import { Link, Head } from "@inertiajs/react";

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    return (
        <>
            <Head title="Welcome" />
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:mx-0">
                        <div className="mt-10 flex flex-row items-center">
                            <Link href="/">
                                <ApplicationLogo />
                            </Link>
                            {/* vertical Divider */}
                            <div className="border-l-2 border-gray-300 h-10 mx-4"></div>
                            <h1 className="text-2xl font-black tracking-tight text-gray-900 sm:text-4xl">
                                NPI RECORD SEARCH
                            </h1>
                        </div>
                        <p className="mt-2 text-lg leading-2 text-gray-600">
                            Find your healthcare provider in the National
                            Provider Identifier registry and verify their
                            information.
                        </p>
                    </div>
                    {/* horizontal divider */}
                    <div className="w-full border-b-2 border-gray-300 my-4"></div>
                    <SearchForm />
                </div>
        </>
    );
}
