'use client'
import React from 'react';
import type { FormProps } from 'antd';
import { Button, Form, Input } from 'antd';
import { UserOutlined } from '@ant-design/icons';

type FieldType = {
  lastname?: string;
  firstname?: string;
  email?: string;
  phone?: string;
};

const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
  console.log('Success:', values);
};

const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

const UserInfo: React.FC = () => {
  return (
    <div className='ml-32 border border-gray-400 rounded-2xl max-w-md p-8'>
      <h1 className='text-2xl lg:text-3xl'>
        Хувийн мэдээлэл
      </h1>
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
        <Form.Item<FieldType>
          label="Овог"
          name="lastname"
          rules={[{ required: true, message: 'Please input your lastname!' }]}
        >
          <Input placeholder="lastname"/>
        </Form.Item>

        <Form.Item<FieldType>
          label="Нэр"
          name="firstname"
          rules={[{ required: true, message: 'Please input your firstname!' }]}
        >
          <Input placeholder="firstname"/>
        </Form.Item>


        <Form.Item label="И-мэйл хаяг"
          name="email"
          rules={[
            { required: true, message: 'Please input your Email!' },
            { type: 'email', message: 'Please enter a valid Email!' },
          ]}
        >
          <Input prefix={<UserOutlined />} placeholder="Email" />
        </Form.Item>

        <Form.Item
          name="phone"
          label="Утасны дугаар"
          rules={[{ required: true, message: 'Please input your phone number!' }]}
        >
          <Input placeholder="phone number"/>
        </Form.Item>


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