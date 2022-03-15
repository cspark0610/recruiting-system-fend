import React, { useState } from "react";
import TextInput from "../inputs/TextInput";
import FileBtn from "../buttons/FileBtn";
import SelectInput from "../inputs/SelectInput";
import training from "../../assets/json/training.json";
import AreaInput from "../inputs/AreaInput";
import BlueBtn from "../../components/buttons/BlueBtn";

const FrmSurvey: React.FC = () => {
  /* Custom json file call */
  const [selected, setSelected] = useState({
    academic: training,
  });

  const { academic } = selected;

  return (
    <div className="container grid place-items-center mt-10">
      <form className="w-7/12">
        <div className="flex flex-wrap -mx-3">
          <SelectInput
            for="training"
            label=""
            data={academic}
            placeholder="Academic training"
            width="md:w-1/2"
          />
          <TextInput
            type="text"
            id="salary"
            placeholder="Salary expectation"
            width="md:w-1/2"
          />
          <TextInput
            type="url"
            id="linkedin"
            placeholder="Linkedin"
            width="md:w-1/2"
          />
          <TextInput
            type="url"
            id="portfolio"
            placeholder="Portfolio Link"
            width="md:w-1/2"
          />
          <AreaInput />
          <BlueBtn name="Next" link="./details" />
        </div>
      </form>
    </div>
  );
};

export default FrmSurvey;
