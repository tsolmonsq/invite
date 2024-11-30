import React from 'react';
import { Form, Input, Button, Space,  Checkbox, Flex, Typography } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

interface LoginProps {
  onSubmit: (values: any) => void;
}

const Login: React.FC<LoginProps> = ({ onSubmit }) => {
  return (
    <>
    <Typography.Title level={2} className="text-start">
      Нэвтрэх
    </Typography.Title>
    <Form
      layout='vertical'
      name="login-form"
      initialValues={{ remember: true, layout: 'vertical' }}
      onFinish={onSubmit}
      autoComplete="off"
      style={{ gap: '2px' }}
    >
      <Form.Item label="И-мэйл хаяг"
        name="email"
        rules={[
          { required: true, message: 'Please input your Email!' },
          { type: 'email', message: 'Please enter a valid Email!' },
        ]}
      >
        <Input prefix={<UserOutlined />} placeholder="Email" />
      </Form.Item>

      <Form.Item label="Нууц үг"
        name="password"
        rules={[{ required: true, message: 'Please input your Password!' }]}
      >
        <Input.Password prefix={<LockOutlined />} placeholder="Password" />
      </Form.Item>

      <Form.Item>
        <Flex justify="space-between" align="center">
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
          <a 
            href=""
            className='underline font-bold'
            >Нууц үг мартсан?</a>
        </Flex>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className='bg-gradient-custom w-full border-none'>
         Нэвтрэх
      </Button>
        <div className='flex flex-row justify-between items-center h-[40px]'>
            Та бүртгэлгүй бол? 
            <a
              href='' 
              className='underline font-bold'
              >Бүртгүүлэх</a>
        </div>
      </Form.Item>
    </Form>
    </>
  );
};

export default Login;
