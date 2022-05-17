import { useState } from "react";
import { IoSend } from "react-icons/io5";
import InputConclusion from "../../../inputs/InputConclusion";

/* Redux */
import { useDispatch, useSelector } from "react-redux";
import { UpdateCandidateConclusion } from "../../../../redux/candidates/actions/CandidateAction";
import { State } from "../../../../redux/store/store";

const Conclusion = () => {
  /*  */
  const dispatch = useDispatch();

  const [goodComment, setGoodComment] = useState([""]);
  const [badComment, setBadComment] = useState([""]);
  const candidateName = useSelector((state: State) => state.info.detail.name);
  const candidateId = useSelector((state: State) => state.info.detail._id);
  const candidateConclusion = useSelector(
    (state: State) => state.info.detail.conclusions
  );

  const onSubmit = (evt: any) => {
    evt.preventDefault();
    dispatch(
      UpdateCandidateConclusion(candidateId, {
        good: goodComment,
        bad: badComment,
      })
    );
    /* clean input field */
    setGoodComment([""]);
    setBadComment([""]);
  };

  return (
    <div className="grid justify-items-center">
      <div className="mt-[48px] grid justify-items-start w-[85%]">
        <p className="font-raleway font-semibold text-gray-color text-[20px]">
          {candidateName}
        </p>
      </div>
      <section className="grid justify-items-center grid-cols-2 gap-[10px] w-[85%]">
        <div className="w-full">
          <div className="my-[32px]">
            <p className="font-raleway text-gray-color text-[15px] font-bold uppercase my-3">
              Yes
            </p>
            <div className="relative bg-light-color border-light-color rounded-[5px] w-[422px] h-[372px]">
              <div className="absolute top-5 right-5 z-10">
                {candidateConclusion.good.length === 0
                  ? ""
                  : candidateConclusion.good.map(
                      (feedback: { good: string[]; id: number }) => (
                        <div
                          key={feedback.id}
                          className="bg-cyan-color rounded-[5px] w-[336px] h-auto my-2"
                        >
                          <p className="font-raleway text-white text-xs text-right py-1 px-4">
                            {feedback.good}
                          </p>
                        </div>
                      )
                    )}
              </div>
              <div className="absolute bottom-4 left-5">
                <hr className="border-[1px] mb-[6px]" />
                <div className="flex items-center">
                  <InputConclusion
                    id="positive"
                    name="positive"
                    placeholder="Aa"
                    value={goodComment}
                    setValue={setGoodComment}
                  />
                  <button onClick={onSubmit}>
                    <IoSend className="text-gray-color w-[16px] h-[14px] ml-[8px] cursor-pointer" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="my-[32px]">
            <p className="font-raleway text-gray-color text-[15px] font-bold uppercase my-3">
              No
            </p>
            <div className="relative bg-light-color border-light-color rounded-[10px] w-[422px] h-[372px]">
              <div className="absolute top-5 right-5 z-10">
                {candidateConclusion.bad.length === 0
                  ? ""
                  : candidateConclusion.bad.map(
                      (feedback: { bad: string[]; id: number }) => (
                        <div
                          key={feedback.id}
                          className="bg-cyan-color rounded-[5px] w-[336px] h-auto my-2"
                        >
                          <p className="font-raleway text-white text-xs text-right py-1 px-4">
                            {feedback.bad}
                          </p>
                        </div>
                      )
                    )}
              </div>
              <div className="absolute bottom-4 left-5">
                <hr className="border-[1px] mb-[6px]" />
                <div className="flex items-center">
                  <InputConclusion
                    id="negative"
                    name="negative"
                    placeholder="Aa"
                    value={badComment}
                    setValue={setBadComment}
                  />
                  <button>
                    <IoSend className="text-gray-color w-[16px] h-[14px] ml-[8px] cursor-pointer" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Conclusion;
