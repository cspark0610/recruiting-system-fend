import React, { useState } from "react";
import TextInput from "../inputs/TextInput";
import AreaInput from "../inputs/AreaInput";
import SubmitBtn from "../buttons/SubmitBtn";
import SelectInput from "../inputs/SelectInput";
import training from "../../assets/json/training.json";
import skills from "../../assets/json/skills.json";
import CoinInput from "../inputs/CoinInput";

const FrmSurvey: React.FC = () => {
  /* Custom json file call */
  const [selected, setSelected] = useState({
    academic: training,
    skill: skills,
  });

  const { academic, skill } = selected;

  return (
    <section className="container grid place-items-center my-2">
      <h2 className="font-raleway font-normal text-xl text-font-color w-7/12 mb-2">
        Hello Sebastian Montenegro Abad
      </h2>
      <form className="w-7/12 bg-white">
        <div className="flex flex-wrap -mx-3">
          <SelectInput
            for="training"
            label="Choose your academic training"
            data={academic}
            placeholder="Academic training"
            width="md:w-1/2"
          />
          <CoinInput placeholder="Salary expectation" width="md:w-1/2" />
          <TextInput
            type="text"
            id="available"
            placeholder="Available from..."
            width="md:w-1/2"
          />
          <SelectInput
            for="skills"
            label="Skills according your knowladge:"
            data={skill}
            placeholder="Skills"
            width="md:w-1/2"
          />
          <AreaInput />
        </div>
        <SubmitBtn name="Next" />
      </form>
    </section>
  );
};

export default FrmSurvey;
