import { Input } from './inputs/Input'
import { InputOptions } from './inputs/InputOptions'
import { BtnUpload } from './buttons/BtnUpload'
import { InputCheckBox } from './inputs/InputCheckBox'

export function Form() {
    return (
        <div className="container grid place-items-center">
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
        </div>
    )
}
