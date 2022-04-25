import { useTranslation } from "react-i18next";
import { FiUpload } from "react-icons/fi";
import { AiOutlineFileDone } from "react-icons/ai";

interface Props {
  value: any;
  setValue: any;
  upload: any;
  setUpload: any;
  onChange: any;
}

const File: React.FC<Props> = ({
  value,
  setValue,
  upload,
  setUpload,
  onChange,
}) => {
  /*  */
  const { t } = useTranslation();

  return (
    <div className="grid place-items-center min-w-full laptop:w-[892px] laptop:h-[54px] mobile:w-[335px] mobile:h-[54px] tablet:w-[770px] tablet:h-[54px] mobile:mt-4 px-3 tablet:mt-10 laptop:mt-4">
      <label
        htmlFor="resume"
        className="cursor-pointer rounded-2xl w-full bg-white hover:shadow-cyan-color/50 hover:shadow-md text-cyan-color font-semibold font-raleway uppercase laptop:py-3 mobile:py-2 px-4 mobile:h-10 laptop:h-12 border-2 border-cyan-color"
      >
        {!upload ? (
          <div className="flex flex-row items-center justify-center mobile:text-xs laptop:text-[15px]">
            <FiUpload className="h-5 w-5" /> &nbsp; {t("file_title")}
          </div>
        ) : (
          <div className="flex flex-row items-center justify-center text-green-color mobile:text-xs laptop:text-[15px]">
            <AiOutlineFileDone className="h-6 w-6" /> &nbsp;{" "}
            {value.selectedFile}
          </div>
        )}
      </label>

      <input
        accept="application/pdf"
        type="file"
        name="resume"
        id="resume"
        hidden
        onChange={onChange}
      />
    </div>
  );
};

export default File;
