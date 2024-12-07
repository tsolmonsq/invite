"use client";
import React, { useState } from "react";
import { Steps } from "antd";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import { SiGoogleforms } from "react-icons/si";
import { RxAvatar } from "react-icons/rx";
import { IoMdCheckmarkCircle } from "react-icons/io";
import { message } from "antd";


const { Step } = Steps;

const Form = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<{
    name: string;
    organizer: string;
    email: string;
    phone: string;
    image: File | null;
    startDate: Date | null; // Specify Date or null
    endDate: Date | null;   // Specify Date or null
    address: string;
    guests: Array<{ name: string; email: string }>; // Assuming guests contain name and email
  }>({
    name: "",
    organizer: "",
    email: "",
    phone: "",
    image: null,
    startDate: null,
    endDate: null,
    address: "",
    guests: [],
  });
  

  const onChange = (value: number) => {
    setStep(value+1);
  }

  const nextStep = () => setStep(step + 1);

  const apiService = {
    createEvent: async (eventData: any) => {
      const response = await fetch("http://localhost:4000/events", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(eventData),
      });
      if (!response.ok) {
        throw new Error("Event creation failed");
      }
      return response.json();
    },
  
    createGuests: async (guests: any[], eventId: string) => {
      const response = await fetch("http://localhost:4000/guests", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(guests.map(guest => ({ ...guest, eventId }))),
      });
      if (!response.ok) {
        throw new Error("Guest creation failed");
      }
      return response.json();
    },
  };

  const submitForm = async () => {
    try {
      // Prepare event data
      const eventPayload = {
        name: formData.name,
        organizer: formData.organizer,
        email: formData.email,
        phone: formData.phone,
        startDate: formData.startDate ? formData.startDate.toISOString() : null,
        endDate: formData.endDate ? formData.endDate.toISOString() : null,
        address: formData.address,
      };
  
      // 1. Create the event
      const createdEvent = await apiService.createEvent(eventPayload);
  
      // 2. Create guests linked to the event
      if (formData.guests && formData.guests.length > 0) {
        await apiService.createGuests(formData.guests, createdEvent.id);
      }
  
      message.success("Эвент болон зочид амжилттай илгээгдлээ!");
    } catch (error) {
      console.error("Error:", error);
      message.error("Өгөгдлийг илгээхэд алдаа гарлаа!");
    }
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
