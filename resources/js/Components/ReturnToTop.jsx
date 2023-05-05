import React, { useLayoutEffect, useState } from "react";

const ReturnToTop = ({sectionId}) => {
    const [scrollPosition, setPosition] = useState(0);
    useLayoutEffect(() => {
        function updatePosition() {
            setPosition(window.pageYOffset);
        }
        window.addEventListener("scroll", updatePosition);
        updatePosition();
        return () => window.removeEventListener("scroll", updatePosition);
    }, []);
    return (
        <div
            className={`fixed bottom-0 right-0 mb-4 mr-4 transition-opacity duration-500 ${
                scrollPosition > 450 ? "opacity-100" : "opacity-0"
            }`}
        >
            <a href={`#${sectionId}`} aria-label="Return to Top">
                <button
                    className="rounded-full bg-indigo-600 px-4 py-2 font-bold text-white hover:bg-indigo-500"
                    aria-label="Return to Top"
                >
                    <svg
                        className="h-6 w-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 11l7-7 7 7M5 19l7-7 7 7"
                        ></path>
                    </svg>
                </button>
            </a>
        </div>
    );
};
export default ReturnToTop;
