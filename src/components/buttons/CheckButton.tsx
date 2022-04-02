interface Props {
  value: any;
  setValue?: any;
}

const CheckButton: React.FC<Props> = ({ value, setValue }) => {
  /* onChange function */
  const onChange = (evt: any) => {
    setValue(evt.target.value);
  };

  return (
    <div className="grid md:place-items-center place-items-start w-full mt-6">
      <label
        className="font-raleway font-light w-auto text-sm"
        htmlFor="agreetment"
      >
        <input
          className="ml-2 mr-2 focus:outline-none"
          type="checkbox"
          value={value}
          onChange={onChange}
        />
        <span className="text-gray-color">You must agree to </span>
        <span className="text-gray-color font-bold">terms and conditions</span>
      </label>
    </div>
  );
};

export default CheckButton;
