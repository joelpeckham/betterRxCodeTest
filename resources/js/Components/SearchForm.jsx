import React, { useState, useEffect, useRef } from "react";
import { router, usePage } from "@inertiajs/react";
import autoAnimate from "@formkit/auto-animate";
import { BiSearchAlt } from "react-icons/bi";

const defaultSearch = {
    firstName: "",
    lastName: "",
    npiNumber: "",
    taxonomyDescription: "",
    city: "",
    state: "",
    zip: "",
    page: 1,
};

const SearchForm = ({ response }) => {
    const { errors } = usePage().props;
    response = { ...response, ...defaultSearch };
    const [search, setSearch] = useState(response);

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

    const stateSelect = (
        <select
            id="state"
            name="state"
            autoComplete="state"
            className={inputStyle}
            value={search.state}
            onChange={(e) => handleChange(e)}
        >
            <option value="">Select a state</option>
            <option value="AL">Alabama</option>
            <option value="AK">Alaska</option>
            <option value="AZ">Arizona</option>
            <option value="AR">Arkansas</option>
            <option value="CA">California</option>
            <option value="CO">Colorado</option>
            <option value="CT">Connecticut</option>
            <option value="DE">Delaware</option>
            <option value="DC">District Of Columbia</option>
            <option value="FL">Florida</option>
            <option value="GA">Georgia</option>
            <option value="HI">Hawaii</option>
            <option value="ID">Idaho</option>
            <option value="IL">Illinois</option>
            <option value="IN">Indiana</option>
            <option value="IA">Iowa</option>
            <option value="KS">Kansas</option>
            <option value="KY">Kentucky</option>
            <option value="LA">Louisiana</option>
            <option value="ME">Maine</option>
            <option value="MD">Maryland</option>
            <option value="MA">Massachusetts</option>
            <option value="MI">Michigan</option>
            <option value="MN">Minnesota</option>
            <option value="MS">Mississippi</option>
            <option value="MO">Missouri</option>
            <option value="MT">Montana</option>
            <option value="NE">Nebraska</option>
            <option value="NV">Nevada</option>
            <option value="NH">New Hampshire</option>
            <option value="NJ">New Jersey</option>
            <option value="NM">New Mexico</option>
            <option value="NY">New York</option>
            <option value="NC">North Carolina</option>
            <option value="ND">North Dakota</option>
            <option value="OH">Ohio</option>
            <option value="OK">Oklahoma</option>
            <option value="OR">Oregon</option>
            <option value="PA">Pennsylvania</option>
            <option value="RI">Rhode Island</option>
            <option value="SC">South Carolina</option>
            <option value="SD">South Dakota</option>
            <option value="TN">Tennessee</option>
            <option value="TX">Texas</option>
            <option value="UT">Utah</option>
            <option value="VT">Vermont</option>
            <option value="VA">Virginia</option>
            <option value="WA">Washington</option>
            <option value="WV">West Virginia</option>
            <option value="WI">Wisconsin</option>
            <option value="WY">Wyoming</option>
        </select>
    );

    function handleChange(e) {
        setSearch({ ...search, [e.target.name]: e.target.value });
    }
    function errorElement(fieldName) {
        if (errors[fieldName]) {
            return (
                <>
                    | <span className="text-red-600 text-xs">{errors[fieldName]}</span>
                </>
            );
        }
        return <></>;
    }
    return (
        <div className="mt-10">
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    search.page = 1;
                    router.get("/search", search, {
                        preserveScroll: true,
                        preserveState: true,
                    });
                }}
                ref={parentRef}
            >
                <div className="flex flex-row flex-wrap items-center gap-2 sm:flex-nowrap">
                    <div className="w-full">
                        <label htmlFor="firstName" className={labelStyle}>
                            First Name {errorElement("firstName")}
                        </label>
                        <input
                            type="text"
                            name="firstName"
                            id="firstName"
                            value={search.firstName}
                            onChange={(e) => handleChange(e)}
                            className={inputStyle}
                            maxlength="100"
                        />
                    </div>
                    <div className="w-full">
                        <label htmlFor="lastName" className={labelStyle}>
                            Last Name {errorElement("lastName")}
                        </label>
                        <input
                            type="text"
                            name="lastName"
                            id="lastName"
                            value={search.lastName}
                            onChange={(e) => handleChange(e)}
                            className={inputStyle}
                            maxlength="100"
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
                                    NPI Number {errorElement("npiNumber")}
                                </label>
                                <input
                                    type="text"
                                    name="npiNumber"
                                    id="npiNumber"
                                    value={search.npiNumber}
                                    onChange={(e) => handleChange(e)}
                                    className={inputStyle}
                                    maxlength="100"
                                />
                            </div>
                            <div className="w-full">
                                <label
                                    htmlFor="taxonomy_description"
                                    className={labelStyle}
                                >
                                    Taxonomy Description {errorElement("taxonomy_description")}
                                </label>
                                <input
                                    type="text"
                                    name="taxonomyDescription"
                                    id="taxonomy_description"
                                    value={search.taxonomyDescription}
                                    onChange={(e) => handleChange(e)}
                                    className={inputStyle}
                                    maxlength="100"
                                />
                            </div>
                        </div>
                        <div className="mt-1 flex flex-row flex-wrap items-center gap-2  sm:flex-nowrap">
                            <div className="w-full">
                                <label htmlFor="city" className={labelStyle}>
                                    City {errorElement("city")}
                                </label>
                                <input
                                    type="text"
                                    name="city"
                                    id="city"
                                    value={search.city}
                                    onChange={(e) => handleChange(e)}
                                    className={inputStyle}
                                    maxlength="100"
                                />
                            </div>
                            <div className="w-full">
                                <label htmlFor="state" className={labelStyle}>
                                    State {errorElement("state")}
                                </label>
                                {stateSelect}
                            </div>
                            <div className="w-full">
                                <label htmlFor="postal_code" className={labelStyle}>
                                    Zip {errorElement("postal_code")}
                                </label>
                                <input
                                    type="text"
                                    name="zip"
                                    id="postal_code"
                                    value={search.zip}
                                    onChange={(e) => handleChange(e)}
                                    className={inputStyle}
                                    maxlength="15"
                                />
                            </div>
                        </div>
                    </div>
                )}
                <div className="mt-4 flex w-full flex-col flex-wrap items-center justify-center gap-2 sm:flex-nowrap">
                    <div className="w-full sm:w-1/2">
                        <button
                            type="submit"
                            className="mt-1 inline-flex w-full items-center justify-center gap-1 rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-lg font-bold text-white shadow-sm hover:bg-indigo-500"
                        >
                            Search <BiSearchAlt />
                        </button>
                    </div>
                    <div className="w-full sm:w-1/2">
                        <button
                            type="button"
                            className="w-full text-center text-sm text-indigo-700 hover:text-indigo-500"
                            onClick={() => {
                                setIsAdvancedSearch(!isAdvancedSearch);
                            }}
                        >
                            {isAdvancedSearch
                                ? "Hide advanced search ✗"
                                : "Show advanced search ↓"}
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default SearchForm;
