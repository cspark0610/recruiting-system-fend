import { useTranslation } from "react-i18next";
import Next from "../../components/buttons/Next";
import { VIEW_WELCOME } from "../../config/routes/paths";

const NotFound = () => {
  /*  */
  const { t } = useTranslation();

  return (
    <div className="grid justify-items-center mt-10">
      <section className="grid place-items-center gap-20 grid-rows-1 md:grid-cols-2">
        <div>
          <img
            src={process.env.PUBLIC_URL + `/images/Ilustration.png`}
            alt="Page Not Found"
            className="hidden md:block"
          />
        </div>
        <div>
          <img
            src={process.env.PUBLIC_URL + `/images/404 Error.png`}
            alt="404 page not found"
            className="w-60 md:w-full bg-white"
          />
          <div className="font-raleway text-gray-color font-normal text-base tracking-wide">
            <p className="mb-4">
              {t("404.line_1.p1")} <br /> {t("404.line_1.p2")}
            </p>
            <p>
              {t("404.line_2.p1")} <br /> {t("404.line_2.p2")}
            </p>
          </div>
          <div className="grid place-content-start w-full">
            <Next
              name={t("404.home_page")}
              link={VIEW_WELCOME}
              width="w-auto"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default NotFound;
