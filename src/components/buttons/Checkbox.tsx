interface Props {
  classes?: string;
  direction?: string;
  htmlFor: string;
  message: string;
  value: any;
  setValue: any;
  width: string;
}

const Checkbox: React.FC<Props> = ({
  classes,
  direction,
  htmlFor,
  value,
  setValue,
  message,
  width,
}) => {
  /*  */
  const onChange = (evt: any) => {
    setValue(evt.target.checked);
  };

  return (
    <div className={`grid ${classes} w-full mt-6`}>
      <div className={`flex ${direction} items-center pl-2 pr-4`}>
        <input
          className="ml-2 mr-2 focus:outline-none"
          type="checkbox"
          checked={value}
          onChange={onChange}
        />
        <label
          className={`${width} font-raleway font-light text-sm`}
          htmlFor={htmlFor}
        >
          <span className="text-gray-color">{message}</span>
        </label>
      </div>
    </div>
  );
};

export default Checkbox;
