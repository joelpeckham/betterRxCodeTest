import React, { useState } from "react";
import Modal from "react-modal";
import ProviderListItem from "./ProviderListItem";
import ProviderDetail from "./ProviderDetail";
import Card from "./Card";
import Pagination from "./Pagination";
import { router } from "@inertiajs/react";

Modal.setAppElement("#app");

export default function Results({ searchResult, pageNumber, morePages }) {
    const [selected, setSelected] = useState(null);
    let providerList = searchResult["res"]["results"].slice(0, 51);
    let request = searchResult["req"];

    const increasePageNumber = () => {
        if (morePages) {
            request.page = pageNumber + 1;
            router.get("/", request, {
                preserveScroll: true,
                preserveState: true,
            });
        }
    };
    const decreasePageNumber = () => {
        request.page = pageNumber - 1;
        if (request.page < 1) {
            request.page = 1;
        }
        router.get("/", request, { preserveScroll: true, preserveState: true });
    };

    const paginationFooter = (
        <div className="flex w-full justify-center">
            <Pagination
                page={request.page}
                isMorePages={morePages}
                increase={increasePageNumber}
                decrease={decreasePageNumber}
            />
        </div>
    );

    const detailFooter = (
        <div className="flex justify-center">
            <a
                href={`https://npiregistry.cms.hhs.gov/provider-view/${
                    providerList[selected ?? 0].number
                }`}
                target="_blank"
            >
                <button className="w-full text-center text-sm text-indigo-600 hover:text-indigo-500">
                    More on NPI Registry ↗
                </button>
            </a>
        </div>
    );

    return (
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
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
            <Modal
                isOpen={selected !== null}
                onRequestClose={() => setSelected(null)}
                contentLabel="Provider Details"
            >
                <Card
                    title="Provider Details"
                    subtitle="Information from the NPI Registry."
                    footer={detailFooter}
                    closeAction={() => setSelected(null)}
                >
                    <ProviderDetail provider={providerList[selected ?? 0]} />
                </Card>
            </Modal>
        </div>
    );
}
