export function AreaInput() {
    return (
        <div className="relative w-full md:w-full p-3">
            <div className="bg-gray-200 text-gray-700 border border-gray-200 rounded p-4">
                <label className="text-sm font-normal text-text-color font-Raleway">
                    Why are you interested in working with us: <br></br>
                    <textarea className="mt-4 border-none bg-transparent resize-none w-full h-16 focus-visible:outline-none" maxLength={200} />
                </label>
            </div>
        </div>
    )
}
