interface Props {
  id: string;
  name: string;
  placeholder: string;
  value: any;
  setValue: any;
}

const InputConclusion: React.FC<Props> = ({
  id,
  name,
  placeholder,
  value,
  setValue,
}) => {
  /*  */
  const onChange = (evt: any) => {
    setValue(evt.target.value);
  };

  return (
    <>
      <input
        id={id}
        type="text"
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="resize-none whitespace-pre focus:outline-none focus:bg-white appearance-none w-[354px] h-[24px] rounded-[83px] px-4 font-raleway text-gray-color text-[12px] placeholder:text-gray-color placeholder:font-raleway"
      />
    </>
  );
};

export default InputConclusion;
