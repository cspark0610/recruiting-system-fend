import Multiselect from "multiselect-react-dropdown";
import { useEffect } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import Alert from "../extras/Alert";
import "./../../assets/scss/MultiSelect.scss";

interface OptionValues {
  id: number;
  name: string;
}

interface Props {
  data: OptionValues[];
  display?: string;
  showAlert?: any;
  width: string;
  value?: any;
  setValue?: any;
}

const MultipleSelect: React.FC<Props> = (props) => {
  return (
    <div className={`${props.width} p-3 mt-auto`}>
      <div className="relative">
        <div className="laptop:hidden mobile:block tablet:hidden">
          <label
            htmlFor="Skills"
            className="font-raleway font-light text-sm text-gray-color ml-2"
          >
            Skills:
          </label>
        </div>
        {props.showAlert && <Alert />}
        <Multiselect
          options={props.data}
          placeholder="Skills"
          hidePlaceholder={true}
          avoidHighlightFirstOption={true}
          displayValue="name"
        />
        <span
          className={`mobile:${props.display} laptop:hidden ml-3 absolute inset-y-7 right-0 items-center pr-2 pointer-events-none`}
        >
          <RiArrowDropDownLine
            className="h-8 w-8 text-gray-color"
            aria-hidden="true"
          />
        </span>
      </div>
    </div>
  );
};

export default MultipleSelect;
