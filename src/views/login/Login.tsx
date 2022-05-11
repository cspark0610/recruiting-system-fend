import FrmLogin from "../../components/forms/FrmLogin";
import Header from "../../components/header/Header";

const Login = () => {
  return (
    <>
      <Header
        width="laptop:w-[117px] mobile:w-[113px] tablet:w-[154px]"
        height="laptop:h-[118px] mobile:h-[75px] tablet:h-[102px]"
      />
      <div className="flex flex-col align-middle justify-center mx-auto -mt-[46px]">
        <div className="font-raleway text-gray-color text-center">
          <h5 className="font-bold text-[24px] leading-[28.18px]">
            Welcome to WorkAt!
          </h5>
          <p className="font-normal text-[15px] leading-[17.61px]">
            Please, Log in to start:
          </p>
        </div>
        <FrmLogin />
      </div>
    </>
  );
};

export default Login;
