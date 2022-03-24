import React, { useState } from "react";
import SelectInput from "../input/SelectInput";
import CoinInput from "../input/CoinInput";
import TextInput from "../input/TextInput";
import SubmitButton from "../button/SubmitButton";
import AreaInput from "../input/AreaInput";
import Trainings from "../../assets/json/Trainings.json";
import Skills from "../../assets/json/Skills.json";

const FrmData: React.FC = () => {
  const [selected] = useState({
    Training: Trainings,
    Skill: Skills,
  });

  const { Training, Skill } = selected;

  /* Validation inputs for specific data */
  const [available, setAvailable] = useState({ field: "", isInputValid: null });
  const [college, setCollege] = useState({ field: "", isSelectValid: false });
  const [ability, setAbility] = useState({ field: "", isSelectValid: false });
  const [isFormValid, setIsFormValid] = useState<boolean>(true);

  const onSubmit = (evt: any) => {
    evt.preventDefault();

    if (college.isSelectValid || ability.isSelectValid) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  };

  return (
    <section className="container mx-auto grid place-items-center my-2">
      <h2 className="font-raleway font-semibold text-xl text-gray-color w-8/12 mb-2">
        Hello Sebastian Montenegro Abad
      </h2>
      <form className="w-8/12 bg-white" onSubmit={onSubmit}>
        <div className="flex flex-wrap -mx-3 mb-10">
          <SelectInput
            for="training"
            label="Choose your academic training"
            data={Training}
            placeholder="Academic training"
            width="md:w-1/2"
            value={college}
            setValue={setCollege}
            showAlert={isFormValid}
            messageError="This field is required"
          />
          <CoinInput placeholder="Salary expectation" width="md:w-1/2" />
          <TextInput
            id="available"
            messageError="This field is required"
            placeholder="Available from..."
            RegExp={""}
            setValue={setAvailable}
            type="text"
            value={available}
            width="md:w-1/2"
          />
          <SelectInput
            for="skills"
            label="Skills according your knowladge"
            data={Skill}
            placeholder="Skills"
            width="md:w-1/2"
            value={ability}
            setValue={setAbility}
            showAlert={isFormValid}
            messageError="This field is required"
          />
          <AreaInput />
        </div>
        <SubmitButton name="Next" />
      </form>
    </section>
  );
};

export default FrmData;
