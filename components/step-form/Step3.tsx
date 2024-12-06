import React from 'react';

const Step3 = ({ formData, submitForm } : { formData: any, submitForm: any }) => {
  return (
    <div>
      <h2>Step 3: Summary</h2>
      <div>
        <p><strong>Эвентийн нэр:</strong> {formData.organizer}</p>
        <p><strong>Огноо:</strong> {formData.eventDate.toLocaleDateString()}</p>
        <p><strong>Байршил:</strong> {formData.address}</p>
        <p><strong>Урилга илгээх зочдын тоо:</strong> {formData.guests.length}</p>
      </div>
      <button onClick={submitForm}>Илгээх</button>
    </div>
  );
};

export default Step3;
