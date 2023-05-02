import { Link, Head } from "@inertiajs/react";

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    return (
        <>
            <Head title="Welcome" />
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0">
                <h1 className="text-3xl font-black tracking-tight text-gray-900 sm:text-4xl">
                    NPI RECORD SEARCH
                </h1>
                <p className="mt-2 text-lg leading-8 text-gray-600">
                    Find your healthcare provider in the National Provider Identifier registry and verify their information.
                </p>
            </div>
            <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3"></div>
            </div>
        </>
    );
}
