import React, { useState } from "react";
import Modal from "./Modal";
import ProviderList from "./ProviderList";
import ProviderDetail from "./ProviderDetail";
import Card from "./Card";
import Pagination from "./Pagination";
import NoResults from "./NoResults";
import { router } from "@inertiajs/react";

export default function Results({ searchData }) {
    const [selected, setSelected] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);
    const providerList = searchData["res"]["results"];

    if (providerList.length === 0) {
        return <NoResults />;
    }

    const morePages = searchData["res"]["result_count"] > 50;
    const pageNumber = parseInt(searchData["req"]["page"]);

    let request = searchData["req"];

    const increasePageNumber = () => {
        if (morePages) {
            request.page = pageNumber + 1;
            router.get("/search", request, {
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
        router.get("/search", request, {
            preserveScroll: true,
            preserveState: true,
        });
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

    const resultsShowing = providerList.length > 50 ? 50 : providerList.length;

    return (
        <div className="w-full pb-24 ">
            <Card
                title="Search Results"
                subtitle={`Showing ${resultsShowing} result${
                    resultsShowing == 1 ? "" : "s"
                }.`}
                footer={paginationFooter}
            >
                <ProviderList
                    providerData={providerList}
                    selectedProvider={selected}
                    setSelectedProvider={setSelected}
                    setModalOpen={setModalOpen}
                />
            </Card>
            <Modal show={modalOpen} onClose={() => setModalOpen(false)}>
                <Card
                    title="Provider Details"
                    subtitle="Information from the NPI Registry."
                    footer={detailFooter}
                    closeAction={() => setModalOpen(false)}
                    containerClasses={"divide-y divide-gray-200"}
                >
                    <ProviderDetail provider={providerList[selected ?? 0]} />
                </Card>
            </Modal>
        </div>
    );
}
