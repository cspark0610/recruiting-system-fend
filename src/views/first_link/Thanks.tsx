interface Props {
  title: string;
  FirstLine: string;
  SecondLine: string;
}

const Thanks: React.FC<Props> = ({ title, FirstLine, SecondLine }) => {
  return (
    <div className="flex flex-col text-center font-raleway text-gray-color">
      <div className="flex justify-center items-center flex-col h-96">
        <span className="font-semibold text-2xl mt-10 mb-6 text-cyan-color">
          {title}
        </span>
        <span className="text-base text-center">
          {FirstLine}
          <br />
          {SecondLine}
        </span>
      </div>
    </div>
  );
};

export default Thanks;
