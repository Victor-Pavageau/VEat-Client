import { Button, Input } from "antd"
import { BsFacebook } from "react-icons/bs"
import { FcGoogle } from "react-icons/fc"

function UnauthenticatedBodyProfile() {
  return (
    <>
      <div className="flex flex-col px-12 pt-12 text-[#707070] gap-y-2">
        Email address
        <Input size="large" className="bg-[#EBEBEB] hover:bg-[#EBEBEB] focus:bg-[#EBEBEB]" bordered={false} placeholder="example.mail@domain.com" />
      </div><div className="flex flex-col px-12 pt-7 text-[#707070] gap-y-2">
        Password
        <Input size="large" className="bg-[#EBEBEB] hover:bg-[#EBEBEB] focus:bg-[#EBEBEB]" bordered={false} placeholder="*********" type="password" />
        <div className="text-xs mt-1 flex justify-end">
          <a href="./" className="underline text-[#707070]">
            Forgot password
          </a>
        </div>
      </div><div className="flex flex-col px-12 justify-center items-center">
        <Button className="flex justify-center items-center w-min mt-12" type="primary" size="large">
          <div className="flex justify-center items-center mx-2">
            Log in
          </div>
        </Button>
        <Button className="flex justify-center items-center w-min mt-10 border-2" type="primary" ghost size="large">
          <div className="flex justify-center items-center mx-1 gap-2 text-sm">
            <FcGoogle size={20} /> Connect with Google
          </div>
        </Button>
        <Button className="flex justify-center items-center w-min mt-5 border-2" type="primary" ghost size="large">
          <div className="flex justify-center items-center mx-1 gap-2 text-sm">
            <BsFacebook className="text-[#395998]" size={20} /> Connect with Facebook
          </div>
        </Button>
      </div><div className="flex flex-col px-12 mt-10 pb-3 text-[#707070]">
        <div>
          If you don't have an account, please, <a className="text-[#F97D23]" href="/">Sign up here</a>
        </div>
      </div>
    </>
  )
}

export default UnauthenticatedBodyProfile