interface Props {
  title: string;
  firstline: string;
  secondline: string;
}

const ThankYou: React.FC<Props> = ({ title, firstline, secondline }) => {
  return (
    <div className="flex flex-col items-center justify-center font-raleway text-gray-color mt-24">
      <span className="font-semibold text-2xl mt-10 mb-6">{title}</span>
      <span className="text-base text-center">
        {firstline}
        <br />
        {secondline}
      </span>
    </div>
  );
};

export default ThankYou;
