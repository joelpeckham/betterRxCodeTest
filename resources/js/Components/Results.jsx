// Results.jsx | Displays results of NPI search.
// Single large card split into two columns on larger screens.
// Left column displays basic information about the provider in a paginated list of providers.
// Right column displays detailed information about the selected provider.

import React, { useState } from 'react';
import ProviderListItem from './ProviderListItem';


export default function Results({ searchResult, resultPageNumber, setResultPageNumber }) {
    const [selected, setSelected] = useState(0);
    let providerList = searchResult["results"];
    console.log(providerList);
    return(
        <>
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="bg-white overflow-hidden shadow rounded-lg divide-y divide-gray-200">
                        <div className="px-4 py-5 sm:px-6">
                            <h2 className="text-lg leading-6 font-medium text-gray-900">
                                Search Results
                            </h2>
                            <p className="mt-1 max-w-2xl text-sm text-gray-500">
                                {searchResult.total} results found.
                            </p>
                        </div>
                        <div className="px-4 py-5 sm:p-6">
                            <ul className="divide-y divide-gray-200">
                                {providerList.map((provider, index) => (
                                    <ProviderListItem provider={provider} iSelected={index == selected} />
                                ))}
                            </ul>
                            <div className="mt-4">
                                <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                                    <a href="#" className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50" onClick={() => setResultPageNumber(resultPageNumber - 1)}>
                                        <span className="sr-only">Previous</span>
                                        <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M10.7071 5.29289C11.0976 4.90237 11.0976 4.2692 10.7071 3.87868C10.3166 3.48815 9.68342 3.48815 9.29289 3.87868L4.29289 8.87868C3.90237 9.2692 3.90237 9.90237 4.29289 10.2929L9.29289 15.2929C9.68342 15.6834 10.3166 15.6834 10.7071 15.2929C11.0976 14.9024 11.0976 14.2692 10.7071 13.8787L7.41421 10.5858H15C15.5523 10.5858 16 10.1381 16 9.58579C16 9.03348 15.5523 8.58579 15 8.58579H7.41421L10.7071 5.29289Z" />
                                        </svg>
                                    </a>
                                    <a href="#" className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50" onClick={() => setResultPageNumber(resultPageNumber + 1)}>
                                        {resultPageNumber}
                                    </a>
                                    <a href="#" className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50" onClick={() => setResultPageNumber(resultPageNumber + 1)}>
                                        <span className="sr-only">Next</span>
                                        <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M10.7071 5.29289C11.0976 4.90237 11.0976 4.2692 10.7071 3.87868C10.3166 3.48815 9.68342 3.48815 9.29289 3.87868L4.29289 8.87868C3.90237 9.2692 3.90237 9.90237 4.29289 10.2929L9.29289 15.2929C9.68342 15.6834 10.3166 15.6834 10.7071 15.2929C11.0976 14.9024 11.0976 14.2692 10.7071 13.8787L7.41421 10.5858H15C15.5523 10.5858 16 10.1381 16 9.58579C16 9.03348 15.5523 8.58579 15 8.58579H7.41421L10.7071 5.29289Z" />
                                        </svg>
                                    </a>
                                </nav>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white overflow-hidden shadow rounded-lg divide-y divide-gray-200">
                        <div className="px-4 py-5 sm:px-6">
                            <h2 className="text-lg leading-6 font-medium text-gray-900">
                                Provider Details
                            </h2>
                            <p className="mt-1 max-w-2xl text-sm text-gray-500">
                                {providerList[selected].basic.name}
                            </p>
                        </div>
                        <div className="px-4 py-5 sm:p-6">
                            <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                                <div className="sm:col-span-1">
                                    <dt className="text-sm font-medium text-gray-500">
                                        NPI Number
                                    </dt>
                                    <dd className="mt-1 text-sm text-gray-900">
                                        {providerList[selected].number}
                                    </dd>
                                </div>
                                <div className="sm:col-span-1">
                                    <dt className="text-sm font-medium text-gray-500">
                                        Address
                                    </dt>
                                    <dd className="mt-1 text-sm text-gray-900">
                                        {providerList[selected].addresses[0].address_1}
                                        <br />
                                        {providerList[selected].addresses[0].city}, {providerList[selected].addresses[0].state} {providerList[selected].addresses[0].postal_code}
                                    </dd>
                                </div>
                                <div className="sm:col-span-1">
                                    <dt className="text-sm font-medium text-gray-500">
                                        Phone Number
                                    </dt>
                                    <dd className="mt-1 text-sm text-gray-900">
                                        {providerList[selected].addresses[0].telephone_number}
                                    </dd>
                                </div>
                                <div className="sm:col-span-1">
                                    <dt className="text-sm font-medium text-gray-500">
                                        Specialty
                                    </dt>
                                    <dd className="mt-1 text-sm text-gray-900">
                                        {providerList[selected].taxonomies[0].desc}
                                    </dd>
                                </div>
                            </dl>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

