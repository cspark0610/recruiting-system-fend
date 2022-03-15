import React, { ChangeEventHandler } from "react";

interface TextInputProps {
  type: string;
  id: string;
  placeholder: string;
  width: string;
}

const TextInput: React.FC<TextInputProps> = (props) => {
  return (
    <div className={`${props.width} w-full p-3`}>
      <input
        className="font-raleway appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        type={props.type}
        id={props.id}
        placeholder={props.placeholder}
        data-type="currency"
      />
    </div>
  );
};

export default TextInput;
