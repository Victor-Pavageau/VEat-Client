import { Button, Form, Input } from "antd"

function CreateAccountBody() {
  const onFinish = (values: any) => {
    // TODO : Link this with the API
    console.log('Success:', values);
  };

  return (
    <Form
      initialValues={{ remember: true }}
      onFinish={onFinish}
    >
      {
        // TODO : Provide with the real values
      }
      <div className="flex flex-col px-12 pt-12 text-[#707070] gap-y-2">
        <div className="flex gap-3">
          <div className="flex flex-col gap-1">
            Name
            <Form.Item required name={"name"}>
              <Input required className="bg-[#EBEBEB] hover:bg-[#EBEBEB] focus:bg-[#EBEBEB]" bordered={false} size="large" />
            </Form.Item>
          </div>
          <div className="flex flex-col gap-1">
            Surname
            <Form.Item required name={"surname"}>
              <Input className="bg-[#EBEBEB] hover:bg-[#EBEBEB] focus:bg-[#EBEBEB]" bordered={false} size="large" />
            </Form.Item>
          </div>
        </div>
      </div>
      <div className="flex flex-col px-12 pt-1 text-[#707070] gap-y-2">
        <div className="flex flex-col gap-1">
          Home address
          <Form.Item required name={"address"}>
            <Input className="bg-[#EBEBEB] hover:bg-[#EBEBEB] focus:bg-[#EBEBEB]" bordered={false} size="large" />
          </Form.Item>
        </div>
      </div>
      <div className="flex flex-col px-12 pt-1 text-[#707070] gap-y-2">
        <div className="flex flex-col gap-1">
          Phone number
          <Form.Item required name={"phone"}>
            <Input className="bg-[#EBEBEB] hover:bg-[#EBEBEB] focus:bg-[#EBEBEB]" bordered={false} size="large" />
          </Form.Item>
        </div>
      </div>
      <div className="flex flex-col px-12 pt-1 text-[#707070] gap-y-2">
        <div className="flex flex-col gap-1">
          Email
          <Form.Item required name={"email"}>
            <Input className="bg-[#EBEBEB] hover:bg-[#EBEBEB] focus:bg-[#EBEBEB]" bordered={false} size="large" />
          </Form.Item>
        </div>
      </div>
      <div className="flex flex-col px-12 justify-center items-center">
        <Form.Item>
          <Button className="flex justify-center items-center w-min mt-7" type="primary" size="large" htmlType="submit">
            <div className="flex justify-center items-center mx-2">
              Create my account
            </div>
          </Button>
        </Form.Item>
      </div>
    </Form>
  )
}

export default CreateAccountBody
