import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { RiEdit2Fill } from "react-icons/ri";
import SubmitButton from "../../components/buttons/SubmitButton";

import { useSelector, useDispatch } from "react-redux";
import { DataListedUser, UserDataEdit } from "../../actions/CandidateActions";

const VideoCompleted: React.FC = () => {
  /*  */
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const userID = useSelector((state: any) => state.info.userID);

  useEffect(() => {
    if (userID) {
      const loadInfo = () => dispatch(DataListedUser(userID));
      loadInfo();
    }
  }, [userID]);

  /* UserActions */
  const user = useSelector((state: any) => state.info.user);

  const redirectEdition = (user: any) => {
    dispatch(UserDataEdit(user));
    navigate(`/welcome/required-steps/edit`);
  };

  return (
    <div className="grid justify-items-center mt-5">
      {user && (
        <section className="grid place-items-center gap-28 grid-rows-1 md:grid-cols-2 mb-10">
          <div className="font-raleway text-gray-color bg-white w-full">
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
              <SubmitButton name="Send & Finish" width="w-auto" />
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default VideoCompleted;
