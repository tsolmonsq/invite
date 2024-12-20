import React from "react";
import { Card, Typography, Button } from "antd";
import { useRouter } from "next/navigation";    // Next.js-ийн useRouter hook-ийг ашиглана

const { Text } = Typography;

const Step3 = ({
  formData = { organizer: '', startDate: null, endDate: null, address: '', guests: [] }, // Хэрэглэгчийн оруулсан мэдээлэл
  submitForm = () => { }, // Форма илгээх функц
}: {
  formData: any;
  submitForm: any;
}) => {
  const router = useRouter();   // Router ашиглан хуудас руу шилжих
  // Эхлэх огноог тохируулна
  const formattedStartDate = formData.startDate
    ? new Date(formData.startDate).toLocaleDateString('en-US')
    : 'N/A';

  // Дуусах огноог тохируулна
  const formattedEndDate = formData.endDate
    ? new Date(formData.endDate).toLocaleDateString('en-US')
    : 'N/A';

  return (
    <div className="space-y-6">
      <Card
        bordered
        style={{
          borderRadius: "8px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        {/* Эвентийн нэр */}
        <div style={{ marginBottom: "16px" }}>
          <Text strong>Эвентийн нэр:</Text> <Text>{formData.organizer || 'N/A'}</Text>
        </div>
        {/* Эхлэх огноо */}
        <div style={{ marginBottom: "16px" }}>
          <Text strong>Эхлэх огноо:</Text> <Text>{formattedStartDate}</Text>
        </div>
        {/* Дуусах огноо */}
        <div style={{ marginBottom: "16px" }}>
          <Text strong>Дуусах огноо:</Text> <Text>{formattedEndDate}</Text>
        </div>
        {/* Байршил */}
        <div style={{ marginBottom: "16px" }}>
          <Text strong>Байршил:</Text> <Text>{formData.address || 'N/A'}</Text>
        </div>
        {/* Зочдын тоо */}
        <div style={{ marginBottom: "16px" }}>
          <Text strong>Урилга илгээх зочдын тоо:</Text>{" "}
          <Text>{formData.guests?.length || 0}</Text>
        </div>
      </Card>
      {/* Форма илгээх товч */}
      <Button
        type="primary"
        size="large"
        block
        style={{ borderRadius: "8px" }}
        onClick={() => {
          submitForm(); // Форма илгээх
          router.push("/events"); // events хуудас руу шилжих
        }}
      >
        Илгээх
      </Button>
    </div>
  );
};

export default Step3;
