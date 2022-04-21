import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

/* Components */
import Loading from "../extras/Loading";
import Submit from "../buttons/Submit";
import SingleSelect from "../inputs/SingleSelect";
import TextArea from "../inputs/TextArea";
import Currency from "../inputs/Currency";

/* Paths */
import { VIEW_DETAILS } from "../../config/routes/paths";

/* Json files */
import Training from "../../assets/json/College.json";
import Available from "../../assets/json/Available.json";
import Skills from "../../assets/json/Skills.json";

/* Redux */
import { useDispatch, useSelector } from "react-redux";
import {
  AddCandidate,
  DataSaveEdit,
} from "../../redux/candidates/actions/CandidateAction";
import MultipleSelect from "../inputs/MultipleSelect";

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
    training: Training,
    time: Available,
    skills: Skills,
  });

  const { skills, training, time } = optionValues;

  const DataToEdit = useSelector((state: any) => state.info.user);

  /* States from the component */
  let [college, setCollege] = useState(DataToEdit.college);
  let [salary, setSalary] = useState(DataToEdit.salary);
  let [available, setAvailable] = useState(DataToEdit.available);
  //let [skill, setSkill] = useState(DataToEdit.skill);
  let [skill, setSkill] = useState<string[]>();
  let [description, setDescription] = useState(DataToEdit.description);

  /* Values which will be validated */
  const [isCollegeValid, setIsCollegeValid] = useState(false);
  const [isSalaryValid, setIsSalaryValid] = useState(false);
  const [isSkillValid, setIsSkillValid] = useState(false);

  /*  */
  const AddNewCandidate = (user: any) => dispatch(AddCandidate(user));
  const loading = useSelector((state: any) => state.info.loading);

  /* Function to store validation */
  const isFormValid = () => {
    college === "" ? setIsCollegeValid(true) : setIsCollegeValid(false);
    salary === "" ? setIsSalaryValid(true) : setIsSalaryValid(false);
    //skill === [""] ? setIsSkillValid(true) : setIsSkillValid(false);
  };

  /* OnSubmit */
  const onSubmit = (evt: any) => {
    evt.preventDefault();

    isFormValid();

    if (!college || !salary) {
      return;
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
    <section className="grid place-items-center h-full mt-10 bg-white mobile:p-5">
      <h2 className="font-raleway text-gray-color mobile:text-sm laptop:text-xl mb-3 mobile:w-full laptop:w-9/12">
        {t("info.title", { name_user })}
      </h2>
      <section className="laptop:w-9/12 mobile:w-full tablet:w-11/12 bg-white">
        <div className="flex flex-wrap -mx-3">
          <SingleSelect
            display="hidden"
            data={training}
            for="college"
            id="college"
            label={t("info.idiom.label")}
            placeholder={t("info.idiom.placeholder")}
            setValue={setCollege}
            showAlert={isCollegeValid}
            value={college}
            width="laptop:w-1/3 mobile:w-full tablet:w-1/2"
          />
          <Currency
            id="salary"
            label={t("info.currency.placeholder")}
            placeholder={t("info.currency.placeholder")}
            RegExp={RegExp.numbers}
            setValue={setSalary}
            showAlert={isSalaryValid}
            value={salary}
            width="laptop:w-1/3 mobile:w-1/2 tablet:w-1/2"
          />
          <SingleSelect
            display="hidden"
            data={time}
            for="available"
            id="available"
            label={t("info.available.label")}
            placeholder={t("info.available.placeholder")}
            setValue={setAvailable}
            value={available}
            width="laptop:w-1/3 mobile:w-1/2 tablet:w-1/2"
          />
          <MultipleSelect
            data={skills}
            display="flex"
            showAlert={isSkillValid}
            width="laptop:w-full mobile:w-full tablet:w-1/2"
          />
          <TextArea
            id="description"
            setValue={setDescription}
            value={description}
          />
        </div>
        <Submit
          name={t("submit_button.name")}
          width="w-full tablet:w-28"
          onSubmit={onSubmit}
        />
      </section>
      {loading && <Loading />}
    </section>
  );
};

export default FrmData;
