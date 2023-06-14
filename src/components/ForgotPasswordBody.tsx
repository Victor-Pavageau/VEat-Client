import { Button, Form, Input } from "antd";

function ForgotPasswordBody() {
  const onFinish = (values: any) => {
    // TODO : Link this with the API
    console.log("Success:", values);
  };

  return (
    <Form
      initialValues={{ remember: true }}
      onFinish={onFinish}
      className="mt-10"
    >
      <div className="flex flex-col px-12 pt-1 text-[#707070] gap-y-2">
        <div className="flex flex-col gap-1">
          Account email
          <Form.Item required name={"email"}>
            <Input
              className="bg-[#EBEBEB] hover:bg-[#EBEBEB] focus:bg-[#EBEBEB]"
              bordered={false}
              required
              size="large"
            />
          </Form.Item>
        </div>
      </div>
      <div className="flex flex-col px-12 mt-40 justify-center items-center">
        <Form.Item>
          <Button
            className="flex justify-center items-center w-min mt-7"
            type="primary"
            size="large"
            htmlType="submit"
          >
            <div className="flex justify-center items-center mx-2">
              Reset my password
            </div>
          </Button>
        </Form.Item>
      </div>
    </Form>
  );
}

export default ForgotPasswordBody;
