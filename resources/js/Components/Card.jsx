import React from "react";

export default function Card({
    title,
    subtitle,
    children,
    footer,
    closeAction,
}) {
    return (
        <div className="flex h-full w-full flex-col justify-between divide-y divide-gray-200 overflow-y-scroll rounded-lg bg-white shadow md:overflow-auto">
            <div className="flex flex-col justify-start divide-y divide-gray-200">
                <div className="px-4 py-5 sm:px-6">
                    <div className="items flex justify-between">
                        <h2 className="text-lg font-medium leading-6 text-gray-900">
                            {title}
                        </h2>
                        {closeAction && (
                            <button
                                className="text-2xl text-gray-500 hover:text-gray-400"
                                onClick={closeAction}
                            >
                                &times;
                            </button>
                        )}
                    </div>

                    <p className="mt-1 max-w-2xl text-sm text-gray-500">
                        {subtitle}
                    </p>
                </div>
                <div className="px-4 py-5 sm:p-6">{children}</div>
            </div>
            <div className="flex flex-col justify-end">
                {footer && (
                    <div className="flex px-4 py-4 sm:px-6">{footer}</div>
                )}
            </div>
        </div>
    );
}
