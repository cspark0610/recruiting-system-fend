import React, { useState } from "react";
import { useForm } from "react-hook-form";
import SelectInput from "../input/SelectInput";
import CoinInput from "../input/CoinInput";
import TextInput from "../input/TextInput";
import SubmitButton from "../button/SubmitButton";
import AreaInput from "../input/AreaInput";
import Trainings from "../../assets/json/Trainings.json";
import Skills from "../../assets/json/Skills.json";

interface PropsValid {
  currencyError: string;
  availableError: string;
  areaError: string;
}

const FrmData: React.FC = () => {
  const [selected, setSelected] = useState({
    Training: Trainings,
    Skill: Skills,
  });

  const { Training, Skill } = selected;

  /* validation form */
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<PropsValid>({ criteriaMode: "all" });

  const onSubmit = (data: PropsValid) => console.log(JSON.stringify(data));

  /* Validation inputs for specific data */
  const [available, setAvailable] = useState("");

  /* function for validation */
  const AvailableValue = (evt: any) => {
    const value = evt.target.value;
    setAvailable(value);
  };

  return (
    <section className="container mx-auto grid place-items-center my-2">
      <h2 className="font-raleway font-semibold text-xl text-gray-color w-8/12 mb-2">
        Hello Sebastian Montenegro Abad
      </h2>
      <form className="w-8/12 bg-white">
        <div className="flex flex-wrap -mx-3 mb-10">
          <SelectInput
            for="training"
            label="Choose your academic training"
            data={Training}
            placeholder="Academic training"
            width="md:w-1/2"
          />
          <CoinInput placeholder="Salary expectation" width="md:w-1/2" />
          <TextInput
            type="text"
            id="available"
            placeholder="Available from..."
            width="md:w-1/2"
            value={available}
            onChange={AvailableValue}
          />
          <SelectInput
            for="skills"
            label="Skills according your knowladge"
            data={Skill}
            placeholder="Skills"
            width="md:w-1/2"
          />
          <AreaInput />
        </div>
        <SubmitButton name="Next" />
      </form>
    </section>
  );
};

export default FrmData;
