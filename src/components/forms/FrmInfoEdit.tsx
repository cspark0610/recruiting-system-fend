import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { render } from "@testing-library/react";

import SubmitButton from "../buttons/SubmitButton";
import SelectInput from "../inputs/SelectInput";
import SalaryInput from "../inputs/SalaryInput";
import TextAreaInput from "../inputs/TextAreaInput";
import AlertModal from "../extra/AlertModal";

import Skills from "../../assets/json/Skills.json";
import Training from "../../assets/json/College.json";
import Available from "../../assets/json/Available.json";

/* Redux */
import { useDispatch, useSelector } from "react-redux";
import { EditUserAction } from "../../actions/CandidateActions";

const FrmInfoEdit: React.FC = () => {
  /* */
  const navigate = useNavigate();
  const dispatch = useDispatch();

  /*  */
  const [info, setInfo] = useState({
    college: "",
    salary: "",
    available: "",
    skill: "",
    description: "",
  });

  const dataEdit = useSelector((state: any) => state.info.userEdit);

  useEffect(() => {
    setInfo(dataEdit);
  }, [dataEdit]);

  const onChangeForm = (evt: any) => {
    setInfo({
      ...info,
      [evt.target.id]: evt.target.value,
    });
  };

  /* Regular Expressions */
  const RegExp = {
    numbers: /\D/g,
  };

  /* json file information */
  const [optionValues] = useState({
    skills: Skills,
    training: Training,
    time: Available,
  });

  const { skills, training, time } = optionValues;

  /* Submit button */
  const onSubmit = (evt: any) => {
    evt.preventDefault();
  };
  return (
    <section className="grid place-items-center mt-2">
      <h2 className="font-raleway font-semibold text-gray-color text-xl sm:text-2xl mb-2 w-8/12">
        Hello Sebastian Montenegro Abad
      </h2>
      <form action="" onSubmit={onSubmit} className="w-8/12 bg-white p-2">
        <div className="flex flex-wrap -mx-3 mb-5">
          <SelectInput
            data={training}
            for="college"
            id="college"
            label="Choose your academic training"
            placeholder="Academic training"
            setValue={onChangeForm}
            value={dataEdit.college}
            width="md:w-1/2"
          />
          <SalaryInput
            id="salary"
            placeholder="Salary expectation"
            RegExp={RegExp.numbers}
            setValue={onChangeForm}
            value={dataEdit.salary}
            width="md:w-1/2"
          />
          <SelectInput
            data={time}
            for="available"
            id="available"
            label="Choose your availability"
            placeholder="Available from..."
            setValue={onChangeForm}
            value={dataEdit.available}
            width="md:w-1/2"
          />
          <SelectInput
            data={skills}
            for="skill"
            id="skill"
            label="Skill according your knowladge"
            placeholder="Skill"
            setValue={onChangeForm}
            value={dataEdit.skill}
            width="md:w-1/2"
          />
          <TextAreaInput
            id="description"
            setValue={dataEdit.setDescription}
            value={dataEdit.description}
          />
        </div>
        <SubmitButton name="Save" width="w-4/12" />
      </form>
    </section>
  );
};

export default FrmInfoEdit;
