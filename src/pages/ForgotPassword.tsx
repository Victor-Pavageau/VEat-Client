import { FiChevronLeft } from "react-icons/fi";
import ForgotPasswordBody from "../components/ForgotPasswordBody";
import ForgotPasswordHeader from "../components/ForgotPasswordHeader";

function ForgotPassword() {
  return (
    <div className="background-gradient-yellow-orange w-screen h-screen">
      <div className="flex ml-7 pt-10">
        <FiChevronLeft
          size={35}
          className="justify-start w-fit"
          onClick={() => {
            window.history.back();
          }}
        />
      </div>
      <ForgotPasswordHeader />
      <div className="absolute bg-white bottom-0 left-0 right-0 top-56 rounded-t-[2.5rem]">
        <ForgotPasswordBody />
      </div>
    </div>
  );
}

export default ForgotPassword;
