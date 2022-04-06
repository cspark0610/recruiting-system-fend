import { useTranslation } from "react-i18next";

interface Props {
  id: string;
  value: string;
  setValue: any;
}

const TextArea: React.FC<Props> = ({ id, value, setValue }) => {
  /*  */
  const { t } = useTranslation();

  const onChange = (evt: any) => {
    setValue(evt.target.value);
  };

  return (
    <div className="relative w-full p-3">
      <div className="mb-2">
        <label className="text-sm font-normal text-gray-color font-raleway">
          {t("text_area.label")} <br />
        </label>
      </div>
      <div>
        <textarea
          className="resize-none bg-gray-200 border-gray-200 border focus:bg-white focus:outline-none focus:border-cyan-color rounded-2xl w-full py-3 px-4 leading-tight font-raleway text-gray-color"
          id={id}
          maxLength={280}
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default TextArea;
