import React, { useEffect, useState } from "react";
import SelectInput from "../input/SelectInput";
import TextInput from "../input/TextInput";
import FileButton from "../button/FileButton";
import RadioInput from "../input/RadioInput";
import SubmitButton from "../button/SubmitButton";
import EnglishLevel from "../../assets/json/EnglishLevels.json";
import Countries from "../../assets/json/Countries.json";
import { render } from "@testing-library/react";

const FrmApplication: React.FC = () => {
  /* useState to assign an specific json file data */
  const [selected] = useState({
    country: Countries,
    english: EnglishLevel,
  });

  const { country, english } = selected;

  /* Validation inputs for specific data */
  const [name, setName] = useState({ field: "", isInputValid: null });
  const [email, setEmail] = useState({ field: "", isInputValid: null });
  const [phone, setPhone] = useState({ field: "", isInputValid: null });
  const [idiom, setIdiom] = useState({ field: "", isSelectValid: false });
  const [nation, setNation] = useState({ field: "", isSelectValid: false });
  const [linkedin, setLinkedin] = useState({ field: "", isInputValid: null });
  const [portfolio, setPortfolio] = useState({ field: "", isInputValid: null });
  const [isFormValid, setIsFormValid] = useState<boolean>(true);

  /* Regular Expressions */
  const RegExp = {
    general: /^[a-zA-Z0-9_-]{4,16}$/,
    characters: /[0-9]/g,
    numbers: /\D/g,
  };

  const onSubmit = (evt: any) => {
    evt.preventDefault();

    if (idiom.isSelectValid || nation.isSelectValid) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  };

  return (
    <section className="container mx-auto grid place-items-center my-2">
      <h2 className="font-raleway font-semibold text-2xl text-cyan-color mb-8">
        Senior Designer
      </h2>
      <form className="w-8/12 bg-white" onSubmit={onSubmit}>
        <div className="flex flex-wrap -mx-3 mb-10">
          <TextInput
            id="name"
            messageError="This field is required"
            placeholder="Name"
            RegExp={RegExp.characters}
            setValue={setName}
            type="text"
            value={name}
            width="md:w-1/2"
          />
          <TextInput
            id="email"
            messageError="This field is required"
            placeholder="Email"
            RegExp={""}
            setValue={setEmail}
            type="email"
            value={email}
            width="md:w-1/2"
          />
          <TextInput
            id="phone"
            messageError="This field is required"
            placeholder="Phone"
            RegExp={RegExp.numbers}
            setValue={setPhone}
            type="text"
            value={phone}
            width="md:w-1/3"
          />
          <SelectInput
            data={english}
            for="english"
            label="Choose your english level"
            messageError="This field is required"
            placeholder="English level"
            width="md:w-1/3"
            value={idiom}
            setValue={setIdiom}
            showAlert={isFormValid}
          />
          <SelectInput
            data={country}
            for="country"
            label="Choose your country"
            messageError="This field is required"
            placeholder="Country"
            width="md:w-1/3"
            value={nation}
            setValue={setNation}
            showAlert={isFormValid}
          />
          <TextInput
            id="linkedin"
            messageError="This field is required"
            placeholder="Linkedin"
            RegExp={""}
            setValue={setLinkedin}
            type="text"
            value={linkedin}
            width="md:w-1/2"
          />
          <TextInput
            id="portfolio"
            messageError="This field is required"
            placeholder="Portfolio Link"
            RegExp={""}
            setValue={setPortfolio}
            type="text"
            value={portfolio}
            width="md:w-1/2"
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
