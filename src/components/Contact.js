import React from "react";
import { Button, Form, Input, Card } from 'antd';

//Populates the Contact page
function Contact() {
  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log('Success:', values);
    form.resetFields();
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  // const handleBlur = (e) => {
  //   console.log("handling blur", e.target.value);
  //   if (e.target.value === '') {
  //     console.log('error')
  //   }
  // };
  // const handleFocus = (e) => {
  //   console.log("handling focus", e.target.value);
  // };
  return (
    <div style={{margin: '30px 0 30px 0'}}>
      <Card style={{textAlign: 'center', display: 'flex', flexWrap: 'wrap', background: '#ffe6eb'}} headStyle={{width: '100%', fontSize: '2vw'}} bodyStyle={{width: '100%'}} title="Get in touch!">
      <Form 
      name="contact"
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
      form={form}
    >
      <Form.Item
        type="input"
        label="Name"
        name="name"
        validateTrigger="onBlur"
        rules={[
          {
            required: true,
            message: 'Please provide your name.',
          },
        ]}
      >
        <Input 
          placeholder="Name"
          // onBlur={handleBlur}
          // onFocus={handleFocus}
        />
      </Form.Item>

      <Form.Item
        label="Email"
        name="email"
        validateTrigger="onBlur"
        rules={[
          {
            required: true,
            message: 'Please provide your email address.',
          },
          {
            type: 'email',
            message: 'Please enter a valid email address.'
          }
        ]}
      >
        <Input 
          placeholder="Email"
          // onBlur={handleBlur}
          // onFocus={handleFocus}
        />
      </Form.Item>

      <Form.Item
          name="message"
          label="Message"
          validateTrigger="onBlur"
          rules={[
            { 
              required: true, 
              message: 'Please provide a message.' 
            }
          ]}
        >
          <Input.TextArea rows={4} 
            placeholder="Leave a message..."
            // onBlur={handleBlur}
            // onFocus={handleFocus}
          />
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