import React from "react";
import { Form, Input, Button, DatePicker, Upload } from "antd";
import type { UploadFile } from "antd/es/upload/interface";
import dayjs from "dayjs";

// Step1 нь эхний алхамын холбогдох мэдээллийг авч, дараагийн алхам руу шилжүүлэхэд ашиглагдана.
const Step1 = ({ formData, setFormData, nextStep }: { formData: any, setFormData: any, nextStep: any }) => {
  // Оруулах файл хадгалах хувьсагч
  const [file, setFile] = React.useState<UploadFile | null>(null);
  
  // Файлын өөрчлөлтийг хүлээн авах функц
  const handleFileChange = (info: any) => {
    const { file } = info;
    setFile(file);  // Хувьсагчид файл хадгалах
    setFormData({ ...formData, image: file });  // formData-д зургийг хадгалах
  };

  return (
    <>
      <h2 className="text-2xl font-semibold text-gray-800">Холбоо барих мэдээлэл</h2>
      <Form
        layout="vertical"
        onFinish={nextStep}
        className="space-y-6"
      >

        {/* Event нэр оруулах */}
        <Form.Item label="Нэр:" name="name" rules={[{ required: true, message: "Эвентийн нэрийг оруулна уу!" }]}>
          <Input
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}  // Нэрийг formData-д хадгалах
            placeholder="Зохион байгуулагчийн нэрийг оруулна уу"
          />
        </Form.Item>

        {/* Зохион байгуулагч нэр оруулах*/}
        <Form.Item label="Зохион байгуулагч:" name="organizer" rules={[{ required: true, message: "Зохион байгуулагчийн нэрийг оруулна уу!" }]}>
          <Input
            value={formData.organizer}
            onChange={(e) => setFormData({ ...formData, organizer: e.target.value })} // Зохион байгуулагчийн нэрийг хадгалах
            placeholder="Зохион байгуулагчийн нэрийг оруулна уу"
          />
        </Form.Item>

        {/* Имэйл хаяг оруулах талбар */}
        <Form.Item label="Имэйл хаяг:" name="email" rules={[{ required: true, type: "email", message: "Баталгаат имэйл оруулна уу!" }]}>
          <Input
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })} // Имэйлийг formData-д хадгалах
            placeholder="Зохион байгуулагчийн и-мэйл хаягийг оруулна уу"
          />
        </Form.Item>

        {/* Утасны дугаар оруулах талбар */}
        <Form.Item label="Утасны дугаар:" name="phone" rules={[{ required: true, message: "Утасны дугаараа оруулна уу!" }, {
            pattern: /^[0-9]{8}$/,    // Утасны дугаарын форматыг шалгах (8 оронтой)
            message: '8 оронтой утасны дугаар оруулна уу!',
          },]}>
          <Input
            value={formData.phoneNumber}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}   // Утасны дугаарыг хадгалах
            placeholder="Зохион байгуулагчийн утасны дугаарыг оруулна уу"
          />
        </Form.Item>

        {/* Зураг оруулах талбар */}
        <Form.Item label="Зураг:" name="image" rules={[{ required: true, message: "Зураг оруулна уу!" }]}>
          <Upload beforeUpload={() => false} onChange={handleFileChange}>   {/* Файл оруулах функц */}
            <Button>Файл сонгох</Button>
          </Upload>
        </Form.Item>

        {/* Эхлэх хугацаа оруулах талбар */}
        <Form.Item label="Эхлэх хугацаа:" name="startDate" rules={[{ required: true, message: "Эхлэх хугацааг сонгоно уу!" }]}>
          <DatePicker
            showTime
            format="YYYY-MM-DD HH:mm"
            value={formData.startDate ? dayjs(formData.startDate) : null}   // Эхлэх хугацааг тохируулах
            onChange={(date) => setFormData({ ...formData, startDate: date })}    // Эхлэх хугацааг хадгалах
          />
        </Form.Item>

        {/* Дуусах хугацаа оруулах талбар */}
        <Form.Item label="Дуусах хугацаа:" name="endDate" rules={[{ required: true, message: "Дуусах хугацааг сонгоно уу!" }]}>
          <DatePicker
            showTime
            format="YYYY-MM-DD HH:mm"
            value={formData.endDate ? dayjs(formData.endDate) : null}   // Дуусах хугацааг тохируулах
            onChange={(date) => setFormData({ ...formData, endDate: date })}    // Дуусах хугацааг хадгалах
          />
        </Form.Item>

        {/* Хаяг оруулах талбар */}
        <Form.Item label="Хаяг:" name="address" rules={[{ required: true, message: "Хаягаа оруулна уу!" }]}>
          <Input
            value={formData.address}
            onChange={(e) => setFormData({ ...formData, address: e.target.value })}   // Хаягийг хадгалах
          />
        </Form.Item>

        {/* Үргэлжлүүлэх товч */}
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="w-full"
          >
            Үргэлжлүүлэх    {/* Энэ товч дарагдсанаар дараагийн алхам руу шилжинэ */}
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default Step1;
