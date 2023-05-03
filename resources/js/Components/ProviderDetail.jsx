// Provider Detail designed to be rendered in a card.

import React from "react";
import ProviderDetailDLItem from "./ProviderDetailDLItem";


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

export default function ProviderDetail({ provider }) {
    const providerAddress = (
        <>
            {provider.addresses[0].address_1}
            <br />
            {provider.addresses[0].city}, {provider.addresses[0].state} {provider.addresses[0].postal_code}
        </>
    )
    return (
        <div className="px-4 py-5 sm:p-6">
            <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                <ProviderDetailDLItem label="First Name" value={provider.basic.first_name} />
                <ProviderDetailDLItem label="Last Name" value={provider.basic.last_name} />
                <ProviderDetailDLItem label="Middle" value={provider.basic.middle_name} />
                <ProviderDetailDLItem label="Name" value={provider.basic.organization_name} />
                <ProviderDetailDLItem label="NPI Number" value={provider.number} />
                <ProviderDetailDLItem label="Credential" value={provider.basic.credential} />
                <ProviderDetailDLItem label="Sole Proprietor" value={provider.basic.sole_proprietor} />
                <ProviderDetailDLItem label="Address" value={providerAddress} />
                <ProviderDetailDLItem label="Specialty" value={provider.taxonomies[0].desc} />

                </dl>
        </div>
    );
}
