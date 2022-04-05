interface Props {
  title: string;
  FirstLine: string;
  SecondLine: string;
}

const Thanks: React.FC<Props> = ({ title, FirstLine, SecondLine }) => {
  return (
    <div className="flex flex-col text-center font-raleway text-gray-color">
      <span className="font-semibold text-2xl mt-10 mb-6">{title}</span>
      <span className="text-base text-center">
        {FirstLine}
        <br />
        {SecondLine}
      </span>
    </div>
  );
};

export default Thanks;
