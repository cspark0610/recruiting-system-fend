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
import { VIEW_DETAILS, VIEW_VIDEO_COMPLETED } from "../../config/routes/paths";

/* Json files */
import Training from "../../assets/json/College.json";
import Available from "../../assets/json/Available.json";
import Skills from "../../assets/json/Skills.json";
import Coins from "../../assets/json/Coin.json";

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
    coins: Coins,
  });

  const { skills, training, time, coins } = optionValues;

  const DataToEdit = useSelector((state: any) => state.info.user);
  const toEdit = useSelector((state: any) => state.info.isToEdit);
  const userID = useSelector((state: any) => state.info.userId);

  /* States from the component */
  let [college, setCollege] = useState(DataToEdit.college);
  let [currency, setCurrency] = useState(DataToEdit.currency);
  let [salary, setSalary] = useState(DataToEdit.salary);
  let [available, setAvailable] = useState(DataToEdit.available);
  let [skill, setSkill] = useState(DataToEdit.skill);
  let [description, setDescription] = useState(DataToEdit.description);

  /* Values which will be validated */
  const [isCollegeValid, setIsCollegeValid] = useState(false);
  const [isCurrencyValid, setIsCurrencyValid] = useState(false);
  const [isSalaryValid, setIsSalaryValid] = useState(false);
  const [isSkillValid, setIsSkillValid] = useState(false);

  /*  */
  const AddNewCandidate = (user: any) => dispatch(AddCandidate(user));
  const EditDataCandidate = (user: any) => dispatch(DataSaveEdit(user, userID));
  const loading = useSelector((state: any) => state.info.loading);

  /* Function to store validation */
  const isFormValid = () => {
    college === "" ? setIsCollegeValid(true) : setIsCollegeValid(false);
    currency === "" ? setIsCurrencyValid(true) : setIsCurrencyValid(false);
    salary === "" ? setIsSalaryValid(true) : setIsSalaryValid(false);
    !skill ? setIsSkillValid(true) : setIsSkillValid(false);
  };

  /* FORM DATA */
  const formData = new FormData();
  formData.append("academic_training", college);
  formData.append("salary_expectations", salary);
  formData.append("available_from", available);
  formData.append("skill", skill);
  formData.append("working_reason", description);

  /* OnSubmit */
  const onSubmit = (evt: any) => {
    evt.preventDefault();

    isFormValid();

    if (!college || !currency || !salary || !skill) {
      return;
    } else {
      AddNewCandidate(formData);
      navigate(VIEW_DETAILS);
    }
  };

  const handleEditClick = (evt: any) => {
    evt.preventDefault();

    isFormValid();

    if (!salary || !skill) {
      return;
    } else {
      EditDataCandidate(formData);
      navigate(VIEW_VIDEO_COMPLETED);
    }
  };

  const handleCancelClick = () => {
    navigate(VIEW_VIDEO_COMPLETED);
  };

  const name_user = "Sebastian Montenegro Abad";

  return (
    <section className="grid place-items-center h-full mt-10 bg-white mobile:p-5">
      <h2 className="font-raleway text-gray-color mobile:text-sm laptop:text-xl mb-3 mobile:w-full laptop:w-9/12 tablet:w-11/12">
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
            width="laptop:w-1/3 mobile:w-full tablet:w-1/3"
          />
          <Currency
            id="salary"
            label={t("info.currency.placeholder")}
            placeholder={t("info.currency.placeholder")}
            RegExp={RegExp.numbers}
            setValue={setSalary}
            showAlert={isSalaryValid}
            value={salary}
            data={coins}
            coin={currency}
            setCoin={setCurrency}
            width="laptop:w-1/3 mobile:w-1/2 tablet:w-1/3"
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
            width="laptop:w-1/3 mobile:w-1/2 tablet:w-1/3"
          />
          <MultipleSelect
            data={skills}
            display="flex"
            showAlert={isSkillValid}
            value={skill}
            setValue={setSkill}
            width="laptop:w-full mobile:w-full tablet:w-full"
          />
          <TextArea
            id="description"
            setValue={setDescription}
            value={description}
          />
        </div>
        {!toEdit ? (
          <Submit
            name={t("submit_button.name")}
            width="w-full tablet:w-28"
            onSubmit={onSubmit}
          />
        ) : (
          <div className="flex justify-center">
            <Submit
              name="Cancel"
              width="w-full tablet:w-28 mx-2 bg-transparent text-cyan-color border-cyan-color border hover:bg-transparent shadow-none"
              onSubmit={handleCancelClick}
            />
            <Submit
              name="Save"
              width="w-full tablet:w-28 mx-2"
              onSubmit={handleEditClick}
            />
          </div>
        )}
      </section>
      {loading && <Loading />}
    </section>
  );
};

export default FrmData;
