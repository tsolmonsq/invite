import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Step1 = ({ formData, setFormData, nextStep } : { formData: any, setFormData: any, nextStep: any }) => {
  return (
    <div>
      <h2>Step 1: Event Details</h2>
      <form onSubmit={(e) => { e.preventDefault(); nextStep(); }}>
        <div>
          <label>Зохион байгуулагч:</label> 
          <input
            type="text"
            value={formData.organizer}
            onChange={(e) => setFormData({ ...formData, organizer: e.target.value })}
            required
          />
        </div>
        <div>
          <label>Имэйл хаяг:</label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
          />
        </div>
        <div>
          <label>Утасны дугаар:</label>
          <input
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            required
          />
        </div>
        <div>
          <label>Зураг:</label>
          <input
            type="file"
            
            required
          />
        </div>
        <div>
          <label>Эвент хугацаа:</label>
          <DatePicker
            selected={formData.eventDate}
            onChange={(date) => setFormData({ ...formData, eventDate: date })}
            required
          />
        </div>
        <div>
          <label>Хаяг:</label>
          <input
            type="text"
            value={formData.address}
            onChange={(e) => setFormData({ ...formData, address: e.target.value })}
            required
          />
        </div>
        <button type="submit">Үргэлжлүүлэх</button>
      </form>
    </div>
  );
};

export default Step1;
