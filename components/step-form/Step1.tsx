import React from "react";
import { Form, Input, Button, DatePicker, Upload } from "antd";
import type { UploadFile } from "antd/es/upload/interface";
import dayjs from "dayjs";

const Step1 = ({ formData, setFormData, nextStep }: { formData: any, setFormData: any, nextStep: any }) => {
  const [file, setFile] = React.useState<UploadFile | null>(null);
  
  const handleFileChange = (info: any) => {
    const { file } = info;
    setFile(file);
    setFormData({ ...formData, image: file });
  };

  return (
    <>
      <h2 className="text-2xl font-semibold text-gray-800">Холбоо барих мэдээлэл</h2>
      <Form
        layout="vertical"
        onFinish={nextStep}
        className="space-y-6"
      >

        <Form.Item label="Нэр:" name="name" rules={[{ required: true, message: "Эвентийн нэрийг оруулна уу!" }]}>
          <Input
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="Зохион байгуулагчийн нэрийг оруулна уу"
          />
        </Form.Item>

        <Form.Item label="Зохион байгуулагч:" name="organizer" rules={[{ required: true, message: "Зохион байгуулагчийн нэрийг оруулна уу!" }]}>
          <Input
            value={formData.organizer}
            onChange={(e) => setFormData({ ...formData, organizer: e.target.value })}
            placeholder="Зохион байгуулагчийн нэрийг оруулна уу"
          />
        </Form.Item>

        <Form.Item label="Имэйл хаяг:" name="email" rules={[{ required: true, type: "email", message: "Баталгаат имэйл оруулна уу!" }]}>
          <Input
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="Зохион байгуулагчийн и-мэйл хаягийг оруулна уу"
          />
        </Form.Item>

        <Form.Item label="Утасны дугаар:" name="phone" rules={[{ required: true, message: "Утасны дугаараа оруулна уу!" }, {
            pattern: /^[0-9]{8}$/, 
            message: '8 оронтой утасны дугаар оруулна уу!',
          },]}>
          <Input
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="Зохион байгуулагчийн утасны дугаарыг оруулна уу"
          />
        </Form.Item>

        <Form.Item label="Зураг:" name="image" rules={[{ required: true, message: "Зураг оруулна уу!" }]}>
          <Upload beforeUpload={() => false} onChange={handleFileChange}>
            <Button>Файл сонгох</Button>
          </Upload>
        </Form.Item>

        <Form.Item label="Эхлэх хугацаа:" name="startDate" rules={[{ required: true, message: "Эхлэх хугацааг сонгоно уу!" }]}>
          <DatePicker
            showTime
            format="YYYY-MM-DD HH:mm"
            value={formData.startDate ? dayjs(formData.startDate) : null}
            onChange={(date) => setFormData({ ...formData, startDate: date })}
          />
        </Form.Item>

        <Form.Item label="Дуусах хугацаа:" name="endDate" rules={[{ required: true, message: "Дуусах хугацааг сонгоно уу!" }]}>
          <DatePicker
            showTime
            format="YYYY-MM-DD HH:mm"
            value={formData.endDate ? dayjs(formData.endDate) : null}
            onChange={(date) => setFormData({ ...formData, endDate: date })}
          />
        </Form.Item>

        <Form.Item label="Хаяг:" name="address" rules={[{ required: true, message: "Хаягаа оруулна уу!" }]}>
          <Input
            value={formData.address}
            onChange={(e) => setFormData({ ...formData, address: e.target.value })}
          />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="w-full"
          >
            Үргэлжлүүлэх
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default Step1;
