import { Head } from '@inertiajs/react';

export default function Search({ searchResult }) {
    return(
        <>
            <Head title="Search" />
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <pre className="whitespace-pre-wrap">
                    {JSON.stringify(searchResult, null, 2)}
                </pre>
                
            </div>
        </>
    );
}