import React, { useState } from "react";
import { ErrorMessage } from "@hookform/error-message";
import { useForm } from "react-hook-form";
import FileBtn from "../buttons/FileBtn";
import SelectInput from "../inputs/SelectInput";
import CheckInput from "../inputs/CheckInput";
import SubmitBtn from "../buttons/SubmitBtn";
import ToolTip from "../extras/ToolTip";
import "../../assets/scss/ErrorMessage.scss";
import language from "../../assets/json/english.json";
import countries from "../../assets/json/countries.json";
import TextInput from "../inputs/TextInput";

interface IFormInputs {
  multipleErrorInput: string;
  nameError: string;
  emailError: string;
}

const FrmApplication: React.FC = () => {
  /* Custom json file call */
  const [selected, setSelected] = useState({
    country: countries,
    english: language,
  });

  const { country, english } = selected;

  /* Validation */
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormInputs>({ criteriaMode: "all" });

  const onSubmit = (data: IFormInputs) => console.log(JSON.stringify(data));

  /* Input which allows only numbers */
  const [phone, setPhone] = useState<string | undefined>();
  const [linkedin, setLinkedin] = useState("");
  const [portfolio, setPortfolio] = useState("");

  const handleChangePhone = (evt: any) => {
    const value = evt.target.value.replace(/\D/g, "");
    setPhone(value);
  };

  return (
    <section className="container grid place-items-center my-2">
      <h2 className="font-raleway font-semibold text-primary-color text-2xl mb-8">
        Senior Designer
      </h2>
      <form className="w-7/12 bg-white" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-wrap -mx-3 mb-10">
          <div className="md:w-1/2 w-full p-3">
            <ErrorMessage
              errors={errors}
              name="nameError"
              render={({ messages }) => {
                return messages
                  ? Object.entries(messages).map(([type, message]) => (
                      <ToolTip key={type} message={message} />
                    ))
                  : null;
              }}
            />
            <input
              type="text"
              id="name"
              placeholder="Name"
              className="font-raleway appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              {...register("nameError", {
                required: "This field is required.",
                pattern: {
                  value: /^[a-zA-Z ]+$/,
                  message: "This field is letters only",
                },
              })}
            />
          </div>
          <div className="md:w-1/2 w-full p-3">
            <ErrorMessage
              errors={errors}
              name="emailError"
              render={({ messages }) => {
                return messages
                  ? Object.entries(messages).map(([type, message]) => (
                      <ToolTip key={type} message={message} />
                    ))
                  : null;
              }}
            />
            <input
              type="email"
              id="email"
              placeholder="Email"
              className="font-raleway appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              {...register("emailError", {
                required: "This field is required.",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address.",
                },
              })}
            />
          </div>
          <TextInput
            type="text"
            id="phone"
            placeholder="Phone"
            width="md:w-1/3"
            value={phone}
            onChange={handleChangePhone}
          />
          <SelectInput
            for="english"
            label="Choose your english level"
            data={english}
            placeholder="English level"
            width="md:w-1/3"
          />
          <SelectInput
            for="country"
            label="Choose your country"
            data={country}
            placeholder="Country"
            width="md:w-1/3"
          />
          <TextInput
            type="url"
            id="linkedin"
            placeholder="Linkedin"
            width="md:w-1/2"
            value={linkedin}
          />
          <TextInput
            type="url"
            id="portfolio"
            placeholder="Portfolio Link"
            width="md:w-1/2"
            value={portfolio}
          />
          <FileBtn />
          <CheckInput />
        </div>
        <SubmitBtn name="Next" />
      </form>
    </section>
  );
};

export default FrmApplication;
function evt(evt: any): any {
  throw new Error("Function not implemented.");
}
