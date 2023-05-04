import ColorBlobsBG from "@/Components/ColorBlobsBG";
import SearchForm from "@/Components/SearchForm";
import Header from "@/Components/Header";
import { Head } from "@inertiajs/react";
import Results from "@/Components/Results";

export default function Welcome({ searchData }) {
    console.log(searchData);
    return (
        <div className="relative w-full">
            <Head title="NPI Search" />
            <div className="mx-auto max-w-6xl px-6 lg:px-8">
                <Header />
                <div className="my-4 w-full border-b-2 border-gray-300"></div>
                <SearchForm />
                {searchData && <Results searchData={searchData} />}
            </div>
            <div className="h-12"></div>
            <ColorBlobsBG />
        </div>
    );
}
