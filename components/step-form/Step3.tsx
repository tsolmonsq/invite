import React from "react";
import { Card, Typography, Button } from "antd";

const { Title, Text } = Typography;

const Step3 = ({
  formData = { organizer: '', startDate: null, endDate: null,address: '', guests: [] },
  submitForm = () => {},
}: {
  formData: any;
  submitForm: any;
}) => {
  const formattedStartDate = formData.startDate
    ? new Date(formData.startDate).toLocaleDateString('en-US')
    : 'N/A';

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
        <div style={{ marginBottom: "16px" }}>
          <Text strong>Эвентийн нэр:</Text> <Text>{formData.organizer || 'N/A'}</Text>
        </div>
        <div style={{ marginBottom: "16px" }}>
          <Text strong>Огноо:</Text> <Text>{formattedStartDate}</Text>
        </div>
        <div style={{ marginBottom: "16px" }}>
          <Text strong>Огноо:</Text> <Text>{formattedEndDate}</Text>
        </div>
        <div style={{ marginBottom: "16px" }}>
          <Text strong>Байршил:</Text> <Text>{formData.address || 'N/A'}</Text>
        </div>
        <div style={{ marginBottom: "16px" }}>
          <Text strong>Урилга илгээх зочдын тоо:</Text>{" "}
          <Text>{formData.guests?.length || 0}</Text>
        </div>
      </Card>
      <Button
        type="primary"
        size="large"
        block
        style={{ borderRadius: "8px" }}
        onClick={submitForm}
      >
        Илгээх
      </Button>
    </div>
  );
};

export default Step3;
