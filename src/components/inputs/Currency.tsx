import CurrencyInput from "react-currency-input-field";
import { useTranslation } from "react-i18next";
import Alert from "../extras/Alert";

interface Props {
  id: string;
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
    <div className={`${width} w-full p-3 mt-auto mb-3`}>
      <div className="relative">
        {showAlert && <Alert />}
        <CurrencyInput
          id={id}
          placeholder={placeholder}
          allowDecimals={false}
          className={`${
            showAlert
              ? "bg-white border-red-color border"
              : "bg-gray-200 border-gray-200 focus:border-cyan-color border"
          } focus:outline-none focus:bg-white block appearance-none rounded-2xl py-3 px-4 leading-tight w-full font-raleway text-gray-color`}
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
