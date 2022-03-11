import { TextInput } from './input/TextInput'
import { SelectInput } from './input/SelectInput'
import { UploadBtn } from './button/UploadBtn'
import { CheckInput } from './input/CheckInput'

export function FrmInformation() {
    return (
        <div className="container grid place-items-center -mt-8">
            <form className='w-7/12'>
                <div className="flex flex-wrap -mx-3">
                    {/* inputs */}
                    <TextInput type="text" placeholder="Name" id="name" width="md:w-1/2" />
                    <TextInput type="email" placeholder="Email" id="email" width="md:w-1/2" />
                    <TextInput type="tel" placeholder="Phone" id="phone" width="md:w-1/2" />
                    {/* select option */}
                    <SelectInput />
                    {/* button to upload resume */}
                    <UploadBtn />
                    {/* RadioButton to accept terms and conditions */}
                    <CheckInput />
                </div>
            </form>
        </div>
    )
}
