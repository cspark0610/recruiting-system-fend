import Select from "react-select";
import Alert from "../extras/Alert";
import Skills from "./../../assets/json/Skills.json";

interface MultipleValues {
  value: number;
  label: string;
}

interface Props {
  data?: MultipleValues[];
  id: string;
  placeholder: string;
  setValue: any;
  showAlert: any;
  value: any;
  width: string;
}

const MultipleSelect: React.FC<Props> = (props) => {
  /*  */
  const onChange = (value: any) => {
    props.setValue(value);
  };

  return (
    <div className={`${props.width} w-full md:w-1/2 p-3 mt-auto mb-3`}>
      <div className="relative">
        {props.showAlert && <Alert />}
        <Select
          closeMenuOnSelect={false}
          id={props.id}
          isMulti
          placeholder={props.placeholder}
          options={Skills}
          onChange={onChange}
          value={props.value}
        />
      </div>
    </div>
  );
};

export default MultipleSelect;
