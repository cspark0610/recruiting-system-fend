import pictures from '../assets/img/pictures.ts'

export function Thanks() {
    return (
        <div className="grid place-items-center mt-24">
            <img src={pictures.Logo} alt="FullTimeForce.png" className='w-28' />
            <br></br>
            <h2 className='font-Raleway text-text-color font-semibold py-5 leading-4'>Your application has been sent!</h2>
            <p className='font-Raleway text-text-color font-normal leading-4'>
                We appreciate your time and interest,<br></br>
                we will be communicating with you.
            </p>
        </div>
    )
}
