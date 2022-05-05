import FrmPosition from '../../../../components/forms/FrmPosition';

export default function NewPosition() {
  return (
    <div className="flex flex-col">
      <span className="flex justify-center text-[#475564] text-2xl font-semibold mt-32">
        Create New Position
      </span>
      <FrmPosition />
    </div>
  );
}
