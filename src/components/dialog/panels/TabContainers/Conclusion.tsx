import { useState } from 'react';
import { IoSend } from 'react-icons/io5';
import InputConclusion from '../../../inputs/InputConclusion';
import LoaderSpinner from '../../../../assets/loaderSpinner';

/* Redux */
import { useDispatch, useSelector } from 'react-redux';
import { UpdateCandidateConclusion } from '../../../../redux/candidates/actions/CandidateAction';
import { State } from '../../../../redux/store/store';
import { IConclusionInv } from '../../../../redux/candidates/types/data';

const Conclusion = () => {
  /*  */
  const dispatch = useDispatch();

  const [goodComment, setGoodComment] = useState<string>('');
  const [badComment, setBadComment] = useState<string>('');

  const currentCandidate = useSelector((state: State) => state.info.detail);
  const updating = useSelector((state: State) => state.info.updating);

  const { _id, name, conclusions } = currentCandidate;

  const currentUser = window.localStorage.getItem('user')
    ? JSON.parse(window.localStorage.getItem('user') as string)
    : null;

  const onSubmit = (evt: any) => {
    evt.preventDefault();
    if (!goodComment && !badComment) {
      return;
    } else {
      dispatch(
        UpdateCandidateConclusion(_id, {
          good:
            goodComment !== ''
              ? {
                  comment: goodComment,
                  context: currentCandidate.main_status,
                  user: currentUser,
                }
              : undefined,
          bad:
            badComment !== ''
              ? {
                  comment: badComment,
                  context: currentCandidate.main_status,
                  user: currentUser,
                }
              : undefined,
        }),
      );
    }
    /* clean input field */
    setGoodComment('');
    setBadComment('');
  };

  return (
    <div className="grid justify-items-center">
      <div className="mt-[48px] grid justify-items-start w-[85%]">
        <p className="font-raleway font-semibold text-gray-color text-[20px]">
          {name}
        </p>
      </div>
      <section className="grid justify-items-center grid-cols-2 gap-[10px] w-[85%]">
        <div className="w-full">
          <div className="my-[32px]">
            <p className="font-raleway text-gray-color text-[15px] font-bold uppercase my-3">
              Yes
            </p>
            <div className="relative bg-light-color border-light-color rounded-[5px] w-[435px] h-[372px]">
              <div className="absolute top-5 right-[21px] z-10 h-[18rem] space-y-2 overflow-y-auto">
                {conclusions.good.length === 0
                  ? ''
                  : conclusions.good.map((value: IConclusionInv) => (
                      <>
                        <div
                          key={value.user?._id}
                          className="flex h-[0.5rem] items-center justify-between"
                        >
                          <div className="w-36 h-[0.1rem] text-gray-400 bg-gray-400"></div>
                          <div className="text-sm text-gray-400">
                            {value.context}
                          </div>
                          <div className="w-36 h-[0.1rem] text-gray-400 bg-gray-400"></div>
                        </div>
                        <div className="flex flex-row-reverse gap-[11px]">
                          {value.user?.picture ? (
                            <img
                              className="rounded-full h-8"
                              src={value.user?.picture}
                              alt="profile"
                            />
                          ) : null}
                          <div className="bg-cyan-color rounded-[5px] w-[336px] h-auto my-2">
                            <p className="break-words font-raleway text-white text-xs text-right py-1 px-4">
                              {value.comment}
                            </p>
                          </div>
                        </div>
                      </>
                    ))}
              </div>
              <div className="absolute bottom-4 left-5">
                <hr className="border-[1px] mb-[6px]" />
                <div className="flex items-center">
                  <form onSubmit={onSubmit}>
                    <InputConclusion
                      id="positive"
                      name="positive"
                      placeholder="Aa"
                      value={goodComment}
                      setValue={setGoodComment}
                    />
                  </form>
                  <button onClick={onSubmit} disabled={updating}>
                    {updating ? (
                      <LoaderSpinner width="w-5" height="h-5" classes="ml-3" />
                    ) : (
                      <IoSend className="text-gray-color w-[16px] h-[14px] ml-[8px] cursor-pointer" />
                    )}
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
            <div className="relative bg-light-color border-light-color rounded-[5px] w-[435px] h-[372px]">
              <div className="absolute top-5 right-[21px] z-10 h-[18rem] space-y-2 overflow-y-auto">
                {conclusions.bad.length === 0
                  ? ''
                  : conclusions.bad.map((value: IConclusionInv) => (
                      <>
                        <div
                          key={value.user?._id}
                          className="flex h-[0.5rem] items-center justify-between"
                        >
                          <div className="w-36 h-[0.1rem] text-gray-400 bg-gray-400"></div>
                          <div className="text-sm text-gray-400">
                            {value.context}
                          </div>
                          <div className="w-36 h-[0.1rem] text-gray-400 bg-gray-400"></div>
                        </div>
                        <div className="flex flex-row-reverse gap-[11px]">
                          {value.user?.picture ? (
                            <img
                              className="rounded-full h-8"
                              src={value.user?.picture}
                              alt="profile"
                            />
                          ) : null}
                          <div className="bg-cyan-color rounded-[5px] w-[336px] h-auto my-2">
                            <p className="break-words font-raleway text-white text-xs text-right py-1 px-4">
                              {value.comment}
                            </p>
                          </div>
                        </div>
                      </>
                    ))}
              </div>
              <div className="absolute bottom-4 left-5">
                <hr className="border-[1px] mb-[6px]" />
                <div className="flex items-center">
                  <form onSubmit={onSubmit}>
                    <InputConclusion
                      id="negative"
                      name="negative"
                      placeholder="Aa"
                      value={badComment}
                      setValue={setBadComment}
                    />
                  </form>
                  <button onClick={onSubmit} disabled={updating}>
                    {updating ? (
                      <LoaderSpinner width="w-5" height="h-5" classes="ml-3" />
                    ) : (
                      <IoSend className="text-gray-color w-[16px] h-[14px] ml-[8px] cursor-pointer" />
                    )}
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
