"use client"
import React, { useState } from 'react';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';

const Form = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    organizer: '',
    email: '',
    phone: '',
    image: null,
    eventDate: new Date(),
    address: '',
    guests: [],
  });

  const nextStep = () => setStep(step + 1);
  const submitForm = () => {
    alert('Form submitted');
  };

  return (
    <div>
      {step === 1 && <Step1 formData={formData} setFormData={setFormData} nextStep={nextStep} />}
      {step === 2 && <Step2 formData={formData} setFormData={setFormData} nextStep={nextStep} />}
      {step === 3 && <Step3 formData={formData} submitForm={submitForm} />}
    </div>
  );
};

export default Form;
