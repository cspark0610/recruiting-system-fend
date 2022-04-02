import CurrencyInput from "react-currency-input-field";
import ToolTip from "../extra/ToolTip";

interface Props {
  id?: string;
  placeholder: string;
  RegExp: string | object;
  setValue?: any;
  showAlert?: any;
  value: any;
  width: string;
}

const SalaryInput: React.FC<Props> = ({
  id,
  placeholder,
  RegExp,
  width,
  showAlert,
  setValue,
  value,
}) => {
  /* onChange function */
  const onChange = (evt: any) => {
    setValue(evt.target.value.replace(RegExp, ""));
  };

  return (
    <div className={`${width} w-full p-3 mt-auto mb-2`}>
      <div className="relative">
        {showAlert && <ToolTip message="This field is required." />}
        <CurrencyInput
          id={id}
          placeholder={placeholder}
          allowDecimals={false}
          className={`${
            showAlert
              ? "bg-white border-red-color border"
              : "bg-gray-200 border-gray-200 focus:border-cyan-color border"
          } focus:outline-none focus:bg-white block appearance-none rounded-2xl py-3 px-4 leading-tight w-full font-raleway text-gray-color`}
          prefix={"$ "}
          step={10}
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default SalaryInput;
