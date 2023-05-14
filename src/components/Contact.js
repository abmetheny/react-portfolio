import React from "react";
import { Button, Form, Input } from 'antd';

const onFinish = (values) => {
  console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};



function Contact() {
  return (
    <Form
    name="basic"
    labelCol={{
      span: 8,
    }}
    wrapperCol={{
      span: 16,
    }}
    style={{
      maxWidth: 600,
    }}
    initialValues={{
      remember: true,
    }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item
      type="input"
      label="Name"
      name="name"
      rules={[
        {
          required: true,
          message: 'Please input your name!',
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Email Address"
      name="email"
      rules={[
        {
          required: true,
          pattern: "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$",
          message: 'Please input a valid email address!',
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
        name="message"
        label="Message"
        rules={[
          { 
            required: true, 
            message: 'Please input message.' 
          }
        ]}
      >
        <Input.TextArea rows={4} />
      </Form.Item>

    <Form.Item
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
  );
}

export default Contact;