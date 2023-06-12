import { Button, Input } from "antd"
import { AiFillEdit, AiOutlineDelete } from "react-icons/ai"

function AuthenticatedBodyProfile() {
  return (
    <>
      {
        // TODO : Provide with the real values
      }
      <div className="flex flex-col px-12 pt-12 text-[#707070] gap-y-2">
        <div className="flex gap-3">
          <div>
            Name
            <Input className="bg-[#EBEBEB] hover:bg-[#EBEBEB] focus:bg-[#EBEBEB]" bordered={false} placeholder="real value" suffix={<Button type="ghost" className="flex items-center justify-center p-2"><AiFillEdit size={20} /> </Button>} />
          </div>
          <div>
            Surname
            <Input className="bg-[#EBEBEB] hover:bg-[#EBEBEB] focus:bg-[#EBEBEB]" bordered={false} placeholder="real value" suffix={<Button type="ghost" className="flex items-center justify-center p-1"><AiFillEdit size={20} /> </Button>} />
          </div>
        </div>
      </div>
      <div className="flex flex-col px-12 pt-7 text-[#707070] gap-y-2">
        Home address
        <Input className="bg-[#EBEBEB] hover:bg-[#EBEBEB] focus:bg-[#EBEBEB]" bordered={false} placeholder="real value" suffix={<Button type="ghost" className="flex items-center justify-center p-1"><AiFillEdit size={20} /> </Button>} />
      </div>
      <div className="flex flex-col px-12 pt-7 text-[#707070] gap-y-2">
        Phone number
        <Input className="bg-[#EBEBEB] hover:bg-[#EBEBEB] focus:bg-[#EBEBEB]" bordered={false} placeholder="real value" suffix={<Button type="ghost" className="flex items-center justify-center p-1"><AiFillEdit size={20} /> </Button>} />
      </div>
      <div className="flex flex-col px-12 pt-7 text-[#707070] gap-y-2">
        Email
        <Input className="bg-[#EBEBEB] hover:bg-[#EBEBEB] focus:bg-[#EBEBEB]" bordered={false} placeholder="real value" suffix={<Button type="ghost" className="flex items-center justify-center p-1"><AiFillEdit size={20} /> </Button>} />
      </div>
      <div className="flex flex-col px-12 justify-center items-center">
        <Button className="flex justify-center items-center w-min mt-12" type="primary" size="large">
          <div className="flex justify-center items-center mx-2">
            Save changes
          </div>
        </Button>
        <Button className="flex justify-center items-center w-min mt-7" danger>
          <div className="flex justify-center items-center mx-2 gap-3">
            <AiOutlineDelete size={20} /> Delete my account
          </div>
        </Button>
      </div>
    </>
  )
}

export default AuthenticatedBodyProfile
