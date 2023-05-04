import React from "react";
import ProviderDetailDLItem from "./ProviderDetailDLItem";

export default function ProviderDetail({ provider }) {
    const providerAddress = (
        <>
            {provider.addresses[0].address_1}
            <br />
            {provider.addresses[0].city}, {provider.addresses[0].state}{" "}
            {provider.addresses[0].postal_code}
        </>
    );
    return (
        <div className="px-4 py-5 sm:p-6">
            <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                <ProviderDetailDLItem
                    label="First Name"
                    value={provider.basic.first_name}
                />
                <ProviderDetailDLItem
                    label="Last Name"
                    value={provider.basic.last_name}
                />
                <ProviderDetailDLItem
                    label="Middle"
                    value={provider.basic.middle_name}
                />
                <ProviderDetailDLItem
                    label="Name"
                    value={provider.basic.organization_name}
                />
                <ProviderDetailDLItem
                    label="NPI Number"
                    value={provider.number}
                />
                <ProviderDetailDLItem
                    label="Credential"
                    value={provider.basic.credential}
                />
                <ProviderDetailDLItem
                    label="Sole Proprietor"
                    value={provider.basic.sole_proprietor}
                />
                <ProviderDetailDLItem label="Address" value={providerAddress} />
                <ProviderDetailDLItem
                    label="Specialty"
                    value={provider.taxonomies[0].desc}
                />
            </dl>
        </div>
    );
}
