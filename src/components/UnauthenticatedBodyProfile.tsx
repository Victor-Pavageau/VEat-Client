import { Button, Input } from "antd";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router";
import { tp } from "../routing";

type Props = {
  setAuthenticatedUser: (isAuthenticated: boolean) => void;
};

function UnauthenticatedBodyProfile(props: Props) {
  const { setAuthenticatedUser } = props;

  const navigate = useNavigate();

  return (
    <>
      <div className="flex flex-col px-12 pt-12 text-[--gray] gap-y-2">
        Email address
        <Input
          size="large"
          className="bg-[--light-gray] hover:bg-[--light-gray] focus:bg-[--light-gray]"
          bordered={false}
          placeholder="example.mail@domain.com"
        />
      </div>
      <div className="flex flex-col px-12 pt-7 text-[--gray] gap-y-2">
        Password
        <Input
          size="large"
          className="bg-[--light-gray] hover:bg-[--light-gray] focus:bg-[--light-gray]"
          bordered={false}
          placeholder="*********"
          type="password"
        />
        <div className="text-xs mt-1 flex justify-end">
          <div
            className="underline text-[--gray]"
            onClick={() => {
              navigate(tp("/profile/forgot-password"));
            }}
          >
            Forgot password
          </div>
        </div>
      </div>
      <div className="flex flex-col px-12 justify-center items-center">
        <Button
          className="flex justify-center items-center w-min mt-12"
          type="primary"
          size="large"
          onClick={() => {
            setAuthenticatedUser(true);
          }}
        >
          <div className="flex justify-center items-center mx-2">Log in</div>
        </Button>
        <Button
          className="flex justify-center items-center w-min mt-7 border-2"
          type="primary"
          ghost
          size="large"
        >
          <div className="flex justify-center items-center mx-1 gap-2 text-sm">
            <FcGoogle size={20} /> Connect with Google
          </div>
        </Button>
      </div>
      <div className="flex flex-col px-12 mt-10 pb-3 text-[--gray]">
        <div>
          If you don't have an account, please,{" "}
          <b
            className="text-[--orange] underline"
            onClick={() => {
              navigate(tp("/profile/create-account"));
            }}
          >
            Sign up here
          </b>
        </div>
      </div>
    </>
  );
}

export default UnauthenticatedBodyProfile;
