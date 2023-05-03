

import { router } from "@inertiajs/react";
const numberButton = (number, page, increase, decrease) => {
        let isSelected = number == page;
    
        const clicked = () => {
            if (number > page) {
                return increase;
            }
            if (number < page) {
                return decrease;
            }
        };
                
        const selectedClasses =
            "focus:shadow-outline h-10 w-10 rounded-full border border-r-0 border-indigo-600 bg-indigo-600 text-white transition-colors duration-150";
        const unselectedClasses =
            "focus:shadow-outline h-10 w-10 rounded-full text-indigo-600 transition-colors duration-150 hover:bg-indigo-100";
        return (
            <button
                key={number}
                className={isSelected ? selectedClasses : unselectedClasses}
                onClick={clicked()}
            >
                {number}
            </button>
        );
    };

const Pagination = ({ page, increase, decrease, isMorePages }) => {
    page = parseInt(page);
    let visiblePages = [];
    if (page > 1) {
        visiblePages.push(page - 1);
    }
    visiblePages.push(page);
    if (isMorePages) {
        visiblePages.push(page + 1);
    }
    
    return (
        <nav aria-label="Page navigation">
            <ul className="inline-flex space-x-2">
                <li>
                    <button
                        className="focus:shadow-outline flex h-10 w-10 items-center justify-center rounded-full text-indigo-600 transition-colors duration-150 hover:bg-indigo-100"
                        onClick={() => decrease()}
                    >
                        <svg
                            className="h-4 w-4 fill-current"
                            viewBox="0 0 20 20"
                        >
                            <path
                                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                                clipRule="evenodd"
                                fillRule="evenodd"
                            ></path>
                        </svg>
                    </button>
                </li>
                {visiblePages.map((number) => {
                    return numberButton(number, page, increase, decrease);
                })}
                <li>
                    <button
                        className="focus:shadow-outline flex h-10 w-10 items-center justify-center rounded-full bg-white text-indigo-600 transition-colors duration-150 hover:bg-indigo-100"
                        onClick={() => increase()}
                    >
                        <svg
                            className="h-4 w-4 fill-current"
                            viewBox="0 0 20 20"
                        >
                            <path
                                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                clipRule="evenodd"
                                fillRule="evenodd"
                            ></path>
                        </svg>
                    </button>
                </li>
            </ul>
        </nav>
    );
};

export default Pagination;
