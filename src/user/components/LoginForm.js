import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';

const onFinish = (values) => {
  console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

const LoginForm = () => (
  <Form
    name="basic"
    initialValues={{
      remember: true,
    }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item
      name="username"
      rules={[
        {
          required: true,
          message: 'Istifadəçi adını daxil edin',
        },
      ]}
    >
      <Input placeholder="Istifadəçi adını daxil edin"/>
    </Form.Item>

    <Form.Item
      name="password"
      rules={[
        {
          required: true,
          message: 'Şifrəni daxil edin',
        },
      ]}
    >
      <Input.Password placeholder="Şifrəni daxil edin" />
    </Form.Item>

    <Form.Item
      name="remember"
      valuePropName="checked"
    >
      <Checkbox>Yadda saxla</Checkbox>
    </Form.Item>

    <Form.Item>
      <Button type="primary" htmlType="submit" style={{width:'100%'}}>
        Daxil ol
      </Button>
    </Form.Item>
  </Form>
);
export default LoginForm;