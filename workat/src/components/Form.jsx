import { Input } from './inputs/Input'
import { InputOptions } from './inputs/InputOptions'
import { BtnUpload } from './buttons/BtnUpload'
import { InputCheckBox } from './inputs/InputCheckBox'
import { BtnNext } from './buttons/BtnNext'
import pictures from '../assets/img/pictures.ts'

export function Form() {
    return (
        <div className="grid place-items-center h-screen">
            <img src={pictures.Logo} alt="FullTimeForce.png" className='w-24' />
            <h2 className='font-Raleway font-semibold text-primary-color text-2xl leading-7 mb-0'>Senior Designer</h2>
            <form className='w-7/12'>
                <div className="flex flex-wrap -mx-3">
                    {/* inputs */}
                    <Input type="text" placeholder="Name" id="name" />
                    <Input type="email" placeholder="Email" id="email" />
                    <Input type="tel" placeholder="Phone" id="phone" />
                    {/* select option */}
                    <InputOptions />
                    {/* button to upload resume */}
                    <BtnUpload />
                    {/* RadioButton to accept terms and conditions */}
                    <InputCheckBox />
                </div>
            </form>
            <BtnNext />
        </div>
    )
}
