import React from "react";

export default function ProviderListItem({
    provider,
    selected,
    setSelected,
    index,
}) {
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

    return (
        <li
            className={`${
                selected == index ? "bg-gray-200" : "hover:bg-gray-50"
            } cursor-pointer rounded-md`}
            onClick={() => setSelected(index)}
        >
            <div className="px-4 py-4 sm:px-6">
                <div className="flex flex-col justify-between gap-1 lg:flex-row  lg:items-center lg:gap-2">
                    <p className="truncate text-sm font-medium text-indigo-600 lg:overflow-visible">
                        {providerName()}
                    </p>
                    <p className="-ml-1 inline-flex max-w-fit overflow-x-hidden whitespace-nowrap rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800 lg:ml-0">
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
