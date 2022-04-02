import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { render } from "@testing-library/react";

/* Components */
import TextInput from "../inputs/TextInput";
import SelectInput from "../inputs/SelectInput";
import FileInput from "../inputs/FileInput";
import CheckButton from "../buttons/CheckButton";
import SubmitButton from "../buttons/SubmitButton";
import AlertModal from "../extra/AlertModal";
import Spinner from "../extra/Spinner";

/* Json files */
import Countries from "../../assets/json/Countries.json";
import English from "../../assets/json/Language.json";

/* Redux */
import { useDispatch, useSelector } from "react-redux";
import { AddNewUser } from "../../actions/UserActions";

const FrmApply: React.FunctionComponent = () => {
  /*  */
  const navigate = useNavigate();
  const dispatch = useDispatch();

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
  const [terms, setTerms] = useState<Boolean>(false);

  const [isNameValid, setIsNameValid] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPhoneValid, setIsPhoneValid] = useState(false);
  const [isIdiomValid, setIsIdiomValid] = useState(false);
  const [isNationValid, setIsNationValid] = useState(false);
  const [isResumeValid, setIsResumeValid] = useState(false);

  /* Functions from UserActions */
  const AddUser = (user: any) => dispatch(AddNewUser(user));

  /* UserActions */
  const error = useSelector((state: any) => state.data.error);
  const loading = useSelector((state: any) => state.data.loading);

  const isFormValid = () => {
    name === "" ? setIsNameValid(true) : setIsNameValid(false);
    email === "" ? setIsEmailValid(true) : setIsEmailValid(false);
    phone === "" ? setIsPhoneValid(true) : setIsPhoneValid(false);
    idiom === "" ? setIsIdiomValid(true) : setIsIdiomValid(false);
    nation === "" ? setIsNationValid(true) : setIsNationValid(false);
    !resume ? setIsResumeValid(true) : setIsResumeValid(false);
  };

  /* Submit button */
  const onSubmit = (evt: any) => {
    /*  */
    evt.preventDefault();

    isFormValid();

    if (!name || !email || !phone || !idiom || !nation) {
      render(
        <AlertModal
          key={Math.random()}
          title="Warning!"
          message="You must to complete all empty fields."
          hide="hidden"
        />
      );
    } else {
      AddUser({
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
      navigate("/home/thank-you");
    }
  };

  return (
    <section className="grid place-items-center">
      <h2 className="font-raleway font-semibold text-cyan-color mb-5 text-xl sm:text-2xl">
        Senior Designer
      </h2>
      <form action="" onSubmit={onSubmit} className="w-8/12 bg-white p-2">
        <div className="flex flex-wrap -mx-3 mb-5">
          <TextInput
            id="name"
            name="name"
            placeholder="Name"
            RegExp={RegExp.characters}
            setValue={setName}
            showAlert={isNameValid}
            type="text"
            value={name}
            width="md:w-1/2"
          />
          <TextInput
            id="email"
            name="email"
            placeholder="Email"
            RegExp={RegExp.general}
            setValue={setEmail}
            showAlert={isEmailValid}
            type="email"
            value={email}
            width="md:w-1/2"
          />
          <TextInput
            id="phone"
            name="phone"
            placeholder="Phone"
            RegExp={RegExp.numbers}
            setValue={setPhone}
            showAlert={isPhoneValid}
            type="text"
            value={phone}
            width="md:w-1/3"
          />
          <SelectInput
            data={english}
            for="idiom"
            label="Choose your English level"
            placeholder="English level"
            setValue={setIdiom}
            showAlert={isIdiomValid}
            value={idiom}
            width="md:w-1/3"
          />
          <SelectInput
            data={country}
            for="country"
            label="Choose your country"
            placeholder="Country"
            setValue={setNation}
            showAlert={isNationValid}
            value={nation}
            width="md:w-1/3"
          />
          <TextInput
            id="linkedin"
            name="linkedin"
            placeholder="Linkedin"
            RegExp={""}
            setValue={setLinkedin}
            type="text"
            value={linkedin}
            width="md:w-1/2"
          />
          <TextInput
            id="portfolio"
            name="portfolio"
            placeholder="Link's Portfolio"
            RegExp={""}
            setValue={setPortfolio}
            type="text"
            value={portfolio}
            width="md:w-1/2"
          />
          <FileInput value={resume} setValue={setResume} />
          <CheckButton value={terms} setValue={setTerms} />
        </div>
        <SubmitButton name="next" width="w-full" />
      </form>
      {loading && <Spinner />}
    </section>
  );
};

export default FrmApply;
