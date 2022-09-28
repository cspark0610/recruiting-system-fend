import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

interface Props {
  link: string;
}

const Back: React.FC<Props> = ({ link }) => {
  /*  */
  const navigate = useNavigate();
  const { t } = useTranslation();

  const onClick = () => {
    navigate(link);
  };

  return (
      <div className=" pl-8  px-4 pb-6 sm:px-6 mobile:w-full laptop:w-9/12 tablet:w-11/12 mx-auto">
        <button
          className="flex items-center text-gray-color font-raleway font-bold mobile:text-xs laptop:text-sm desktop:text-base border-none focus:outline-none bg-white"
          onClick={onClick}
        >
          <MdOutlineArrowBackIosNew className="h-4 w-4" /> &nbsp; {t("back_button.name")}
        </button>
      </div>
  );
};

export default Back;
