import { useTranslation } from "react-i18next";
import { Route, Routes } from "react-router-dom";

import { VIEW_HOME, VIEW_HOME_THANKS } from "./paths";

import Data from "../../views/first_link/Data";
import Thanks from "../../views/first_link/Thanks";

const AppRoute = () => {
  /*  */
  const { t } = useTranslation();

  return (
    <>
      <Routes>
        <Route path={VIEW_HOME} element={<Data />} />
        <Route
          path={VIEW_HOME_THANKS}
          element={
            <Thanks
              title={t("thank_you_title")}
              FirstLine={t("thank_you_description.part_1")}
              SecondLine={t("thank_you_description.part_2")}
            />
          }
        />
      </Routes>
    </>
  );
};

export default AppRoute;
