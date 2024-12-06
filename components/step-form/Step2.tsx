import React, { useState } from 'react';
import Modal from 'react-modal';

const Step2 = ({ formData, setFormData, nextStep } : { formData: any, setFormData: any, nextStep: any }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [guestData, setGuestData] = useState({ email: '', surname: '', name: '', phone: '' });

  const handleAddGuest = () => {
    setFormData({
      ...formData,
      guests: [...formData.guests, guestData],
    });
    setModalIsOpen(false);
    setGuestData({ email: '', surname: '', name: '', phone: '' });
  };

  return (
    <div>
      <h2>Step 2: Add Guests</h2>
      <button onClick={() => setModalIsOpen(true)}>Зочид нэмэх</button>
      <table>
        <thead>
          <tr>
            <th>Имэйл хаяг</th>
            <th>Овог</th>
            <th>Нэр</th>
            <th>Утасны дугаар</th>
          </tr>
        </thead>
        <tbody>
          {formData.guests.map((guest: any, index: any) => (
            <tr key={index}>
              <td>{guest.email}</td>
              <td>{guest.surname}</td>
              <td>{guest.name}</td>
              <td>{guest.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
        <h2>Зочны мэдээлэл оруулах</h2>
        <form onSubmit={(e) => { e.preventDefault(); handleAddGuest(); }}>
          <div>
            <label>Имэйл хаяг:</label>
            <input
              type="email"
              value={guestData.email}
              onChange={(e) => setGuestData({ ...guestData, email: e.target.value })}
              required
            />
          </div>
          <div>
            <label>Овог:</label>
            <input
              type="text"
              value={guestData.surname}
              onChange={(e) => setGuestData({ ...guestData, surname: e.target.value })}
              required
            />
          </div>
          <div>
            <label>Нэр:</label>
            <input
              type="text"
              value={guestData.name}
              onChange={(e) => setGuestData({ ...guestData, name: e.target.value })}
              required
            />
          </div>
          <div>
            <label>Утасны дугаар:</label>
            <input
              type="tel"
              value={guestData.phone}
              onChange={(e) => setGuestData({ ...guestData, phone: e.target.value })}
              required
            />
          </div>
          <button type="submit">OK</button>
        </form>
      </Modal>

      <button onClick={nextStep}>Үргэлжлүүлэх</button>
    </div>
  );
};

export default Step2;
