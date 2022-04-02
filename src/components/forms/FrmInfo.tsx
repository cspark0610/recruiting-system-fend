import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { render } from "@testing-library/react";

import SubmitButton from "../buttons/SubmitButton";
import SelectInput from "../inputs/SelectInput";
import SalaryInput from "../inputs/SalaryInput";
import TextAreaInput from "../inputs/TextAreaInput";
import AlertModal from "../extra/AlertModal";
import Spinner from "../extra/Spinner";

import Skills from "../../assets/json/Skills.json";
import Training from "../../assets/json/College.json";
import Available from "../../assets/json/Available.json";

/* Redux */
import { useDispatch, useSelector } from "react-redux";
import { AddNewCandidate } from "../../actions/CandidateActions";

const FrmInfo: React.FC = () => {
  /* */
  const navigate = useNavigate();
  const dispatch = useDispatch();

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

  /* States from the component */
  const [college, setCollege] = useState("");
  const [salary, setSalary] = useState("");
  const [available, setAvailable] = useState("");
  const [skill, setSkill] = useState("");
  const [description, setDescription] = useState("");

  const [isCollegeValid, setIsCollegeValid] = useState(false);
  const [isSalaryValid, setIsSalaryValid] = useState(false);
  const [isSkillValid, setIsSkillValid] = useState(false);

  /* Functions from CandidateActions */
  const addNewCandidate = (user: any) => dispatch(AddNewCandidate(user));

  /* CandidateActions */
  const error = useSelector((state: any) => state.info.error);
  const loading = useSelector((state: any) => state.info.loading);

  const isFormValid = () => {
    college === "" ? setIsCollegeValid(true) : setIsCollegeValid(false);
    salary === "" ? setIsSalaryValid(true) : setIsSalaryValid(false);
    skill === "" ? setIsSkillValid(true) : setIsSkillValid(false);
  };

  /* Submit button */
  const onSubmit = (evt: any) => {
    /*  */
    evt.preventDefault();

    isFormValid();

    if (!college || !salary || !skill) {
      render(
        <AlertModal
          key={Math.random()}
          title="Warning!"
          message="You must to complete all empty fields."
          hide="hidden"
        />
      );
    } else {
      addNewCandidate({
        college,
        salary,
        available,
        skill,
        description,
      });
      navigate("/welcome/before-starting");
    }
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
            label="Choose your academic training"
            placeholder="Academic training"
            setValue={setCollege}
            showAlert={isCollegeValid}
            value={college}
            width="md:w-1/2"
          />
          <SalaryInput
            placeholder="Salary expectation"
            RegExp={RegExp.numbers}
            setValue={setSalary}
            showAlert={isSalaryValid}
            value={salary}
            width="md:w-1/2"
          />
          <SelectInput
            data={time}
            for="available"
            label="Choose your availability"
            placeholder="Available from..."
            setValue={setAvailable}
            value={available}
            width="md:w-1/2"
          />
          <SelectInput
            data={skills}
            for="skill"
            label="Skill according your knowladge"
            placeholder="Skill"
            setValue={setSkill}
            showAlert={isSkillValid}
            value={skill}
            width="md:w-1/2"
          />
          <TextAreaInput setValue={setDescription} value={description} />
        </div>
        <SubmitButton name="next" width="w-4/12" />
      </form>
      {loading && <Spinner />}
    </section>
  );
};

export default FrmInfo;
