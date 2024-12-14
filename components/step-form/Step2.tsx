import React, { useState } from "react";
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
  const [guestData, setGuestData] = useState({ email: "", surname: "", name: "", phone: "" });
  // Зочныг засаж байгаа индекстэй холбоотой state
  const [editingIndex, setEditingIndex] = useState<number | null>(null);

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
    setGuestData({ email: "", surname: "", phone: "", name: "", });   // Зочны мэдээллийг цэвэрлэх
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
      dataIndex: "surname",
      key: "surname",
    },
    {
      title: "Нэр",   // Нэр
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Утасны дугаар",   // Утасны дугаар
      dataIndex: "phone",
      key: "phone",
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
          onFinish={handleAddGuest}   // Мэдээлэл оруулсны дараа зочин нэмэх
        >
          {/* Формын хэсгүүд */}
          <Form.Item
            label="Имэйл хаяг"
            name="email"
            rules={[{ required: true, message: "Имэйл хаяг оруулна уу!" }]}
          >
            <Input
              value={guestData.email}
              onChange={(e) => setGuestData({ ...guestData, email: e.target.value })}
            />
          </Form.Item>
          <Form.Item
            label="Овог"
            name="surname"
            rules={[{ required: true, message: "Овгоо оруулна уу!" }]}
          >
            <Input
              value={guestData.surname}
              onChange={(e) => setGuestData({ ...guestData, surname: e.target.value })}
            />
          </Form.Item>
          <Form.Item
            label="Нэр"
            name="name"
            rules={[{ required: true, message: "Нэрээ оруулна уу!" }]}
          >
            <Input
              value={guestData.name}
              onChange={(e) => setGuestData({ ...guestData, name: e.target.value })}
            />
          </Form.Item>
          <Form.Item
            label="Утасны дугаар"
            name="phone"
            rules={[{ required: true, message: "Утасны дугаараа оруулна уу!" }]}
          >
            <Input
              value={guestData.phone}
              onChange={(e) => setGuestData({ ...guestData, phone: e.target.value })}
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
