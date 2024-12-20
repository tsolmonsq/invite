import React, { useEffect, useState } from "react";
import { Modal, Table, Form, Input, Button } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";

const Step2 = ({
  formData,
  setFormData,
  nextStep,
}: {
  formData: any; // Анхны өгөгдлийг хадгалах
  setFormData: any; // Өгөгдлийг шинэчлэх функц
  nextStep: any; // Дараагийн алхам руу шилжих функц
}) => {
  // Modal харагдах эсэхийг удирдах state
  const [modalVisible, setModalVisible] = useState(false);
  // Зочны мэдээллийг хадгалах state
  const [guestData, setGuestData] = useState({ email: "", lastName: "", firstName: "", phoneNumber: "" });
  // Зочныг засаж байгаа индекстэй холбоотой state
  const [editingIndex, setEditingIndex] = useState<number | null>(null);

  const [form] = Form.useForm();

  useEffect(() => {
    if (editingIndex !== null) {
      form.setFieldsValue(formData.guests[editingIndex]);
    } else {
      form.resetFields();
    }
  }, [editingIndex, formData, form]);

  // Зочны мэдээллийг нэмэх функц
  const handleAddGuest = () => {
    // Засахыг хүссэн зочныг шинэчилж байна
    if (editingIndex !== null) {
      const updatedGuests = formData.guests.map((guest, index) =>
        index === editingIndex ? guestData : guest
      );
      setFormData({ ...formData, guests: updatedGuests });
    } else {
      // Шинээр зочин нэмэх
      setFormData({
        ...formData,
        guests: [...formData.guests, guestData],
      });
    }
    setModalVisible(false);   // Modal хаах
    setGuestData({ email: "", lastName: "", phoneNumber: "", firstName: "", });   // Зочны мэдээллийг цэвэрлэх
    setEditingIndex(null);    // Засах индексийг цэвэрлэх
  };

  // Зочны мэдээлэл засах функц
  const handleEditGuest = (index: number) => {
    setGuestData(formData.guests[index]);   // Засах зочны мэдээллийг авах
    setEditingIndex(index);   // Засаж буй зочны индексийг хадгалах
    setModalVisible(true);    // Modal-ыг нээх
  };

  // Зочныг устгах функц
  const handleRemoveGuest = (index: number) => {
    const updatedGuests = formData.guests.filter((_, i) => i !== index);    // Зочинг устгах
    setFormData({ ...formData, guests: updatedGuests });
  };

  // Хүснэгтэд харагдах багануудад тохирох мэдээллүүдийг тодорхойлно
  const columns = [
    {
      title: "№",   // Дарааллын дугаар
      key: "index",
      render: (text: any, record: any, index: number) => index + 1,   // Дарааллын дугаарыг харуулах
      width: 50,
    },
    {
      title: "Имэйл хаяг",    // Имэйл хаяг
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Овог",    // Овог
      dataIndex: "lastName",
      key: "lastName",
    },
    {
      title: "Нэр",   // Нэр
      dataIndex: "firstName",
      key: "firstName",
    },
    {
      title: "Утасны дугаар",   // Утасны дугаар
      dataIndex: "phoneNumber",
      key: "phoneNumber",
    },
    {
      title: "Үйлдэл",    // Үйлдэл (Засах, Устгах)
      key: "action",
      render: (text: any, record: any, index: number) => (
        <>
          <EditOutlined onClick={() => {
            {/* Засах товч */ }
            handleEditGuest(index)
          }} />
          <DeleteOutlined   // Устгах товч
            className='text-red-700 ml-4'
            onClick={() => {
              handleRemoveGuest(index)
            }} />
        </>
      ),
    },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-gray-800">Зочид</h2>   {/* Хэсгийн нэр */}
      <Button
        type="primary"
        onClick={() => setModalVisible(true)}   // Modal нээх
        className="mb-4"
      >
        Зочид нэмэх
      </Button>
      <Table
        dataSource={formData.guests}    // Зочдын мэдээллийг хүснэгтэнд харуулах
        columns={columns}   // Хүснэгтийн багануудаа тохируулах
        rowKey={(record, index) => (index !== undefined ? index.toString() : '0')}
        bordered
        pagination={false}
      />
      <Modal
        title="Зочны мэдээлэл оруулах"    // Modal-ийн гарчиг
        visible={modalVisible}
        onCancel={() => setModalVisible(false)}   // Modal хаах
        footer={null}
      >
        <Form
          layout="vertical"
          form={form}
          onFinish={handleAddGuest}   // Мэдээлэл оруулсны дараа зочин нэмэх
        >
          {/* Формын хэсгүүд */}
          <Form.Item
            label="Имэйл хаяг:"
            name="email"
            rules={[{ required: true, type: "email", message: "Баталгаат имэйл оруулна уу!" }]}>
            <Input
              value={guestData.email}
              onChange={(e) => setGuestData({ ...guestData, email: e.target.value })}
            />
          </Form.Item>
          <Form.Item
            label="Овог"
            name="lastName"
            rules={[{ required: true, message: "Овгоо оруулна уу!" }]}
          >
            <Input
              value={guestData.lastName}
              onChange={(e) => setGuestData({ ...guestData, lastName: e.target.value })}
            />
          </Form.Item>
          <Form.Item
            label="Нэр"
            name="firstName"
            rules={[{ required: true, message: "Нэрээ оруулна уу!" }]}
          >
            <Input
              value={guestData.firstName}
              onChange={(e) => setGuestData({ ...guestData, firstName: e.target.value })}
            />
          </Form.Item>
          <Form.Item
            label="Утасны дугаар:"
            name="phoneNumber"
            rules={[{ required: true, message: "Утасны дугаараа оруулна уу!" }, {
              pattern: /^[0-9]{8}$/,    // Утасны дугаарын форматыг шалгах (8 оронтой)
              message: '8 оронтой утасны дугаар оруулна уу!',
            },]}>
            <Input
              value={guestData.phoneNumber}
              onChange={(e) => setGuestData({ ...guestData, phoneNumber: e.target.value })}
            />
          </Form.Item>
          <div className="flex justify-end space-x-2">
            <Button onClick={() => setModalVisible(false)}>Болих</Button>   {/* Болих товч */}
            <Button type="primary" htmlType="submit">
              OK
            </Button>   {/* OK товч */}
          </div>
        </Form>
      </Modal>
      <Button
        type="primary"
        className="w-full bg-blue-500 hover:bg-green-600 text-white"
        onClick={nextStep}    // Дараагийн алхам руу шилжих
      >
        Үргэлжлүүлэх
      </Button>
    </div>
  );
};

export default Step2;
