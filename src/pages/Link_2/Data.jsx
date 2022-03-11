import { FrmData } from '../../components/FrmData'

export function Data() {
    return (
        <div className="grid place-items-center h-screen bg-clouds bg-no-repeat bg-cover bg-center">
            <div className="container mx-auto grid place-items-center h-screen">
                <img src="https://fulltimeforce.com/wp-content/themes/ftf-2020/images/fulltimeforce-logo.svg" alt="FullTimeForce.png" className='w-44 h-20' />
                <h2 className='font-Raleway font-normal text-text-color text-xl my-5'>Sebastian Montenegro Abad</h2>
                <FrmData />
            </div>
        </div>
    )
}
