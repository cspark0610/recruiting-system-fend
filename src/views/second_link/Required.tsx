import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { ValidateToken } from '../../redux/candidates/actions/CandidateAction';
import { VIEW_404 } from '../../config/routes/paths';
import { State } from '../../redux/store/store';
import Lang from '../../components/extras/Lang';
import FrmData from '../../components/forms/FrmData';
import Header from '../../components/header/Header';

const Required = () => {
  /*  */
  const dispatch = useDispatch();

  const error = useSelector((state: State) => state.info.error);

  const [searchParams] = useSearchParams();
  const token = searchParams.get('token');

  if (error.status === 401) {
    window.location.href = VIEW_404;
  }

  useEffect(() => {
    dispatch(ValidateToken(token!));
  }, [dispatch, token]);

  return (
    <>
      <Lang />
      <Header
        width="laptop:w-[97.5px] mobile:w-[113px] tablet:w-[154px]"
        height="laptop:h-[65px] mobile:h-[75px] tablet:h-[102px]"
      />
      <FrmData token={token!} />
    </>
  );
};

export default Required;
