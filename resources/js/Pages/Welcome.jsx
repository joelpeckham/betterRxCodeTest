import ColorBlob from "@/Components/ColorBlob";
import SearchForm from "@/Components/SearchForm";
import ApplicationLogo from "@/Components/ApplicationLogo";
import { Link, Head } from "@inertiajs/react";

const background = (
    <div className="absolute right-0 top-0 -z-10 h-full w-full overflow-hidden opacity-40">
        <div
            className="absolute"
            style={{
                width: "50vw",
                height: "50vw",
                bottom: "-20vw",
                right: "-20vw",
            }}
        >
            <ColorBlob />
        </div>
        <div
            className="absolute"
            style={{
                width: "60vw",
                height: "60vw",
                bottom: "-40vw",
                left: "-40vw",
            }}
        >
            <ColorBlob />
        </div>
    </div>
);

const header = (
    <div className="mx-auto max-w-2xl lg:mx-0">
        <div className="mt-10 flex flex-row items-center">
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

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    return (
        <>
            <Head title="NPI Search" />
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                {header}
                <div className="my-4 w-full border-b-2 border-gray-300"></div>
                <SearchForm />
            </div>
            {background}
        </>
    );
}
