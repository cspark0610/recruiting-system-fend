import { useTranslation } from "react-i18next";
import { Route, Routes } from "react-router-dom";

import {
  VIEW_404,
  VIEW_BEFORE_STARTING,
  VIEW_DETAILS,
  VIEW_USER_DIALOG,
  VIEW_HOME,
  VIEW_HOME_THANKS,
  VIEW_INSTRUCTIONS,
  VIEW_REQUIRED_STEPS,
  VIEW_VIDEO_COMPLETED,
  VIEW_WELCOME,
  VIEW_WELCOME_THANKS,
} from "./paths";

import Data from "../../views/first_link/Data";
import Thanks from "../../views/first_link/Thanks";
import Welcome from "../../views/second_link/Welcome";
import Instructions from "../../views/second_link/Instructions";
import Required from "../../views/second_link/Required";
import NotFound from "../../views/error/NotFound";
import Details from "../../views/second_link/Details";
import VideoStart from "../../views/second_link/VideoStart";
import VideoCompleted from "../../views/second_link/VideoCompleted";
import UserView from "../../views/admin/UserView";

const AppRoute = () => {
  /*  */
  const { t } = useTranslation();

  return (
    <>
      <Routes>
        {/* First Link */}
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
        {/* Second Link */}
        <Route path={VIEW_WELCOME} element={<Welcome />} />
        <Route path={VIEW_INSTRUCTIONS} element={<Instructions />} />
        <Route path={VIEW_REQUIRED_STEPS} element={<Required />} />
        <Route path={VIEW_DETAILS} element={<Details />} />
        <Route path={VIEW_BEFORE_STARTING} element={<VideoStart />} />
        <Route path={VIEW_VIDEO_COMPLETED} element={<VideoCompleted />} />
        <Route
          path={VIEW_WELCOME_THANKS}
          element={
            <Thanks
              title={t("thank_you_video.title")}
              FirstLine={t("thank_you_video.description.line_1")}
              SecondLine={t("thank_you_video.description.line_2")}
            />
          }
        />
        <Route path={VIEW_404} element={<NotFound />} />
        {/* User view */}
        <Route path={VIEW_USER_DIALOG} element={<UserView />} />
      </Routes>
    </>
  );
};

export default AppRoute;
