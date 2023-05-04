import ColorBlobsBG from "@/Components/ColorBlobsBG";
import SearchForm from "@/Components/SearchForm";
import Header from "@/Components/Header";
import { Head } from "@inertiajs/react";
import Results from "@/Components/Results";
import React, { useLayoutEffect, useState } from "react";

export default function Welcome({ searchData }) {
    // console.log(searchData);
    const [scrollPosition, setPosition] = useState(0);
    useLayoutEffect(() => {
        function updatePosition() {
            setPosition(window.pageYOffset);
        }
        window.addEventListener("scroll", updatePosition);
        updatePosition();
        return () => window.removeEventListener("scroll", updatePosition);
    }, []);
    return (
        <div className="relative w-full">
            <Head title="NPI Search" />
            <div className="mx-auto max-w-6xl px-6 lg:px-8">
                <section id="tippyTop">
                    <Header />
                </section>
                <div className="my-4 w-full border-b-2 border-gray-300"></div>

                <SearchForm />

                {searchData && <Results searchData={searchData} />}
            </div>
            <div className="h-12"></div>
            {/* Return to top */}

            <div className={`fixed bottom-0 right-0 mb-4 mr-4 transition-opacity ${scrollPosition > 300 ? "opacity-100" : "opacity-0"}`}>
                <a href="#tippyTop">
                    <button className="rounded-full bg-indigo-600 px-4 py-2 font-bold text-white hover:bg-indigo-500">
                        <svg
                            className="h-6 w-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M5 11l7-7 7 7M5 19l7-7 7 7"
                            ></path>
                        </svg>
                    </button>
                </a>
            </div>
            <ColorBlobsBG />
        </div>
    );
}
