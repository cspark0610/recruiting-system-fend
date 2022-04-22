import CurrencyInput from "react-currency-input-field";
import { useTranslation } from "react-i18next";
import Alert from "../extras/Alert";

interface Props {
  id: string;
  label: string;
  placeholder: string;
  RegExp: string | object;
  setValue?: any;
  showAlert: any;
  value: string;
  width: string;
}

const Currency: React.FC<Props> = ({
  id,
  placeholder,
  label,
  RegExp,
  width,
  showAlert,
  setValue,
  value,
}) => {
  /*  */
  const { t } = useTranslation();

  const onChange = (evt: any) => {
    setValue(evt.target.value.replace(RegExp, ""));
  };

  const currency_value = `${t("currency_value")}`;

  return (
    <div className={`${width} w-full p-3 mt-auto`}>
      <div className="relative">
        <div className="laptop:hidden mobile:block tablet:hidden">
          <label
            htmlFor={label}
            className="font-raleway font-light text-sm text-gray-color ml-2"
          >
            {label}
          </label>
        </div>
        {showAlert && <Alert />}
        <CurrencyInput
          id={id}
          placeholder={placeholder}
          allowDecimals={false}
          className={`${
            showAlert
              ? "bg-white border-red-color border"
              : "bg-light-color border-light-color"
          } ${value && "border-cyan-color bg-light-blue"}
          focus:outline-none focus:bg-white block appearance-none laptop:rounded-2xl mobile:rounded-[10px] py-3 px-4 min-w-full laptop:w-[287px] laptop:h-[54px] mobile:w-[161px] mobile:h-[35px] leading-tight mobile:text-xs laptop:text-[15px] desktop:text-base font-raleway font-light text-gray-color focus:border-cyan-color border focus:shadow-cyan-color/50 focus:shadow-sm placeholder:text-gray-color placeholder:font-raleway`}
          prefix={currency_value}
          step={10}
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default Currency;
