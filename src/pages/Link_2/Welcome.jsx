import { BlueBtn } from '../../components/button/BlueBtn'

export function Welcome() {
    return (
        <div className="grid place-items-center h-screen bg-clouds bg-no-repeat bg-cover bg-center">
            <div className="container mx-auto grid place-items-center h-screen">
                <img src="https://fulltimeforce.com/wp-content/themes/ftf-2020/images/fulltimeforce-logo.svg" alt="FullTimeForce.png" className='w-44 h-28' />
                <h2 className='font-Raleway font-semibold text-primary-color text-2xl leading-7'>Welcome</h2>
                <div className="font-Raleway leading-7">
                    <span className="text-center">For this process you will have to perfomtwo steps:</span>
                    <ul className="list-disc my-5 mx-12">
                        <li>First you will have to fill out a form.</li>
                        <li>Second you will have to film yourself<br /> on video answering some questions.</li>
                    </ul>
                </div>
                <span className="font-Raleway text-text-color font-bold -mt-12">Are you ready?</span>
                <div className='-mt-12'>
                    <BlueBtn name="Get Started" link="./data" />
                </div>
            </div>
        </div>
    )
}
