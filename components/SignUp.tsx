import React from 'react';
import { Form, Input, Button, Space, Typography, Flex, Checkbox, Select } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const { Option } = Select;

// onSubmit функцтэй харилцахад шаардлагатай SignUpProps интерфэйс
interface SignUpProps {
  onSubmit: (values: any) => void;
}

// хэрэглэгчийн бүртгэл хийх үйлдлийг удирддаг SignUp компонент 
const SignUp: React.FC<SignUpProps> = ({ onSubmit }) => {

  // Утасны дугаарыг орлуулах функц
  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select style={{ width: 70 }}>
        <Option value="1">+1</Option>
        <Option value="976">+976</Option>
      </Select>
    </Form.Item>
  );

  return (
    <>
      {/* Бүртгүүлэх хэсгийн гарчиг */}
      <Typography.Title level={2} className="text-start">
        Бүртгүүлэх
      </Typography.Title>
      {/* Формын хэсэг */}
      <Form
        layout='vertical' // Формын элементийн бүтэц
        name="signup-form"
        initialValues={{ remember: true, layout: 'vertical' }} // Анхдагч утгууд
        onFinish={onSubmit} // Формыг амжилттай дүүргэсний дараа onSubmit функцыг дуудна
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
          style={{ marginBottom: '12px' }}
        >
          <Input prefix={<UserOutlined />} placeholder="Email" />
        </Form.Item>

        {/* Нэр, Овог оруулах талбарууд */}
        <div className='flex flex-row justify-between'>
          <Form.Item
            name="lastName"
            label="Овог"
            rules={[{ required: true, message: 'Please input your lastname!', whitespace: true }]} // Овог оруулах заавал
            style={{ marginBottom: '12px' }}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="firstName"
            label="Нэр"
            rules={[{ required: true, message: 'Please input your firstname!', whitespace: true }]} // Нэр оруулах заавал
            style={{ marginBottom: '12px' }}
          >
            <Input />
          </Form.Item>
        </div>

        {/* Утасны дугаар оруулах талбар */}
        <Form.Item
          name="phoneNumber"
          label="Утасны дугаар"
          rules={[{ required: true, message: 'Please input your phone number!' }]} // Утасны дугаар оруулах заавал
          style={{ marginBottom: '12px' }}
        >
          <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
        </Form.Item>

        {/* Нууц үг оруулах талбар */}
        <Form.Item
          name="password"
          label="Нууц үг"
          rules={[
            { required: true, message: 'Please input your password!' }, // Нууц үг оруулах заавал
          ]}
          style={{ marginBottom: '12px' }}
          hasFeedback
        >
          <Input.Password />
        </Form.Item>

        {/* Нууц үг баталгаажуулах талбар */}
        <Form.Item
          name="passwordConfirmation"
          label="Нууц үг баталгаажуулах"
          dependencies={['password']}
          hasFeedback
          style={{ marginBottom: '12px' }}
          rules={[
            { required: true, message: 'Please confirm your password!' }, // Нууц үгийг баталгаажуулах заавал
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error('The new password that you entered do not match!')); // Нууц үг таарахгүй бол алдаа
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item>

        {/* "Намайг санах" болон "Нууц үг мартсан" холбоос */}
        <Form.Item>
          <Flex justify="space-between" align="center">
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Намайг санах</Checkbox>
            </Form.Item>
            <a
              href=""
              className='underline font-bold'
            >Нууц үг мартсан?</a>
          </Flex>
        </Form.Item>

        {/* Үйлчилгээний нөхцөлийг хүлээн зөвшөөрөх чекбокс */}
        <Form.Item
          name="agreement"
          valuePropName="checked"
          style={{ marginBottom: '12px' }}
          rules={[
            {
              validator: (_, value) =>
                value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')), // Хүлээн зөвшөөрөх шаардлагатай
            },
          ]}
        >
          <Checkbox>
            <a href="">Үйлчилгээний нөхцөл</a> хүлээн зөвшөөрсөн
          </Checkbox>
        </Form.Item>

        {/* Бүртгүүлэх товч */}
        <Form.Item>
          <Button type="primary" htmlType="submit" className='bg-gradient-custom w-full border-none'>
            Бүртгүүлэх
          </Button>
          <div className='flex flex-row justify-between items-center h-[40px]'>
            {/* Бүртгүүлээгүй бол? */}
            Та бүртгэлгүй бол?
            <a
              href=''
              className='underline font-bold'
            >Нэвтрэх</a>
          </div>
        </Form.Item>
      </Form>
    </>
  );
};

export default SignUp;
