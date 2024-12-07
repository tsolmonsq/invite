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
    startDate: new Date(),
    endDate: new Date(),
    address: "",
    guests: [],
  });

  const onChange = (value: number) => {
    setStep(value+1);
  }

  const nextStep = () => setStep(step + 1);
  const submitForm = () => {
    alert("Form submitted");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-10 px-5">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-xl w-full">
        {/* Step Indicator */}
        <Steps current={step - 1} className="mb-8" onChange={onChange}>
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
      </div>
    </div>
  );
};

export default Form;
