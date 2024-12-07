import React, { useState } from "react";
import { Modal, Table, Form, Input, Button } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";

const Step2 = ({
  formData,
  setFormData,
  nextStep,
}: {
  formData: any;
  setFormData: any;
  nextStep: any;
}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [guestData, setGuestData] = useState({ email: "", surname: "", name: "", phone: "" });
  const [editingIndex, setEditingIndex] = useState<number | null>(null);

  const handleAddGuest = () => {
    if (editingIndex !== null) {
      const updatedGuests = formData.guests.map((guest, index) =>
        index === editingIndex ? guestData : guest
      );
      setFormData({ ...formData, guests: updatedGuests });
    } else {
      setFormData({
        ...formData,
        guests: [...formData.guests, guestData],
      });
    }
    setModalVisible(false);
    setGuestData({ email: "", surname: "", phone: "", name: "", });
    setEditingIndex(null);
  };

  const handleEditGuest = (index: number) => {
    setGuestData(formData.guests[index]);
    setEditingIndex(index);
    setModalVisible(true);
  };

  const handleRemoveGuest = (index: number) => {
    const updatedGuests = formData.guests.filter((_, i) => i !== index);
    setFormData({ ...formData, guests: updatedGuests });
  };

  const columns = [
    {
      title: "№",
      key: "index",
      render: (text: any, record: any, index: number) => index + 1,
      width: 50,
    },
    {
      title: "Имэйл хаяг",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Овог",
      dataIndex: "surname",
      key: "surname",
    },
    {
      title: "Нэр",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Утасны дугаар",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Үйлдэл",
      key: "action",
      render: (text: any, record: any, index: number) => (
        <>
          <EditOutlined onClick={() => {
            handleEditGuest(index)
          }} />
          <DeleteOutlined
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
      <h2 className="text-2xl font-semibold text-gray-800">Зочид</h2>
      <Button
        type="primary"
        onClick={() => setModalVisible(true)}
        className="mb-4"
      >
        Зочид нэмэх
      </Button>
      <Table
        dataSource={formData.guests}
        columns={columns}
        rowKey={(record, index) => (index !== undefined ? index.toString() : '0')}
        bordered
        pagination={false}
      />
      <Modal
        title="Зочны мэдээлэл оруулах"
        visible={modalVisible}
        onCancel={() => setModalVisible(false)}
        footer={null}
      >
        <Form
          layout="vertical"
          onFinish={handleAddGuest}
        >
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
            <Button onClick={() => setModalVisible(false)}>Болих</Button>
            <Button type="primary" htmlType="submit">
              OK
            </Button>
          </div>
        </Form>
      </Modal>
      <Button
        type="primary"
        className="w-full bg-blue-500 hover:bg-green-600 text-white"
        onClick={nextStep}
      >
        Үргэлжлүүлэх
      </Button>
    </div>
  );
};

export default Step2;
