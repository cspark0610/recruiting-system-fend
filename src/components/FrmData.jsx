import { TextInput } from './input/TextInput'
import { SelectInput } from './input/SelectInput'
import { AreaInput } from './input/AreaInput'
import { BlueBtn } from './button/BlueBtn'
import { useState } from "react";

export function FrmData() {

    const [field, setField] = useState("");
    const [fieldError, setFieldError] = useState("");

    const validate = () => {
        const error = {};

        if (field === "") {
            error.field = "This field is required.";
        }

        return Object.keys(error).length === 0 ? null : error;
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const errors = validate();

        if (errors) {
            setFieldError(errors.field);
        } else {
            setFieldError("");
        }
    }

    return (
        <div className="container grid place-items-center -mt-8">
            <form className='w-7/12' onSubmit={handleSubmit}>
                <div className="flex flex-wrap -mx-3">
                    <SelectInput label="Academic training" />
                    <SelectInput label="English level" />
                    <TextInput type="url" placeholder="Linkedin" id="linkedin" width="md:w-1/2" onChange={(e) => { setField(e.target.value) }} tooltip={fieldError} />
                    <TextInput type="number" placeholder="Salary expectation" id="salary" width="md:w-1/2" onChange={(e) => { setField(e.target.value) }} tooltip={fieldError} />
                    <TextInput type="url" placeholder="Portfolio link" id="portfolio" width="md:w-full" onChange={(e) => { setField(e.target.value) }} tooltip={fieldError} />
                    <AreaInput onChange={(e) => { setField(e.target.value) }} tooltip={fieldError} />
                </div>
                <BlueBtn name="Next" />
            </form>
        </div>
    )
}