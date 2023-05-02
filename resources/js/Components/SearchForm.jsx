// Search Form Component
// A user should be able to search by first name, last name, npi number, taxonomy description, city, state and zip.
// Everything except first and last name should be under an "advanced search" toggle.

// Path: resources/js/Components/SearchForm.jsx

import React, { useState } from "react";
import { router } from "@inertiajs/react";

const SearchForm = () => {
    const [search, setSearch] = useState({
        firstName: "",
        lastName: "",
        npiNumber: "",
        taxonomyDescription: "",
        city: "",
        state: "",
        zip: "",
    });
    const [isAdvancedSearch, setIsAdvancedSearch] = useState(false);
    return (
        <div className="mt-10">
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    router.post("/search", search);
                }}
            >
                <div className="flex flex-row items-center gap-2">
                    <div className="w-1/2">
                        <label
                            htmlFor="firstName"
                            className="block text-sm font-medium text-gray-700"
                        >
                            First Name
                        </label>
                        <input
                            type="text"
                            name="firstName"
                            id="firstName"
                            autoComplete="given-name"
                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            value={search.firstName}
                            onChange={(e) =>
                                setSearch({
                                    ...search,
                                    firstName: e.target.value,
                                })
                            }
                        />
                    </div>
                    <div className="w-1/2">
                        <label
                            htmlFor="lastName"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Last Name
                        </label>
                        <input
                            type="text"
                            name="lastName"
                            id="lastName"
                            autoComplete="family-name"
                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            value={search.lastName}
                            onChange={(e) =>
                                setSearch({
                                    ...search,
                                    lastName: e.target.value,
                                })
                            }
                        />
                    </div>
                </div>
                {isAdvancedSearch && (
                    <div className="flex flex-col items-center justify-center gap-2 mt-4">
                        <div className="w-1/2">
                            <label
                                htmlFor="npiNumber"
                                className="block text-sm font-medium text-gray-700"
                            >
                                NPI Number
                            </label>
                            <input
                                type="text"
                                name="npiNumber"
                                id="npiNumber"
                                autoComplete="npiNumber"
                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                value={search.npiNumber}
                                onChange={(e) =>
                                    setSearch({
                                        ...search,
                                        npiNumber: e.target.value,
                                    })
                                }
                            />
                        </div>
                        <div className="w-1/2">
                            <label
                                htmlFor="taxonomyDescription"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Taxonomy Description
                            </label>
                            <input
                                type="text"
                                name="taxonomyDescription"
                                id="taxonomyDescription"
                                autoComplete="taxonomyDescription"
                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                value={search.taxonomyDescription}
                                onChange={(e) =>
                                    setSearch({
                                        ...search,
                                        taxonomyDescription: e.target.value,
                                    })
                                }
                            />
                        </div>
                        <div className="w-1/2">
                            <label
                                htmlFor="city"
                                className="block text-sm font-medium text-gray-700"
                            >
                                City
                            </label>
                            <input
                                type="text"
                                name="city"
                                id="city"
                                autoComplete="city"
                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                value={search.city}
                                onChange={(e) =>
                                    setSearch({
                                        ...search,
                                        city: e.target.value,
                                    })
                                }
                            />
                        </div>
                        <div className="w-1/2">
                            <label
                                htmlFor="state"
                                className="block text-sm font-medium text-gray-700"
                            >
                                State
                            </label>
                            <input
                                type="text"
                                name="state"
                                id="state"
                                autoComplete="state"
                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                value={search.state}
                                onChange={(e) =>
                                    setSearch({
                                        ...search,
                                        state: e.target.value,
                                    })
                                }
                            />
                        </div>
                        <div className="w-1/2">
                            <label
                                htmlFor="zip"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Zip
                            </label>
                            <input
                                type="text"
                                name="zip"
                                id="zip"
                                autoComplete="zip"
                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                value={search.zip}
                                onChange={(e) =>
                                    setSearch({
                                        ...search,
                                        zip: e.target.value,
                                    })
                                }
                            />
                        </div>
                    </div>
                )}
                <div className="flex flex-col items-center justify-center w-1/2">
                    <button
                        type="button"
                        className="text-sm font-medium text-gray-700"
                        onClick={() => setIsAdvancedSearch(!isAdvancedSearch)}
                    >
                        {isAdvancedSearch ? "Hide" : "Show"} Advanced Search
                    </button>
                    <button
                        type="submit"
                        className="mt-2 w-full inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-500 hover:bg-indigo-600"
                    >
                        Search
                    </button>
                </div>
            </form>
        </div>
    );
};

export default SearchForm;
