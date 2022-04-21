interface Props {
  name: string;
  width: string;
  onSubmit?: any;
}

const Submit: React.FC<Props> = ({ name, width, onSubmit }) => {
  return (
    <div className="flex justify-center mb-3 mobile:mt-5 laptop:mt-5 tablet:mt-16">
      <input
        className={`${width} cursor-pointer rounded-2xl bg-cyan-color shadow-cyan-color/50 hover:bg-cyan-color/80 shadow-lg text-white font-semibold font-raleway mobile:py-2 mobile:h-[59px] mobile:w-[106px] laptop:h-[59px] laptop:w-[106px] focus:outline-none`}
        type="submit"
        value={name}
        onClick={onSubmit}
      />
    </div>
  );
};

export default Submit;
