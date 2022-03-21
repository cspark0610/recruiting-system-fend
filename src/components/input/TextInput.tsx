import React from "react";

interface Props {
  id: string;
  placeholder: string;
  width: string;
  type: string;
  value: number | string;
  onChange?: any;
}

const TextInput: React.FC<Props> = ({
  id,
  placeholder,
  width,
  type,
  value,
  onChange,
}) => {
  return (
    <div className={`${width} w-full p-3`}>
      <input
        className="block w-full appearance-none font-raleway text-gray-color bg-gray-200 border border-gray-200 rounded-2xl py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
        type={type}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required
      />
    </div>
  );
};

export default TextInput;
