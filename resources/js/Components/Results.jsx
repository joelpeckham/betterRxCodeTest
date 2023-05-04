// Results.jsx | Displays results of NPI search.
// Single large card split into two columns on larger screens.
// Left column displays basic information about the provider in a paginated list of providers.
// Right column displays detailed information about the selected provider.

import React, { useState, useRef, useEffect } from "react";
import ProviderListItem from "./ProviderListItem";
import ProviderDetail from "./ProviderDetail";
import Card from "./Card";
import Pagination from "./Pagination";
import autoAnimate from "@formkit/auto-animate";
import { router } from "@inertiajs/react";

export default function Results({
    searchResult,
    pageNumber,
    morePages,
}) {
    const parentRef = useRef(null);

    const [selected, setSelected] = useState(0);
    let providerList = searchResult[1]["results"];
    let request = searchResult[0];
    console.log(providerList);
    const detailFooter = (
        <div className="flex justify-center">
            <a
                href={`https://npiregistry.cms.hhs.gov/provider-view/${providerList[selected].number}`}
                target="_blank"
            >
                <button className="w-full text-center text-sm text-indigo-600 hover:text-indigo-500">
                    More on NPI Registry ↗
                </button>
            </a>
        </div>
    );

    const increasePageNumber = () => {
        if (morePages){
            request.page = pageNumber + 1;
            router.get('/', request, {preserveScroll: true, preserveState: true});
        }
    }
    const decreasePageNumber = () => {
        request.page = pageNumber - 1;
        if (request.page < 1) {
            request.page = 1;
        }
        router.get('/', request, {preserveScroll: true, preserveState: true});
    }

    const paginationFooter = (
        <div className="flex justify-center w-full">
            <Pagination
                page={request.page}
                isMorePages={morePages}
                increase={increasePageNumber}
                decrease={decreasePageNumber}
            />
        </div>
    );

    return (
        <>
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    <div className="col-span-1 lg:col-span-2">
                        <Card
                            title="Search Results"
                            subtitle="Select a provider to view details."
                            footer={paginationFooter}
                        >
                            <ul className="h-full divide-y divide-gray-200">
                                {providerList.map((provider, index) => {
                                    return (
                                        <ProviderListItem
                                            key={index}
                                            index={index}
                                            provider={provider}
                                            selected={selected}
                                            setSelected={setSelected}
                                        />
                                    );
                                })}
                            </ul>
                        </Card>
                    </div>
                    <div className="col-span-1">
                        <Card
                            title="Provider Details"
                            subtitle="Details about the selected provider."
                            footer={detailFooter}
                        >
                            <ProviderDetail provider={providerList[selected]} />
                        </Card>
                    </div>
                </div>
            </div>
        </>
    );
}
