import React, { useState } from "react";

interface TextInputProps {
  type: string;
  id: string;
  placeholder: string;
  width: string;
  value: string | undefined;
  onChange?: any;
}

const TextInput: React.FC<TextInputProps> = ({
  id,
  placeholder,
  type,
  width,
  value,
  onChange,
}) => {
  return (
    <div className={`${width} w-full p-3`}>
      <input
        className="font-raleway appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        type={type}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default TextInput;
