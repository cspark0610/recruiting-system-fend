import FrmProfile from '../../../../components/forms/FrmProfile';

export default function Profile() {
  return (
    <div className="flex flex-col items-center justify-center mt-36 md:w-screen overflow-x-hidden">
      <span className="mb-16 font-raleway font-semibold text-xl text-[#475564]">
        My Profile
      </span>
      <FrmProfile />
    </div>
  );
}
