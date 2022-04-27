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
  const loading = useSelector((state: any) => state.feed.loading);

  return (
    <div className="absolute top-5 right-5 z-10">
      {comments.length === 0
        ? ""
        : !loading &&
          comments.map((comment: { id: number; positiveComment: string }) => (
            <div key={comment.id}>{comment.positiveComment}</div>
          ))}
    </div>
  );
};

export default ListComments;
