/* Link Router DOM */
import { Link } from "react-router-dom"

export function BlueBtn(props) {
    return (
        <div className='w-full grid place-items-center'>
            <Link to={props.link}>
                <button className="rounded-2xl bg-blue-500 text-white font-semibold py-3 px-9">
                    {props.name}
                </button>
            </Link>
        </div>
    )
}
