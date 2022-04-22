import { useTranslation } from "react-i18next";
import Next from "../../components/buttons/Next";
import Lang from "../../components/extras/Lang";
import Header from "../../components/header/Header";
import CameraOn from "../../components/recorder/CameraOn";
import { VIEW_BEFORE_STARTING } from "../../config/routes/paths";

const Details = () => {
  /*  */
  const { t } = useTranslation();

  return (
    <>
      <Lang />
      <Header
        width="laptop:w-[97.5px] mobile:w-[161px] tablet:w-[154px]"
        height="laptop:h-[65px] mobile:h-[107px] tablet:h-[102px]"
      />
      <div className="grid justify-items-center laptop:w-full mobile:w-full tablet:w-full">
        <section className="grid justify-items-center content-center mobile:gap-10 laptop:gap-20 mobile:grid-rows-1 tablet:grid-cols-2 laptop:grid-cols-2 md:px-5 mt-10">
          <div>
            <CameraOn />
          </div>
          <div className="bg-white">
            <h2 className="font-raleway font-semibold text-cyan-color mobile:text-lg laptop:text-[22px]">
              {t("details.title")}
            </h2>
            <p className="font-raleway font-normal text-cyan-color mobile:text-base laptop:text-xl mt-2">
              {t("details.sub-title.line_1")}
              <br /> {t("details.sub-title.line_2")}
            </p>
            <ul className="list-disc font-raleway text-gray-color mobile:text-sm laptop:text-xs ml-5 mt-5 w-[283px]">
              <li className="my-2">{t("details.rules.line_1")}</li>
              <li className="my-2">{t("details.rules.line_2")}</li>
              <li className="my-2">{t("details.rules.line_3")}</li>
              <li className="my-2">{t("details.rules.line_4")}</li>
            </ul>
            <div className="grid place-content-start w-full">
              <Next
                name={t("instructions.get_started")}
                link={VIEW_BEFORE_STARTING}
                width="laptop:w-[155px] laptop:h-[59px] mobile:w-[155px] mobile:h-[59px]"
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Details;
