import { useTranslation } from "react-i18next";
import { RiCheckboxCircleFill } from "react-icons/ri";
import Back from "../../components/buttons/Back";
import Next from "../../components/buttons/Next";
import { VIEW_REQUIRED_STEPS, VIEW_WELCOME } from "../../config/routes/paths";

const Instructions = () => {
  /*  */
  const { t } = useTranslation();

  return (
    <>
      <Back link={VIEW_WELCOME} />
      <div className="grid place-items-center">
        <h2 className="font-raleway font-semibold text-cyan-color text-2xl mb-8 mt-2">
          {t("instructions.title")}
        </h2>
        <section className="w-2/3">
          <ul className="font-raleway font-normal text-base text-gray-color text-justify">
            <li className="flex items-center justify-start my-2 p-2">
              <RiCheckboxCircleFill className="text-cyan-color h-5 w-5 mr-8 hidden md:block" />{" "}
              {t("instructions.rules.part_1")}
            </li>
            <li className="flex items-center justify-start my-2 p-2">
              <RiCheckboxCircleFill className="text-cyan-color h-5 w-5 mr-8 hidden md:block" />{" "}
              {t("instructions.rules.part_2.l1")}
              <span className="font-semibold">
                &nbsp;{t("instructions.rules.part_2.l2")}
              </span>
            </li>
            <li className="flex items-center justify-start my-2 p-2 gap-0">
              <span className="inline-flex items-baseline mb-7">
                <RiCheckboxCircleFill className="text-cyan-color h-5 w-5 mr-8 hidden md:block" />
              </span>{" "}
              {t("instructions.rules.part_3")}
            </li>
          </ul>
        </section>
        <span className="font-raleway font-bold text-base text-gray-color mt-5">
          {t("instructions.are_you_ready")}
        </span>
        <Next
          name={t("instructions.get_started")}
          link={VIEW_REQUIRED_STEPS}
          width="w-auto"
        />
      </div>
    </>
  );
};

export default Instructions;
