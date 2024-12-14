import React from 'react';

// Event үүсгэх Custom Form component-г импортлоно. 
import Form from "@/components/step-form/Form";

// Шинэ эвент үүсгэх хуудас харуулах CreateEvent component
export default function CreateEvent() {
  return (
    <div>
      {/* Custom Form component-г дүрслэх */}
      <Form />
    </div>
  );
}
