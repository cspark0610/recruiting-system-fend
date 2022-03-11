export function Input(props) {
    return (
        <div className="w-full md:w-1/2 px-3 p-3">
            <input className="font-Raleway appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id={props.id} type={props.type} placeholder={props.placeholder} />
        </div>
    )
}
