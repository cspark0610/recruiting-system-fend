import ToolTip from "../extra/ToolTip";

interface Props {
  id: string;
  name: string;
  placeholder: string;
  RegExp: string | object;
  setValue?: any;
  showAlert?: any;
  type: string;
  value: any;
  width: string;
}

const TextInput: React.FC<Props> = ({
  id,
  name,
  placeholder,
  RegExp,
  setValue,
  showAlert,
  type,
  value,
  width,
}) => {
  /* onChange function */
  const onChange = (evt: any) => {
    setValue(evt.target.value.replace(RegExp, ""));
  };

  return (
    <div className={`${width} w-full p-3 mt-auto mb-3`}>
      <div className="relative">
        {showAlert && <ToolTip message="This field is required." />}
        <input
          className={`${
            showAlert
              ? "bg-white border-red-color border"
              : "bg-gray-200 border-gray-200 focus:border-cyan-color border"
          } focus:outline-none focus:bg-white block appearance-none rounded-2xl py-3 px-4 leading-tight w-full font-raleway text-gray-color`}
          type={type}
          id={id}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default TextInput;
