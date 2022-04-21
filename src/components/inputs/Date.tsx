import { useState } from "react";
import "./../../assets/scss/Shrink.scss";

interface Props {
  id: string;
  label?: string;
  name: string;
  placeholder: string;
  setValue: any;
  value: any;
  width: string;
}

const Date: React.FC<Props> = (props) => {
  /*  */
  const onChange = (evt: any) => {
    props.setValue(evt.target.value);
  };

  const [text, isText] = useState("text");

  let type = text;

  const onClick = () => {
    isText("date");
  };

  return (
    <div className={`${props.width} p-3 mt-auto`}>
      <div className="floating-label">
        <div className="mobile:block tablet:hidden laptop:hidden">
          <label
            htmlFor={props.id}
            className="font-raleway font-light text-sm text-gray-color ml-2"
          >
            {props.label}
          </label>
        </div>
        <input
          className={`${
            props.value
              ? "border-cyan-color bg-light-blue"
              : "bg-light-color border-light-color"
          } floating-input focus:outline-none focus:bg-white block appearance-none mobile:rounded-[10px] laptop:rounded-2xl pb-3 px-4 min-w-full laptop:w-[287px] laptop:h-[54px] mobile:w-[162px] mobile:h-[35px] tablet:w-[241px] tablet:h-[54px] leading-tight mobile:text-xs tablet:text-[15px] laptop:text-[15px] font-raleway font-light text-gray-color focus:border-cyan-color border focus:shadow-cyan-color/50 focus:shadow-md`}
          type={type}
          id={props.id}
          name={props.name}
          placeholder=" "
          value={props.value}
          onChange={onChange}
          onClick={onClick}
        />
        <div className="floating-label-2 mobile:hidden tablet:block laptop:block">
          <label className="">{props.label}</label>
        </div>
      </div>
    </div>
  );
};

export default Date;
