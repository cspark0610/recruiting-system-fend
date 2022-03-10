/* Link Router DOM */
import { Link } from "react-router-dom"

export function BtnNext() {
    return (
        <div className='w-full grid place-items-center'>
            <Link to='./thanks'>
                <button className="rounded-2xl bg-blue-500 text-white font-semibold py-3 px-9 w-28">
                    Next
                </button>
            </Link>
        </div>
    )
}
