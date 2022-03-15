import React, { useState } from "react";
import TextInput from "../inputs/TextInput";
import FileBtn from "../buttons/FileBtn";
import SelectInput from "../inputs/SelectInput";
import countries from "../../assets/json/countries.json";
import language from "../../assets/json/english.json";
import CheckInput from "../inputs/CheckInput";
import BlueBtn from "../../components/buttons/BlueBtn";

const FrmApplication: React.FC = () => {
  /* Custom json file call */
  const [selected, setSelected] = useState({
    country: countries,
    english: language,
  });

  const { country, english } = selected;

  return (
    <div className="container grid place-items-center -mt-8">
      <form className="w-7/12">
        <div className="flex flex-wrap -mx-3">
          <TextInput
            type="text"
            id="name"
            placeholder="Name"
            width="md:w-1/2"
          />
          <TextInput
            type="email"
            id="email"
            placeholder="Email"
            width="md:w-1/2"
          />
          <TextInput
            type="tel"
            id="phone"
            placeholder="Phone"
            width="md:w-1/3"
          />
          <SelectInput
            for="english"
            label=""
            data={english}
            placeholder="English level"
            width="md:w-1/3"
          />
          <SelectInput
            for="country"
            label=""
            data={country}
            placeholder="Country"
            width="md:w-1/3"
          />
          <FileBtn />
          <CheckInput />
          <BlueBtn name="Next" link="./thanks" />
        </div>
      </form>
    </div>
  );
};

export default FrmApplication;
