// Search Form Component
// A user should be able to search by first name, last name, npi number, taxonomy description, city, state and zip.
// Everything except first and last name should be under an "advanced search" toggle.

// Path: resources/js/Components/SearchForm.jsx

import React, { useState, useEffect, useRef } from "react";
import { router } from "@inertiajs/react";
import autoAnimate from "@formkit/auto-animate";

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

    const parentRef = useRef(null);

    useEffect(() => {
        if (parentRef.current) {
            autoAnimate(parentRef.current);
        }
    }, [parent]);

    const labelStyle = "block text-sm font-medium text-gray-700";
    const inputStyle =
        "mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md";

    return (
        <div className="mt-10">
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    router.get("/search", search);
                }}
                ref={parentRef}
            >
                <div className="flex flex-row flex-wrap items-center gap-2 sm:flex-nowrap">
                    <div className="w-full">
                        <label htmlFor="firstName" className={labelStyle}>
                            First Name
                        </label>
                        <input
                            type="text"
                            name="firstName"
                            id="firstName"
                            value={search.firstName}
                            onChange={(e) =>
                                setSearch({
                                    ...search,
                                    firstName: e.target.value,
                                })
                            }
                            className={inputStyle}
                        />
                    </div>
                    <div className="w-full">
                        <label htmlFor="lastName" className={labelStyle}>
                            Last Name
                        </label>
                        <input
                            type="text"
                            name="lastName"
                            id="lastName"
                            value={search.lastName}
                            onChange={(e) =>
                                setSearch({
                                    ...search,
                                    lastName: e.target.value,
                                })
                            }
                            className={inputStyle}
                        />
                    </div>
                </div>
                {isAdvancedSearch && (
                    <div>
                        <div className="mt-1 flex flex-row flex-wrap items-center gap-2  sm:flex-nowrap">
                            <div className="w-full">
                                <label
                                    htmlFor="npiNumber"
                                    className={labelStyle}
                                >
                                    NPI Number
                                </label>
                                <input
                                    type="text"
                                    name="npiNumber"
                                    id="npiNumber"
                                    value={search.npiNumber}
                                    onChange={(e) =>
                                        setSearch({
                                            ...search,
                                            npiNumber: e.target.value,
                                        })
                                    }
                                    className={inputStyle}
                                />
                            </div>
                            <div className="w-full">
                                <label
                                    htmlFor="taxonomyDescription"
                                    className={labelStyle}
                                >
                                    Taxonomy Description
                                </label>
                                <input
                                    type="text"
                                    name="taxonomyDescription"
                                    id="taxonomyDescription"
                                    value={search.taxonomyDescription}
                                    onChange={(e) =>
                                        setSearch({
                                            ...search,
                                            taxonomyDescription: e.target.value,
                                        })
                                    }
                                    className={inputStyle}
                                />
                            </div>
                        </div>
                        <div className="mt-1 flex flex-row flex-wrap items-center gap-2  sm:flex-nowrap">
                            <div className="w-full">
                                <label htmlFor="city" className={labelStyle}>
                                    City
                                </label>
                                <input
                                    type="text"
                                    name="city"
                                    id="city"
                                    value={search.city}
                                    onChange={(e) =>
                                        setSearch({
                                            ...search,
                                            city: e.target.value,
                                        })
                                    }
                                    className={inputStyle}
                                />
                            </div>
                            <div className="w-full">
                                <label htmlFor="state" className={labelStyle}>
                                    State
                                </label>
                                <input
                                    type="text"
                                    name="state"
                                    id="state"
                                    value={search.state}
                                    onChange={(e) =>
                                        setSearch({
                                            ...search,
                                            state: e.target.value,
                                        })
                                    }
                                    className={inputStyle}
                                />
                            </div>
                            <div className="w-full">
                                <label htmlFor="zip" className={labelStyle}>
                                    Zip
                                </label>
                                <input
                                    type="text"
                                    name="zip"
                                    id="zip"
                                    value={search.zip}
                                    onChange={(e) =>
                                        setSearch({
                                            ...search,
                                            zip: e.target.value,
                                        })
                                    }
                                    className={inputStyle}
                                />
                            </div>
                        </div>
                    </div>
                )}
                <div className="mt-4 flex w-full flex-col flex-wrap items-center justify-center gap-2 sm:flex-nowrap">
                    <div className="w-full sm:w-1/2">
                        <button
                            type="submit"
                            className="mt-1 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-500 px-4 py-2 text-sm font-bold text-white shadow-sm hover:bg-indigo-600"
                        >
                            Search
                        </button>
                    </div>
                    <div className="w-full sm:w-1/2">
                        <button
                            type="button"
                            className="w-full text-center text-sm text-indigo-600 hover:text-indigo-500"
                            onClick={() =>
                                setIsAdvancedSearch(!isAdvancedSearch)
                            }
                        >
                            {isAdvancedSearch
                                ? "Close advanced search ✗"
                                : "Show advanced search ↓"}
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default SearchForm;
