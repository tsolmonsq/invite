import React from 'react';
import { Form, Input, Button, Checkbox, Flex, Typography } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

// LoginProps интерфэйс нь onSubmit функцтэй харилцахад шаардлагатай
interface LoginProps {
  onSubmit: (values: any) => void;
}

// Хэрэглэгчийн нэвтрэх үйлдлийг удирддаг Login компонент
const Login: React.FC<LoginProps> = ({ onSubmit }) => {
  return (
    <>
    {/* Нэвтрэх хэсгийн гарчиг */}
    <Typography.Title level={2} className="text-start">
      Нэвтрэх
    </Typography.Title>

    {/* Формын хэсэг */}
    <Form
        layout='vertical' // Формын элементийн бүтэц
        name="login-form"
        initialValues={{ remember: true, layout: 'vertical' }} // Анхдагч утгууд
        onFinish={onSubmit} // Формыг амжилттай оруулсны дараа onSubmit функцыг дуудна
        autoComplete="off" // Автомат дүүргэлт идэвхгүй болгоно
        style={{ gap: '2px' }} // Формын элементүүдийн зай
      >
        {/* И-мэйл хаяг оруулах талбар */}
        <Form.Item label="И-мэйл хаяг"
          name="email"
          rules={[
            { required: true, message: 'Please input your Email!' }, // И-мэйл оруулах заавал
            { type: 'email', message: 'Please enter a valid Email!' }, // Хүчинтэй И-мэйл байх ёстой
          ]}
        >
          <Input prefix={<UserOutlined />} placeholder="Email" />
        </Form.Item>

        {/* Нууц үг оруулах талбар */}
        <Form.Item label="Нууц үг"
          name="password"
          rules={[{ required: true, message: 'Please input your Password!' }]} // Нууц үг оруулах заавал
        >
          <Input.Password prefix={<LockOutlined />} placeholder="Password" />
        </Form.Item>

        {/* "Намайг сануулах" болон "Нууц үг мартсан" холбоос */}
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

        {/* Нэвтрэх товч болон "Бүртгүүлэх" холбоос */}
        <Form.Item>
          <Button type="primary" htmlType="submit" className='bg-gradient-custom w-full border-none'>
            Нэвтрэх
          </Button>
          <div className='flex flex-row justify-between items-center h-[40px]'>
            {/* "Бүртгүүлээгүй бол?" */}
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
