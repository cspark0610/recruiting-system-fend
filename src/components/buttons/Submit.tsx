interface Props {
  name: string;
  width: string;
}

const Submit: React.FC<Props> = ({ name, width }) => {
  return (
    <div className="flex justify-center mb-3 md:mb-0">
      <input
        className={`${width} cursor-pointer rounded-2xl bg-cyan-color shadow-cyan-color/50 hover:bg-cyan-color/80 shadow-lg text-white font-semibold py-3 md:w-28 focus:outline-none`}
        type="submit"
        value={name}
      />
    </div>
  );
};

export default Submit;
