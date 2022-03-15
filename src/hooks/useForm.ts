import { ChangeEventHandler, useState } from "react";
import { omit } from "lodash";

const useForm = (callback: () => void) => {
  /* Form values */
  const [values, setValues] = useState({});
  /* Errors */
  const [errors, setErrors] = useState({});

  const validate = (event: any, name: any, value: string | any[]) => {
    switch (name) {
      case "name":
        if (value.length === 0) {
          setErrors({
            ...errors,
            name: "Field must complete",
          });
        } else {
          // set the error state empty or remove the error for username input

          //omit function removes/omits the value from given object and returns a new object
          let newObj = omit(errors, "username");
          setErrors(newObj);
        }
        break;
      default:
        break;
    }
  };

  const handleChange = (event: {
    persist: () => void;
    target: { name: any; value: any };
  }) => {
    //To stop default events
    event.persist();

    let name = event.target.name;
    let val = event.target.value;

    validate(event, name, val);
    //Let's set these values in state

    setValues({
      ...values,
      [name]: val,
    });
  };

  const handleSubmit = (event: any) => {
    if (event) event.preventDefault();

    if (Object.keys(errors).length === 0 && Object.keys(values).length !== 0) {
      callback();
    } else {
      alert("There is an Error!");
    }
  };

  return {
    values,
    errors,
    handleChange,
  };
};

export default useForm;
