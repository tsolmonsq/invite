'use client'

// Хэрэгтэй library болон component-г импортлоно. 
import React from 'react';
import type { FormProps } from 'antd'; // Ant design-ний form-ийн төрлүүд
import { Button, Form, Input } from 'antd'; // Ашиглагдах ant design-ний компонентууд 
import { UserOutlined } from '@ant-design/icons'; // Ашиглагдах ant design-ний icon-ууд

// Form-ийн талбаруудын төрөл тодорхойлсон
type FieldType = {
  lastname?: string;    // Овог оруулах талбар
  firstname?: string;   // Нэр оруулах талбар
  email?: string;       // И-мэйл оруулах талбар
  phone?: string;       // Утасны дугаар оруулах талбар
};

// Form амжилттай илгээгдэх үед дуудагдах функц
const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
  console.log('Success:', values);  // Амжилттай илгээсэн утгуудыг бүртгэнэ
};

// Form илгээх амжилтгүй болох үед дуудагдах функц
const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
  console.log('Failed:', errorInfo);  // Бүртгэл баталгаажуулалтын алдаа
};

// Хэрэглэгчийн хувийн мэдээллийг оруулах form-г харуулдаг component
const UserInfo: React.FC = () => {
  return (
    <div className='ml-32 border border-gray-400 rounded-2xl max-w-md p-8'>
      {/* Хуудасны гарчиг */}
      <h1 className='text-2xl lg:text-3xl'>
        Хувийн мэдээлэл
      </h1>

      {/* Хэрэглэгчийн мэдээлэл оруулах Ant design-н Form */}
      <Form
        name="basic"
        labelCol={{ span: 24 }}
        wrapperCol={{ span: 24 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        {/* Овог оруулах талбар */}
        <Form.Item<FieldType>
          label="Овог"
          name="lastname"
          rules={[{ required: true, message: 'Please input your lastname!' }]}
        >
          <Input placeholder="lastname"/>
        </Form.Item>

        {/* Нэр оруулах талбар */}
        <Form.Item<FieldType>
          label="Нэр"
          name="firstname"
          rules={[{ required: true, message: 'Please input your firstname!' }]}
        >
          <Input placeholder="firstname"/>
        </Form.Item>

        {/* И-мэйл оруулах талбар */}
        <Form.Item label="И-мэйл хаяг"
          name="email"
          rules={[
            { required: true, message: 'Please input your Email!' },
            { type: 'email', message: 'Please enter a valid Email!' },
          ]}
        >
          <Input prefix={<UserOutlined />} placeholder="Email" />
        </Form.Item>

        {/* Утасны дугаар оруулах талбар */}
        <Form.Item
          name="phone"
          label="Утасны дугаар"
          rules={[{ required: true, message: 'Please input your phone number!' }]}
        >
          <Input placeholder="phone number"/>
        </Form.Item>

        {/* Хадгалах товч */}
        <Form.Item label={null}>
          <Button type="primary" htmlType="submit" className='bg-gradient-custom w-full border-none'>
            Хадгалах
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
};

export default UserInfo;