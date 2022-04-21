import Header from "../../components/header/Header";

interface Props {
  title: string;
  FirstLine: string;
  SecondLine: string;
}

const Thanks: React.FC<Props> = ({ title, FirstLine, SecondLine }) => {
  return (
    <div className="grid justify-center items-center h-screen">
      <Header
        width="laptop:w-[240px] mobile:w-[154px] tablet:w-[263px]"
        height="laptop:h-[160px] mobile:h-[102px] tablet:h-[174px]"
      />
      <div className="flex flex-col text-center font-raleway text-gray-color mobile:-mt-[500px] tablet:-mt-[900px] laptop:-mt-96">
        <div className="flex justify-center items-center flex-col">
          <span className="font-semibold mobile:text-lg tablet:text-lg laptop:text-2xl mt-10 text-gray-color">
            {title}
          </span>
          <span className="text-base text-center mobile:text-sm tablet:text-sm laptop:text-base">
            {FirstLine}
            <br />
            {SecondLine}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Thanks;
