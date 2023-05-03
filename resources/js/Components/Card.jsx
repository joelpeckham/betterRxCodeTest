// Card with title and subtitle

import React from "react";

export default function Card({ title, subtitle, children, footer }) {
    return (
        <div className="flex flex-col justify-between h-full divide-y  divide-gray-200 overflow-hidden rounded-lg bg-white shadow">
            <div className="flex flex-col justify-start divide-y divide-gray-200">
                <div className="px-4 py-5 sm:px-6">
                    <h2 className="text-lg font-medium leading-6 text-gray-900">
                        {title}
                    </h2>
                    <p className="mt-1 max-w-2xl text-sm text-gray-500">
                        {subtitle}
                    </p>
                </div>
                <div className="overflow-scroll px-4 py-5 sm:p-6">
                    {children}
                </div>
            </div>
            <div className="flex flex-col justify-end ">
                {footer && (
                    <div className="flex px-4 py-4 sm:px-6">{footer}</div>
                )}
            </div>
        </div>
    );
}
