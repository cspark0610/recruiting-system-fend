import Alert from "../extras/Alert";

interface Props {
  id: string;
  label?: string;
  name: string;
  placeholder: string;
  RegExp: string | object;
  setValue: any;
  showAlert?: any;
  type: string;
  value: any;
  width: string;
}

const Text: React.FC<Props> = ({
  id,
  label,
  name,
  placeholder,
  RegExp,
  setValue,
  showAlert,
  type,
  value,
  width,
}) => {
  /*  */
  const onChange = (evt: any) => {
    setValue(evt.target.value.replace(RegExp, ""));
  };

  return (
    <div className={`${width} p-3 mt-auto`}>
      <div className="relative">
        {showAlert && <Alert />}
        <div className="mobile:block laptop:hidden tablet:hidden">
          <label
            htmlFor={id}
            className="font-raleway font-light text-sm text-gray-color ml-2"
          >
            {label}
          </label>
        </div>
        <input
          className={`${
            showAlert
              ? "bg-white border-red-color border"
              : "bg-light-color border-light-color"
          } ${value && "border-cyan-color bg-light-blue"}
          focus:outline-none focus:bg-white block appearance-none mobile:rounded-[10px] laptop:rounded-2xl py-3 px-4 min-w-full laptop:w-[287px] laptop:h-[54px] mobile:w-[162px] mobile:h-[35px] tablet:w-[241px] tablet:h-[54px] leading-tight mobile:text-xs tablet:text-[15px] laptop:text-[15px] font-light font-raleway text-gray-color focus:border-cyan-color border focus:shadow-cyan-color/50 focus:shadow-md placeholder:text-gray-color`}
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

export default Text;
