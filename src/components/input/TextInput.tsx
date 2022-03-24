import React from "react";
import "../../assets/sass/ToolTip.scss";

interface Props {
  id: string;
  messageError: string;
  placeholder: string;
  RegExp: string | object;
  setValue?: any;
  type: string;
  value: any;
  width: string;
}

const TextInput: React.FC<Props> = ({
  id,
  messageError,
  placeholder,
  RegExp,
  setValue,
  type,
  value,
  width,
}) => {
  /* functions */
  const onChange = (evt: any) => {
    setValue({ ...value, field: evt.target.value.replace(RegExp, "") });
  };

  const isValid = () => {
    if (!value.field) {
      setValue({ ...value, isInputValid: true });
    } else {
      setValue({ ...value, isInputValid: false });
    }
  };

  return (
    <div className={`${width} w-full p-3 mt-auto mb-3`}>
      <div className="relative">
        {value.isInputValid && (
          <div className="container-tooltip">
            <div className="tooltip">
              <p>{messageError}</p>
            </div>
            <div className="vector"></div>
          </div>
        )}
        <input
          className={`${
            value.isInputValid
              ? "bg-white border-red-color border"
              : "bg-gray-200 border-gray-200 focus:border-indigo-500 border"
          } block w-full appearance-none font-raleway text-gray-color rounded-2xl py-3 px-4 leading-tight focus:outline-none focus:bg-white`}
          id={id}
          placeholder={placeholder}
          type={type}
          value={value.field}
          onChange={onChange}
          onKeyUp={isValid}
          onBlur={isValid}
        />
      </div>
    </div>
  );
};

export default TextInput;
