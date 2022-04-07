import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { RiEdit2Fill } from "react-icons/ri";

/* Redux */
import { useSelector, useDispatch } from "react-redux";
import {
  GetData,
  DataEdit,
} from "../../redux/candidates/actions/CandidateAction";
import Submit from "../../components/buttons/Submit";
import { VIEW_REQUIRED_STEPS } from "../../config/routes/paths";

const VideoCompleted = () => {
  /*  */
  const navigate = useNavigate();
  const dispatch = useDispatch();

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
    <div className="grid justify-items-center mt-5">
      {user && (
        <section className="grid place-items-center gap-28 grid-rows-1 md:grid-cols-2 mb-10">
          <div className="font-raleway text-gray-color bg-white">
            <h2 className="text-2xl tracking-wide">
              Your Application is complete!
            </h2>
            <span className="text-base">Make sure everything is correct</span>
            <hr className="w-ful my-5" />
            <h2 className="font-raleway font-normal text-sm text-font-color mb-1">
              Why are you interesting in working with FTF?
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
            <p className="text-sm">Skills: </p>
            <div className="grid grid-cols-2 gap-2 mt-2">
              <span className="bg-cyan-color/90 rounded-2xl p-1 text-white text-center text-xs font-light font-raleway w-36">
                {user.skill.name}
              </span>
            </div>
            <hr className="w-ful my-5" />
            <p className="text-sm flex flex-row justify-between">
              Salary Expectations: {user.salary}
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
            <p className="text-sm flex flex-row justify-between">
              Available from: {user.available.name}
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
          <div>
            <div>
              <video id="video-done" playsInline loop></video>
            </div>
            <div className="grid place-content-center w-full mt-10">
              <Submit name="Send & Finish" width="w-auto" />
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default VideoCompleted;
