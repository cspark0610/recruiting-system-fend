import { useSearchParams } from 'react-router-dom';
import Lang from '../../components/extras/Lang';
import FrmApply from '../../components/forms/FrmApply';
import Header from './../../components/header/Header';

const Data = () => {
  /*  */
  const [searchParams, setSearchParams] = useSearchParams();
  const id = searchParams.get('job_id');

  return (
    <>
      <Lang />
      <Header
        width="laptop:w-[147px] mobile:w-[113px] tablet:w-[154px]"
        height="laptop:h-[98px] mobile:h-[75px] tablet:h-[102px]"
      />
      <FrmApply _id={id} />
    </>
  );
};

export default Data;
