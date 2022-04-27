import { useEffect, useState } from "react";
import { IoSend } from "react-icons/io5";

/* Redux */
import { useDispatch, useSelector } from "react-redux";
import {
  AddConclusion,
  GetConclusion,
} from "../../../../redux/conclusions/actions/ConclusionAction";
import ListComments from "../../../extras/ListComments";
import InputConclusion from "../../../inputs/InputConclusion";

const Conclusion = () => {
  /*  */
  const dispatch = useDispatch();

  const [positiveComment, setPositiveComment] = useState("");
  const [negativeComment, setNegativeComment] = useState("");

  const AddNewConclusion = (feed: any) => dispatch(AddConclusion(feed));

  useEffect(() => {
    const LoadComment = () => dispatch(GetConclusion());
    LoadComment();
  }, []);

  const comments = useSelector((state: any) => state.feed.feed);
  const loading = useSelector((state: any) => state.feed.loading);

  const onSubmit = () => {
    AddNewConclusion({
      positiveComment,
      negativeComment,
    });

    /* Clear fields */
    setPositiveComment("");
  };

  return (
    <div className="grid justify-items-center">
      <div className="mt-[48px] grid justify-items-start w-[85%]">
        <p className="font-raleway font-semibold text-gray-color text-[20px]">
          Samuel Vidal Muñoz
        </p>
      </div>
      <section className="grid justify-items-center grid-cols-2 gap-[10px]">
        <div className="w-full">
          <div className="my-[32px]">
            <p className="font-raleway text-gray-color text-[15px] font-bold uppercase my-3">
              Yes
            </p>
            <div className="relative bg-light-color border-light-color rounded-[5px] w-[422px] h-[372px]">
              {comments.length === 0
                ? ""
                : !loading &&
                  comments.map(
                    (comment: { id: number; positiveComment: string }) => (
                      <div
                        key={comment.id}
                        className="absolute top-5 right-5 z-10"
                      >
                        <div>{comment.positiveComment}</div>
                      </div>
                    )
                  )}
              <div className="absolute bottom-4 left-5">
                <hr className="border-[1px] mb-[6px]" />
                <div className="flex items-center">
                  <InputConclusion
                    id="positive"
                    name="positive"
                    placeholder="Aa"
                    value={positiveComment}
                    setValue={setPositiveComment}
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
              <div className="absolute bottom-4 left-5">
                <hr className="border-[1px] mb-[6px]" />
                <div className="flex items-center">
                  <InputConclusion
                    id="negative"
                    name="negative"
                    placeholder="Aa"
                    value={negativeComment}
                    setValue={setNegativeComment}
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
