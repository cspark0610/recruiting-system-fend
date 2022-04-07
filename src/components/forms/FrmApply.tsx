import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { render } from "@testing-library/react";

/* Components */
import Text from "../inputs/Text";
import SingleSelect from "../inputs/SingleSelect";
import File from "../inputs/File";
import Checkbox from "../buttons/Checkbox";
import Submit from "../buttons/Submit";
import Loading from "../extras/Loading";
import Modal from "../extras/Modal";

/* Paths */
import { VIEW_HOME_THANKS } from "../../config/routes/paths";

/* Json files */
import Countries from "../../assets/json/Countries.json";
import English from "../../assets/json/Language.json";

/* Redux */
import { useDispatch, useSelector } from "react-redux";
import { AddUser } from "./../../redux/users/actions/UserAction";

const FrmApply = () => {
  /*  */
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { t } = useTranslation();

  /* Regular Expressions */
  const RegExp = {
    general: /^\s*/,
    characters: /[0-9]/g,
    numbers: /\D/g,
  };

  /* json file information */
  const [optionValues] = useState({
    country: Countries,
    english: English,
  });

  const { country, english } = optionValues;

  /* States from the component */
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [idiom, setIdiom] = useState("");
  const [nation, setNation] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [portfolio, setPortfolio] = useState("");
  const [resume, setResume] = useState<File>();
  const [terms, setTerms] = useState(false);

  /* Values which will be validated */
  const [isNameValid, setIsNameValid] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPhoneValid, setIsPhoneValid] = useState(false);
  const [isIdiomValid, setIsIdiomValid] = useState(false);
  const [isNationValid, setIsNationValid] = useState(false);
  const [isResumeValid, setIsResumeValid] = useState(false);
  const [isTermsValid, setIsTermsValid] = useState(false);

  /*  */
  const AddNewUser = (user: any) => dispatch(AddUser(user));
  const loading = useSelector((state: any) => state.data.loading);
  const error = useSelector((state: any) => state.data.error);

  /* Function to store validation */
  const isFormValid = () => {
    name === "" ? setIsNameValid(true) : setIsNameValid(false);
    email === "" ? setIsEmailValid(true) : setIsEmailValid(false);
    phone === "" ? setIsPhoneValid(true) : setIsPhoneValid(false);
    idiom === "" ? setIsIdiomValid(true) : setIsIdiomValid(false);
    nation === "" ? setIsNationValid(true) : setIsNationValid(false);
    terms === false ? setIsTermsValid(true) : setIsTermsValid(false);
  };

  /* OnSubmit */
  const onSubmit = (evt: any) => {
    evt.preventDefault();

    isFormValid();

    if (!name || !email || !phone || !idiom || !nation || !terms) {
      render(
        <Modal
          key={Math.random()}
          title={t("modal.title")}
          message={t("modal.message")}
          hide="hidden"
        />
      );
    } else {
      AddNewUser({
        name,
        email,
        phone,
        idiom,
        nation,
        linkedin,
        portfolio,
        resume,
        terms,
      });
      navigate(VIEW_HOME_THANKS);
    }
  };

  return (
    <section className="grid place-items-center h-full">
      <h2 className="font-raleway font-semibold text-cyan-color mb-5 text-xl sm:text-2xl 2xl:text-3xl">
        {t("senior_designer")}
      </h2>
      <form action="" onSubmit={onSubmit} className="w-8/12 bg-white p-2">
        <div className="flex flex-wrap -mx-3 mb-5">
          <Text
            id="name"
            name="name"
            placeholder={t("data.name")}
            RegExp={RegExp.characters}
            setValue={setName}
            showAlert={isNameValid}
            type="text"
            value={name}
            width="md:w-1/2"
          />
          <Text
            id="email"
            name="email"
            placeholder={t("data.email")}
            RegExp={RegExp.general}
            setValue={setEmail}
            showAlert={isEmailValid}
            type="email"
            value={email}
            width="md:w-1/2"
          />
          <Text
            id="phone"
            name="phone"
            placeholder={t("data.phone")}
            RegExp={RegExp.numbers}
            setValue={setPhone}
            showAlert={isPhoneValid}
            type="text"
            value={phone}
            width="md:w-1/3"
          />
          <SingleSelect
            data={english}
            id="idiom"
            for="idiom"
            label={t("data.idiom.label")}
            placeholder={t("data.idiom.placeholder")}
            setValue={setIdiom}
            showAlert={isIdiomValid}
            value={idiom}
            width="md:w-1/3"
          />
          <SingleSelect
            data={country}
            id="country"
            for="country"
            label={t("data.nation.label")}
            placeholder={t("data.nation.placeholder")}
            setValue={setNation}
            showAlert={isNationValid}
            value={nation}
            width="md:w-1/3"
          />
          <Text
            id="linkedin"
            name="linkedin"
            placeholder={t("data.linkedin")}
            RegExp={""}
            setValue={setLinkedin}
            type="text"
            value={linkedin}
            width="md:w-1/2"
          />
          <Text
            id="portfolio"
            name="portfolio"
            placeholder={t("data.portfolio")}
            RegExp={""}
            setValue={setPortfolio}
            type="text"
            value={portfolio}
            width="md:w-1/2"
          />
          <File value={resume} setValue={setResume} />
          <Checkbox
            classes="place-items-center"
            htmlFor="agreetment"
            message={t("term_description")}
            value={terms}
            setValue={setTerms}
            width="w-auto"
          />
        </div>
        <Submit name={t("submit_button.name")} width="w-full" />
      </form>
      {loading && <Loading />}
    </section>
  );
};

export default FrmApply;
