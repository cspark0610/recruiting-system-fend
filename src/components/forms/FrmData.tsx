import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { render } from "@testing-library/react";

/* Components */
import Modal from "../extras/Modal";

/* Paths */
import { VIEW_DETAILS } from "../../config/routes/paths";

/* Json files */
import Skills from "../../assets/json/Skills.json";
import Training from "../../assets/json/College.json";
import Available from "../../assets/json/Available.json";

/* Redux */
import { useDispatch, useSelector } from "react-redux";
import { AddCandidate } from "../../redux/candidates/actions/CandidateAction";
import Loading from "../extras/Loading";
import Submit from "../buttons/Submit";
import SingleSelect from "../inputs/SingleSelect";
import TextArea from "../inputs/TextArea";

const FrmData = () => {
  /*  */
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { t } = useTranslation();

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

  /* Values which will be validated */
  const [isCollegeValid, setIsCollegeValid] = useState(false);
  const [isSalaryValid, setIsSalaryValid] = useState(false);
  const [isSkillValid, setIsSkillValid] = useState(false);

  /*  */
  const AddNewCandidate = (user: any) => dispatch(AddCandidate(user));
  const loading = useSelector((state: any) => state.info.loading);
  const error = useSelector((state: any) => state.info.error);

  /* Function to store validation */
  const isFormValid = () => {
    college === "" ? setIsCollegeValid(true) : setIsCollegeValid(false);
    salary === "" ? setIsSalaryValid(true) : setIsSalaryValid(false);
    skill === "" ? setIsSkillValid(true) : setIsSkillValid(false);
  };

  /* OnSubmit */
  const onSubmit = (evt: any) => {
    evt.preventDefault();

    isFormValid();

    if (!college || !salary || !skill) {
      render(
        <Modal
          key={Math.random()}
          title={t("modal.title")}
          message={t("modal.message")}
          hide="hidden"
        />
      );
    } else {
      AddNewCandidate({
        college,
        salary,
        available,
        skill,
        description,
      });
      navigate(VIEW_DETAILS);
    }
  };

  const name_user = "Sebastian Montenegro Abad";

  return (
    <section className="grid place-items-center mt-2">
      <h2 className="font-raleway font-semibold text-gray-color text-xl sm:text-2xl mb-2 w-8/12">
        {t("info.title", { name_user })}
      </h2>
      <form action="" onSubmit={onSubmit} className="w-8/12 bg-white p-2">
        <div className="flex flex-wrap -mx-3 mb-5">
          <SingleSelect
            data={training}
            for="college"
            id="college"
            label={t("info.idiom.label")}
            placeholder={t("info.idiom.placeholder")}
            setValue={setCollege}
            showAlert={isCollegeValid}
            value={college}
            width="md:w-1/2"
          />
          {/* <SalaryInput
            placeholder="Salary expectation"
            RegExp={RegExp.numbers}
            setValue={setSalary}
            showAlert={isSalaryValid}
            value={salary}
            width="md:w-1/2"
          /> */}
          <SingleSelect
            data={time}
            for="available"
            id="available"
            label={t("info.available.label")}
            placeholder={t("info.available.placeholder")}
            setValue={setAvailable}
            value={available}
            width="md:w-1/2"
          />
          <SingleSelect
            data={skills}
            for="skill"
            id="skill"
            label={t("info.skill.label")}
            placeholder={t("info.skill.placeholder")}
            setValue={setSkill}
            showAlert={isSkillValid}
            value={skill}
            width="md:w-1/2"
          />
          <TextArea
            id="description"
            setValue={setDescription}
            value={description}
          />
        </div>
        <Submit name={t("submit_button.name")} width="w-4/12" />
      </form>
      {loading && <Loading />}
    </section>
  );
};

export default FrmData;