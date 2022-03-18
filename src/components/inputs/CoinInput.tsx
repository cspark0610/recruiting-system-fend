import React from "react";
import CurrencyInput from "react-currency-input-field";

interface CoinInputProps {
  width: string;
  placeholder: string;
}

const CoinInput: React.FC<CoinInputProps> = ({ width, placeholder }) => {
  return (
    <div className={`${width} w-full p-3`}>
      <CurrencyInput
        id="salary"
        placeholder={placeholder}
        allowDecimals={false}
        className="font-raleway appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        prefix={"$"}
        step={10}
      />
    </div>
  );
};

export default CoinInput;
