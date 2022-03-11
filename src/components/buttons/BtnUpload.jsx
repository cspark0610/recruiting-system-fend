import { FaUpload } from "react-icons/fa";

export function BtnUpload() {
    return (
        <div className='w-full grid place-items-center mt-4'>
            <button className="uppercase bg-transparent rounded-lg hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 w-11/12 h-12 border border-blue-500 hover:border-transparent">
                <div className='flex flex-row items-center justify-center'>
                    <FaUpload /> &nbsp;&nbsp; Upload CV
                </div>
            </button>
        </div>
    )
}
