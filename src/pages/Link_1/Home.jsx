import { FrmInformation } from '../../components/FrmInformation'
import { BlueBtn } from '../../components/button/BlueBtn'

export function Home() {
    return (
        <div className='container mx-auto grid place-items-center h-screen bg-clouds bg-no-repeat bg-cover bg-center'>
            <img src="https://fulltimeforce.com/wp-content/themes/ftf-2020/images/fulltimeforce-logo.svg" alt="FullTimeForce.png" className='w-24' />
            <h2 className='font-Raleway font-semibold text-primary-color text-2xl leading-7 mb-0'>Senior Designer</h2>
            <FrmInformation />
            <div className='-mt-9'>
                <BlueBtn name="Next" link="./thanks" />
            </div>
        </div>
    )
}
