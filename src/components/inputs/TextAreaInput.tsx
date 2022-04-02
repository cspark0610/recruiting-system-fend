interface Props {
  id?: string;
  value: any;
  setValue?: any;
}

const TextAreaInput: React.FC<Props> = ({ id, setValue, value }) => {
  /* onChange function */
  const onChange = (evt: any) => {
    setValue(evt.target.value);
  };
  return (
    <div className="relative w-full p-3">
      <div className="bg-gray-200 border border-gray-200 p-4 rounded-2xl">
        <label className="text-sm font-normal text-gray-color font-raleway">
          Why are you interested in working with us: <br />
          <textarea
            className="mt-4 border-none bg-transparent resize-none w-full h-16 focus-visible:outline-none"
            id={id}
            maxLength={200}
            value={value}
            onChange={onChange}
          />
        </label>
      </div>
    </div>
  );
};

export default TextAreaInput;
