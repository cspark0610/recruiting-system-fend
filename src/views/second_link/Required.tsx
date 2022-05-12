import { useSearchParams } from "react-router-dom";
import Lang from "../../components/extras/Lang";
import FrmData from "../../components/forms/FrmData";
import Header from "../../components/header/Header";

const Required = () => {
  /*  */
  const [searchParams] = useSearchParams();
  const id = searchParams.get("candidate_id");
  console.log("my id get from url: ", id);

  return (
    <>
      <Lang />
      <Header
        width="laptop:w-[97.5px] mobile:w-[113px] tablet:w-[154px]"
        height="laptop:h-[65px] mobile:h-[75px] tablet:h-[102px]"
      />
      <FrmData _id={id} />
    </>
  );
};

export default Required;
