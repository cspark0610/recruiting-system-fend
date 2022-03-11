import { TextInput } from './input/TextInput'
import { SelectInput } from './input/SelectInput'
import { AreaInput } from './input/AreaInput'
/* import { UploadBtn } from './button/UploadBtn'
import { CheckInput } from './input/CheckInput' */

export function FrmData() {
    return (
        <div className="container grid place-items-center -mt-8">
            <form className='w-7/12'>
                <div className="flex flex-wrap -mx-3">
                    <SelectInput label="Academic training" />
                    <SelectInput label="English level" />
                    <TextInput type="url" placeholder="Linkedin" id="linkedin" width="md:w-1/2" />
                    <TextInput type="number" placeholder="Salary expectation" id="salary" width="md:w-1/2" />
                    <TextInput type="url" placeholder="Portfolio link" id="portfolio" width="md:w-full" />
                    <AreaInput />
                </div>
            </form>
        </div>
    )
}