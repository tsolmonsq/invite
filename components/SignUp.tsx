import React from 'react';
import { Form, Input, Button, Space, Typography, Flex, Checkbox, Select } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const { Option } = Select;

interface SignUpProps {
  onSubmit: (values: any) => void;
}

const SignUp: React.FC<SignUpProps> = ({ onSubmit }) => {


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
    <Typography.Title level={2} className="text-start">
      Бүртгүүлэх
    </Typography.Title>
    <Form
      layout='vertical'
      name="signup-form"
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
        style={{ marginBottom: '12px' }}
      >
        <Input prefix={<UserOutlined />} placeholder="Email" />
      </Form.Item>

      <div className='flex flex-row justify-between'>
        <Form.Item
            name="lastname"
            label="Овог"
            rules={[{ required: true, message: 'Please input your lastname!', whitespace: true }]}
            style={{ marginBottom: '12px' }}
        >
            <Input />
        </Form.Item>

        <Form.Item
            name="firstname"
            label="Нэр"
            rules={[{ required: true, message: 'Please input your firsname!', whitespace: true }]}
            style={{ marginBottom: '12px' }}
        >
            <Input />
        </Form.Item>
      </div>

      <Form.Item
        name="phone"
        label="Утасны дугаар"
        rules={[{ required: true, message: 'Please input your phone number!' }]}
        style={{ marginBottom: '12px' }}
      >
        <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
      </Form.Item>

      <Form.Item
        name="password"
        label="Нууц үг"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
        style={{ marginBottom: '12px' }}
        hasFeedback
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="confirm"
        label="Нууц үг баталгаажуулах"
        dependencies={['password']}
        hasFeedback
        style={{ marginBottom: '12px' }}
        rules={[
          {
            required: true,
            message: 'Please confirm your password!',
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error('The new password that you entered do not match!'));
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>

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

      <Form.Item
        name="agreement"
        valuePropName="checked"
        style={{ marginBottom: '12px' }}
        rules={[
          {
            validator: (_, value) =>
              value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
          },
        ]}
      >
        <Checkbox>
          <a href="">Үйлчилгээний нөхцөл</a> хүлээн зөвшөөрсөн
        </Checkbox>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className='bg-gradient-custom w-full border-none'>
         Бүртгүүлэх
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

export default SignUp;
