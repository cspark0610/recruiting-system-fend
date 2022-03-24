import React from "react";
import CurrencyInput from "react-currency-input-field";

interface Props {
  placeholder: string;
  width: string;
}

const CoinInput: React.FC<Props> = ({ width, placeholder }) => {
  return (
    <div className={`${width} w-full p-3 mt-auto mb-3`}>
      <CurrencyInput
        id="salary"
        placeholder={placeholder}
        allowDecimals={false}
        className="block w-full appearance-none font-raleway text-gray-color bg-gray-200 border border-gray-200 rounded-2xl py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
        prefix={"$"}
        step={10}
      />
    </div>
  );
};

export default CoinInput;
