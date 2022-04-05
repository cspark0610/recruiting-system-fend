import { useTranslation } from "react-i18next";

interface Props {
  value: any;
  setValue: any;
}

const Checkbox: React.FC<Props> = ({ value, setValue }) => {
  /*  */
  const { t } = useTranslation();

  const onChange = (evt: any) => {
    setValue(evt.target.checked);
  };

  return (
    <div className="grid md:place-items-center place-items-start w-full mt-6">
      <label
        className="font-raleway font-light w-auto text-sm"
        htmlFor="agreetment"
      >
        <input
          className="ml-2 mr-2 focus:outline-none"
          type="checkbox"
          checked={value}
          onChange={onChange}
        />
        <span className="text-gray-color">{t("term_description.part_1")} </span>
        <span className="text-gray-color font-bold">
          {t("term_description.part_2")}
        </span>
      </label>
    </div>
  );
};

export default Checkbox;
