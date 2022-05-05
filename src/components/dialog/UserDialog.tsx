import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ClearCandidateDetail } from '../../redux/candidates/actions/CandidateAction';
import { State } from '../../redux/store/store';
import Panels from './panels/Panels';
import HeaderDialog from '../header/HeaderDialog';
import Modal from '../extras/Modal';
import LoaderSpinner from '../../assets/loaderSpinner';

interface Props {
  isDialogClose: any;
  isModalLoading: boolean;
  setIsModalLoading: any;
}

const UserDialog: React.FC<Props> = ({
  isDialogClose,
  isModalLoading,
  setIsModalLoading,
}) => {
  const dispatch = useDispatch();
  const isDetailFinishedLoading = useSelector(
    (state: State) => state.info.detailFinishedLoading,
  );

  if (isDetailFinishedLoading) {
    setIsModalLoading(false);
  }

  /* STATES OF CONTROL FROM BUTTONS */
  const [approve, setApproved] = useState(false);
  const [doubting, setDoubting] = useState(false);
  const [dismiss, setDismiss] = useState(false);
  const [reject, setReject] = useState(false);

  /* STATES OF CONTROL FROM HEADER DIALOG */
  const [color, setColor] = useState('bg-gray-color');

  /* STATES OF CONTROL FROM MODAL */
  const [isConfirm, setIsConfirm] = useState(false);

  useEffect(() => {
    if (approve && isConfirm) {
      setColor('bg-green-color');
      setApproved(false);
    } else {
      if (doubting && isConfirm) {
        setColor('bg-yellow-color');
        setDoubting(false);
      } else {
        if (dismiss && isConfirm) {
          setColor('bg-red-dark');
          setDismiss(false);
        } else {
          if (reject && isConfirm) {
            setColor(color);
            setReject(false);
          }
        }
      }
    }
  }, [approve, doubting, dismiss, reject, isConfirm, color]);

  useEffect(() => {
    return () => {
      dispatch(ClearCandidateDetail(dispatch));
    };
  }, [dispatch]);

  const isApproved = () => {
    setApproved(!approve);
  };

  const isDoubting = () => {
    setDoubting(!doubting);
  };

  const isDismiss = () => {
    setDismiss(!dismiss);
  };

  const isReject = () => {
    setReject(!reject);
  };

  const isStatusConfirm = () => {
    setIsConfirm(true);
  };

  return (
    <>
      <div className="fixed z-10 inset-0 overflow-y-auto">
        <div className="flex items-center justify-center min-h-screen text-center p-0">
          <div className="fixed inset-0 bg-white bg-opacity-75 transition-opacity"></div>
          <div className="relative inline-block align-middle bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all w-[77.313rem] h-maximum">
            <div className="bg-white relative">
              {isModalLoading ? (
                <div className="absolute z-10 bg-white h-full w-full bg-opacity-75">
                  <div className="absolute top-[15rem] left-[35rem] font-bold text-2xl text-center">
                    <LoaderSpinner height="h-14" width="w-12" />
                  </div>
                </div>
              ) : null}
              <HeaderDialog isClose={isDialogClose} />
              <div className="flex">
                <Panels
                  isApproved={isApproved}
                  isDoubting={isDoubting}
                  isDismiss={isDismiss}
                  isReject={isReject}
                  isConfirmed={isConfirm}
                />
              </div>
              {/* Modals to confirm an action */}
              {approve && (
                <Modal
                  alt="approve"
                  classes={true}
                  image="approve"
                  isVerify={isStatusConfirm}
                  message="An automatic email is going to be send to this candidate with instructions for next step."
                  onClick={isApproved}
                  setValue={setApproved}
                  status="You`ve approved this Candidate!"
                  value={approve}
                />
              )}
              {doubting && (
                <Modal
                  alt="doubting"
                  classes={true}
                  image="doubting"
                  isVerify={isStatusConfirm}
                  onClick={isDoubting}
                  setValue={setDoubting}
                  status='"in doubt".'
                  title="Your candidate has been marked as "
                  value={doubting}
                />
              )}
              {dismiss && (
                <Modal
                  alt="dismiss"
                  classes={true}
                  image="dismiss"
                  isVerify={isStatusConfirm}
                  message="Remember to fill your motives for this decition in conclusions"
                  onClick={isDismiss}
                  setValue={setDismiss}
                  status="dismissed."
                  title="This candidate has been "
                  value={dismiss}
                />
              )}
              {reject && (
                <Modal
                  alt="reject"
                  classes={false}
                  image="reject"
                  isVerify={isStatusConfirm}
                  message="This candidate won’t be able to apply for any position ever again. Please, explain your decition here:"
                  onClick={isReject}
                  setValue={setReject}
                  value={reject}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserDialog;
