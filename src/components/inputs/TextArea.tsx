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
      <div className="bg-gray-200 border border-gray-200 p-4 rounded-2xl">
        <label className="text-sm font-normal text-gray-color font-raleway">
          {t("text_area.label")} <br />
          <textarea
            className="mt-4 border-none bg-transparent resize-none w-full h-16 focus-visible:outline-none"
            id={id}
            maxLength={200}
            value={value}
            onChange={onChange}
          />
        </label>
      </div>
    </div>
  );
};

export default TextArea;
