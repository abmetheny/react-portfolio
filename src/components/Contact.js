import React from "react";
import { Button, Form, Input, Card } from 'antd';

const onFinish = (values) => {
  console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

function Contact() {
  return (
    <div style={{margin: '30px 0 30px 0'}}>
      <Card style={{textAlign: 'center', display: 'flex', flexWrap: 'wrap', background: '#ffe6eb'}} headStyle={{width: '100%', fontSize: '2vw'}} bodyStyle={{width: '100%'}} title="Get in touch!">
      <Form 
      name="basic"
      labelCol={{
        span: 9,
      }}
      wrapperCol={{
        span: 16,
      }}
      style={{
        width: '75%',
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
        label="Email"
        name="email"
        rules={[
          {
            required: true,
            pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
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
              message: 'Please input message!' 
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
      </Card>
  </div>
  );
}

export default Contact;