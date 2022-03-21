import React, { useState } from "react";
import { ErrorMessage } from "@hookform/error-message";
import { useForm } from "react-hook-form";
import SelectInput from "../input/SelectInput";
import TextInput from "../input/TextInput";
import FileButton from "../button/FileButton";
import RadioInput from "../input/RadioInput";
import SubmitButton from "../button/SubmitButton";
import EnglishLevel from "../../assets/json/EnglishLevels.json";
import Countries from "../../assets/json/Countries.json";

interface PropsValid {
  nameError: string;
  emailError: string;
  phoneError: string;
  linkedinError: string;
  portfolioError: string;
}

const FrmApplication: React.FC = () => {
  /* useState to assign an specific json file data */
  const [selected, setSelected] = useState({
    country: Countries,
    english: EnglishLevel,
  });

  const { country, english } = selected;

  /* validation form */
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<PropsValid>({ criteriaMode: "all" });

  const onSubmit = (data: PropsValid) => console.log(JSON.stringify(data));

  /* Validation inputs for specific data */
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [portfolio, setPortfolio] = useState("");

  /* functions for validation */
  const onlyNumber = (evt: any) => {
    const value = evt.target.value.replace(/\D/g, "");
    setPhone(value);
  };

  const NameValue = (evt: any) => {
    const value = evt.target.value.replace(/[0-9]/g, "");
    setName(value);
  };

  const EmailValue = (evt: any) => {
    const value = evt.target.value;
    setEmail(value);
  };

  const LinkedinValue = (evt: any) => {
    const value = evt.target.value;
    setLinkedin(value);
  };

  const PortfolioValue = (evt: any) => {
    const value = evt.target.value;
    setPortfolio(value);
  };

  return (
    <section className="container mx-auto grid place-items-center my-2">
      <h2 className="font-raleway font-semibold text-2xl text-cyan-color mb-8">
        Senior Designer
      </h2>
      <form className="w-8/12 bg-white">
        <div className="flex flex-wrap -mx-3 mb-10">
          <TextInput
            type="text"
            id="name"
            placeholder="Name"
            width="md:w-1/2"
            value={name}
            onChange={NameValue}
          />
          <TextInput
            type="email"
            id="email"
            placeholder="Email"
            width="md:w-1/2"
            value={email}
            onChange={EmailValue}
          />
          <TextInput
            type="text"
            id="phone"
            placeholder="Phone"
            width="md:w-1/3"
            value={phone}
            onChange={onlyNumber}
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
            type="text"
            id="linkedin"
            placeholder="Linkedin"
            width="md:w-1/2"
            value={linkedin}
            onChange={LinkedinValue}
          />
          <TextInput
            type="text"
            id="portfolio"
            placeholder="Portfolio Link"
            width="md:w-1/2"
            value={portfolio}
            onChange={PortfolioValue}
          />
          <FileButton />
          <RadioInput />
        </div>
        <SubmitButton name="Next" />
      </form>
    </section>
  );
};

export default FrmApplication;
