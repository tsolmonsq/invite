"use client";
import React, { useState } from "react";
import { Steps } from "antd";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import { SiGoogleforms } from "react-icons/si";
import { RxAvatar } from "react-icons/rx";
import { IoMdCheckmarkCircle } from "react-icons/io";

const { Step } = Steps;

const Form = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    organizer: "",
    email: "",
    phone: "",
    image: null,
    eventDate: new Date(),
    address: "",
    guests: [],
  });

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);
  const submitForm = () => {
    alert("Form submitted");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-10 px-5">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-xl w-full">
        {/* Step Indicator */}
        <Steps current={step - 1} className="mb-8">
          <Step icon={<span><SiGoogleforms /></span>} />
          <Step  icon={<span><RxAvatar /></span>} />
          <Step  icon={<span><IoMdCheckmarkCircle /></span>} />
        </Steps>

        {/* Step Content */}
        <div>
          {step === 1 && (
            <Step1 formData={formData} setFormData={setFormData} nextStep={nextStep} />
          )}
          {step === 2 && (
            <Step2 formData={formData} setFormData={setFormData} nextStep={nextStep} />
          )}
          {step === 3 && (
            <Step3 formData={formData} submitForm={submitForm} />
          )}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-6">
          {step > 1 && (
            <button
              onClick={prevStep}
              className="bg-gray-300 hover:bg-gray-400 text-gray-700 py-2 px-4 rounded"
            >
              Буцах
            </button>
          )}
          {step < 3 && (
            <button
              onClick={nextStep}
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
            >
              Үргэлжлүүлэх
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Form;
