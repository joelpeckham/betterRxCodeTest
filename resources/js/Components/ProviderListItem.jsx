// ProviderListItem component

//  Data Shape:

// {
//     "created_epoch": "1125493426000",
//     "enumeration_type": "NPI-1",
//     "last_updated_epoch": "1183947785000",
//     "number": "1417940867",
//     "addresses": [
//     {
//         "country_code": "US",
//         "country_name": "United States",
//         "address_purpose": "MAILING",
//         "address_type": "DOM",
//         "address_1": "PO BOX 1060",
//         "city": "FLETCHER",
//         "state": "NC",
//         "postal_code": "287321060",
//         "telephone_number": "828-684-8201",
//         "fax_number": "828-684-8601"
//     },
//     {
//         "country_code": "US",
//         "country_name": "United States",
//         "address_purpose": "LOCATION",
//         "address_type": "DOM",
//         "address_1": "29 DOCTORS DRIVE",
//         "city": "FLETCHER",
//         "state": "NC",
//         "postal_code": "28732",
//         "telephone_number": "828-684-8201",
//         "fax_number": "828-684-8601"
//     }
//     ],
//     "practiceLocations": [],
//     "basic": {
//     "first_name": "ROBYN",
//     "last_name": "PECKHAM",
//     "middle_name": "H",
//     "credential": "MD",
//     "sole_proprietor": "NO",
//     "gender": "M",
//     "enumeration_date": "2005-08-31",
//     "last_updated": "2007-07-08",
//     "status": "A",
//     "name_prefix": "--",
//     "name_suffix": "--"
//     },
//     "taxonomies": [
//     {
//         "code": "207X00000X",
//         "taxonomy_group": "",
//         "desc": "Orthopaedic Surgery",
//         "state": "NC",
//         "license": "980660NC",
//         "primary": true
//     }
//     ],
//     "identifiers": [
//     {
//         "code": "01",
//         "desc": "Other (non-Medicare)",
//         "issuer": "BCBS",
//         "identifier": "1154K",
//         "state": "NC"
//     },
//     {
//         "code": "01",
//         "desc": "Other (non-Medicare)",
//         "issuer": "Cigna",
//         "identifier": "6658952",
//         "state": null
//     },
//     {
//         "code": "05",
//         "desc": "MEDICAID",
//         "issuer": null,
//         "identifier": "891154K",
//         "state": "NC"
//     },
//     {
//         "code": "01",
//         "desc": "Other (non-Medicare)",
//         "issuer": "Medcost",
//         "identifier": "D3689",
//         "state": null
//     }
//     ],
//     "endpoints": [],
//     "other_names": []
// }

import React from "react";

export default function ProviderListItem({ provider, selected, setSelected, index }) {
    const providerName = () => {
        if (provider.basic.organization_name) {
            return provider.basic.organization_name;
        } else {
            return (
                provider.basic.first_name +
                " " +
                provider.basic.last_name +
                (provider.basic.credential
                    ? " | " + provider.basic.credential
                    : "")
            );
        }
    };

    const hideScrollbars = {
        scrollbarWidth: "none",
        msOverflowStyle: "none",
    };

    return (
        <li
            className={`${
                selected==index ? "bg-gray-200" : "hover:bg-gray-50"
            } cursor-pointer rounded-md`}
            onClick={() => setSelected(index)}

        >
            <div className="px-4 py-4 sm:px-6">
                <div className="flex flex-col justify-between gap-1 lg:gap-2  lg:flex-row lg:items-center">
                    <p className="truncate text-sm font-medium text-indigo-600 lg:overflow-visible">
                        {providerName()}
                    </p>
                    <p className="-ml-1 lg:ml-0 inline-flex max-w-fit overflow-x-scroll whitespace-nowrap rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                        {provider.taxonomies[0].desc}
                    </p>
                </div>
                <div className="m-0 mt-2 sm:flex sm:justify-start">
                    <div className="sm:flex">
                        <p className="ml-0 mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                            {provider.addresses[0].city},{" "}
                            {provider.addresses[0].state}
                        </p>
                    </div>
                </div>
            </div>
        </li>
    );
}
