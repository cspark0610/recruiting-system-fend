import { GoogleLogin, GoogleLogout } from "react-google-login";
import { FcGoogle } from "react-icons/fc";

interface Props {
  handleRegister: any;
}

const GoogleSignIn = ({ handleRegister }: Props) => {
  /*  */
  const CLIENT_ID =
    "721059016922-2u2bidvnccoicevi7u44o45it6scnibr.apps.googleusercontent.com";

  return (
    <div className="text-center mt-[32px]">
      <div className="flex justify-center mb-3">
        <div className="relative">
          <span className="absolute left-[55px] top-[20px]">
            <FcGoogle className="w-[24px] h-[24px]" />
          </span>
          <input
            className={`w-[426px] h-[64px] rounded-[10px] bg-white text-gray-color font-medium font-raleway font-[16px] leading-[18.78px] focus:outline-none shadow-gray-color/50 shadow-lg cursor-pointer`}
            type="submit"
            value="Register with Google"
            onClick={handleRegister}
          />
        </div>
      </div>
    </div>
  );
};

export default GoogleSignIn;
