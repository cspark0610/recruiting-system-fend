import { useTranslation } from "react-i18next";
import Back from "../../components/buttons/Back";
import Next from "../../components/buttons/Next";
import CameraOn from "../../components/recorder/CameraOn";
import {
  VIEW_BEFORE_STARTING,
  VIEW_REQUIRED_STEPS,
} from "../../config/routes/paths";

const Details = () => {
  /*  */
  const { t } = useTranslation();

  return (
    <>
      <Back link={VIEW_REQUIRED_STEPS} />
      <div className="grid justify-items-center ">
        <section className="grid place-items-center content-center gap-28 grid-rows-1 md:grid-cols-2 md:px-5 mt-10">
          <div>
            <CameraOn />
          </div>
          <div className="bg-white">
            <h2 className="font-raleway font-semibold text-cyan-color text-2xl">
              {t("details.title")}
            </h2>
            <p className="font-raleway font-normal text-cyan-color text-xl mt-2">
              {t("details.sub-title.line_1")}
              <br /> {t("details.sub-title.line_2")}
            </p>
            <ul className="list-disc font-raleway text-gray-color text-sm ml-5 mt-5">
              <li className="my-2">{t("details.rules.line_1")}</li>
              <li className="my-2">{t("details.rules.line_2")}</li>
              <li className="my-2">{t("details.rules.line_3")}</li>
              <li className="my-2">{t("details.rules.line_4")}</li>
            </ul>
            <div className="grid place-content-start w-full">
              <Next
                name={t("instructions.get_started")}
                link={VIEW_BEFORE_STARTING}
                width="w-auto"
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Details;
