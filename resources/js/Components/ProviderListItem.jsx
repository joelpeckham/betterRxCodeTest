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

import React from 'react';

export default function ProviderListItem({ provider, isSelected }) {
    return (
        <li
            className={`${
                isSelected ? "bg-gray-200" : "hover:bg-gray-50"
            } cursor-pointer`}
        >
            <div className="px-4 py-4 sm:px-6">
                <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-indigo-600 truncate">
                        {provider.basic.first_name} {provider.basic.last_name}
                    </p>
                    <div className="ml-2 flex-shrink-0 flex">
                        <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                            {provider.taxonomies[0].desc}
                        </p>
                    </div>
                </div>
                <div className="mt-2 sm:flex sm:justify-between">
                    <div className="sm:flex">
                        <p className="flex items-center text-sm text-gray-500">
                            {provider.basic.credential}
                        </p>
                        <p className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0 sm:ml-6">
                            {provider.addresses[0].city}, {provider.addresses[0].state}
                        </p>
                    </div>
                </div>
            </div>
        </li>
    );
}

