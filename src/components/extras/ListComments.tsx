/* Redux */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetConclusion } from "./../../redux/conclusions/actions/ConclusionAction";

const ListComments = () => {
  /*  */
  const dispatch = useDispatch();

  useEffect(() => {
    const LoadComment = () => dispatch(GetConclusion());
    LoadComment();
  }, []);

  const comments = useSelector((state: any) => state.feed.feed);

  return (
    <div className="absolute top-5 right-5 z-10">
      {comments.length === 0
        ? ""
        : comments.map((comment: { positiveComment: any; id: number }) => (
            <div
              key={comment.id}
              className="bg-cyan-color rounded-[5px] w-[336px] h-auto my-2"
            >
              <p className="font-raleway text-white text-xs text-right py-1 px-4">
                {comment.positiveComment}
              </p>
            </div>
          ))}
    </div>
  );
};

export default ListComments;
