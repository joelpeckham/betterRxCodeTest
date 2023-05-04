export default function NoResults(){
    return(
        <div className="mx-auto flex max-w-6xl justify-center">
            <div className="my-4 rounded-lg bg-white shadow">
                <div className="px-4 py-5 sm:p-6">
                    <p className="text-sm leading-6 text-gray-900">
                        Sorry, no results found. Please try again.
                    </p>
                </div>
            </div>
        </div>
    );
}
