import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { RiEdit2Fill } from "react-icons/ri";

import Submit from "../../components/buttons/Submit";
import Lang from "../../components/extras/Lang";
import Header from "../../components/header/Header";

/* Redux */
import { useSelector, useDispatch } from "react-redux";
import {
  GetData,
  DataEdit,
} from "../../redux/candidates/actions/CandidateAction";
import { VIEW_REQUIRED_STEPS } from "../../config/routes/paths";

import { useTranslation } from "react-i18next";
import { BsPlay } from "react-icons/bs";

const VideoCompleted = () => {
  /*  */
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const userID = useSelector((state: any) => state.info.userId);

  useEffect(() => {
    if (userID) {
      const loadInfo = () => dispatch(GetData(userID));
      loadInfo();
    }
  }, [userID]);

  const user = useSelector((state: any) => state.info.user);

  const redirectEdition = (user: any) => {
    dispatch(DataEdit(user));
    navigate(VIEW_REQUIRED_STEPS);
  };

  return (
    <div>
      <Lang />
      <Header
        width="laptop:w-[97.5px] mobile:w-[113px] tablet:w-[154px]"
        height="laptop:h-[65px] mobile:h-[75px] tablet:h-[102px]"
      />
      <div className="grid justify-items-center mobile:px-5 mb-5 mobile:mt-8 laptop:mt-0">
        {user && (
          <section className="grid justify-items-center content-center mobile:gap-10 laptop:gap-10 mobile:grid-rows-1 laptop:grid-cols-2 md:px-5 w-full">
            <div className="font-raleway text-gray-color bg-white w-4/5">
              <h2 className="mobile:text-lg laptop:text-2xl">
                {t("video-completed.title")}
              </h2>
              <span className="mobile:text-sm laptop:text-base">
                {t("video-completed.sub-title")}
              </span>
              <hr className="w-ful my-5" />
              <p className="mobile:text-xs laptop:text-sm flex flex-row justify-between">
                {t("video-completed.studies")} {user.salary}
                <button
                  type="submit"
                  onClick={() => {
                    redirectEdition(user);
                  }}
                >
                  <RiEdit2Fill className="cursor-pointer" />
                </button>
              </p>
              <hr className="w-ful my-5" />
              <h2 className="font-raleway font-normal mobile:text-xs laptop:text-sm text-font-color mb-2">
                {t("video-completed.text-area-title")}
              </h2>
              <div className="bg-light-color rounded-2xl px-2 py-1 h-32">
                <p className="text-gray-color font-raleway font-light text-sm p-2 text-justify">
                  {user.description}
                  <button
                    type="submit"
                    onClick={() => {
                      redirectEdition(user);
                    }}
                  >
                    <RiEdit2Fill className="cursor-pointer" />
                  </button>
                </p>
              </div>
              <hr className="w-ful my-5" />
              <p className="mobile:text-xs laptop:text-sm">
                {t("video-completed.skill-title")}{" "}
              </p>
              <div className="grid grid-cols-2 gap-2 mt-2">
                <span className="bg-cyan-color/90 rounded-2xl p-1 text-white text-center text-xs font-light font-raleway w-36">
                  {user.skill.name}
                </span>
              </div>
              <hr className="w-ful my-5" />
              <p className="mobile:text-xs laptop:text-sm flex flex-row justify-between">
                {t("video-completed.salary-title")} {user.salary}
                <button
                  type="submit"
                  onClick={() => {
                    redirectEdition(user);
                  }}
                >
                  <RiEdit2Fill className="cursor-pointer" />
                </button>
              </p>
              <hr className="w-ful my-5" />
              <p className="mobile:text-xs laptop:text-sm flex flex-row justify-between">
                {t("video-completed.available-title")} {user.available.name}
                <button
                  type="submit"
                  onClick={() => {
                    redirectEdition(user);
                  }}
                >
                  <RiEdit2Fill className="cursor-pointer" />
                </button>
              </p>
            </div>
            <div className="w-4/5">
              <div>
                {/* <video id="video-done" playsInline loop></video> */}
                {/* <div className="relative bg-light-color border-light-color rounded-2xl laptop:w-[400px] laptop:h-[320px]">
                  <div className="absolute top-[145px] left-[115px]">
                    <span className="font-raleway text-gray-color text-xs">
                      <BsPlay className="laptop:w-[41px] laptop:h-[45px] text-white" />
                    </span>
                  </div>
                </div> */}
              </div>
              <div className="flex justify-center mt-10">
                <Submit
                  name={t("video-completed.send")}
                  width="laptop:w-[163px] laptop:h-[59px]"
                />
              </div>
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default VideoCompleted;
