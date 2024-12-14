"use client";

// Эвент үүсгэх үйл явцыг гурван алхамаар удирддаг Form компонент.
import React, { useState } from "react";
import { Steps, message } from "antd";    // Ant Design ашиглан алхамуудыг харуулах
import Step1 from "./Step1";              // Эхний алхамын компонент
import Step2 from "./Step2";              // Хоёрдугаар алхамын компонент
import Step3 from "./Step3";              // Гуравдугаар алхамын компонент
import { SiGoogleforms } from "react-icons/si";   // Google forms icon
import { RxAvatar } from "react-icons/rx";        // Avatar icon
import { IoMdCheckmarkCircle } from "react-icons/io"; // Checkmark icon
import { useRouter } from "next/navigation"; // Next.js navigation ашиглах

const { Step } = Steps;

// Гурван алхамтай Form компонент
const Form = () => {
  const [step, setStep] = useState(1);  // Одоогийн алхамыг хадгалах state.
  const router = useRouter();           // Хуудас шилжүүлэх

  // Form-ны өгөгдлийг хадгалах state
  const [formData, setFormData] = useState<{
    name: string;       // event нэр
    organizer: string;  // event зохион байгуулагч
    email: string;      // Зохион байгуулагчийн и-мэйл
    phone: string;      // Зохион байгуулагчийн утас
    image: File | null; // Эвентийн зураг
    startDate: Date | null;   // Эвентийн эхлэх огноо
    endDate: Date | null;     // Эвентийн дуусах огноо
    address: string;          // Эвентийн хаяг
    guests: Array<{ name: string; email: string }>;   // Урих зочид
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

  // Алхам солих үйлдэл.
  const onChange = (value: number) => {
    setStep(value + 1); // Алхам нэмэх
  }

  // Дараагийн алхам руу шилжих
  const nextStep = () => setStep(step + 1);

  // API үйлчилгээг үүсгэнэ: event-н өгөгдлийг сервер рүү илгээх.
  const apiService = {
    createEvent: async (eventData: any) => {
      const response = await fetch("http://localhost:4000/events", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(eventData),
      });
      if (!response.ok) {
        throw new Error("Event creation failed"); // Алдаа гарвал мэдэгдэл гаргана.
      }
      return response.json(); // Амжилттай бол өгөгдлийг буцаана.
    },

    createGuests: async (guests: any[], eventId: string) => {
      const response = await fetch("http://localhost:4000/guests", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(guests.map(guest => ({ ...guest, eventId }))), // Зочдын мэдээллийг eventId-тэй холбох.
      });
      if (!response.ok) {
        throw new Error("Guest creation failed"); // Алдаа гарвал мэдэгдэл гаргана.
      }
      return response.json();   // Амжилттай бол зочдын өгөгдлийг буцаана.
    },
  };

  // Форм илгээх үйлдэл.
  const submitForm = async () => {
    try {
      // Event-н өгөгдлийг бэлдэж байна.
      const eventPayload = {
        name: formData.name,
        organizer: formData.organizer,
        email: formData.email,
        phone: formData.phone,
        startDate: formData.startDate ? formData.startDate.toISOString() : null,
        endDate: formData.endDate ? formData.endDate.toISOString() : null,
        address: formData.address,
      };

      // Эвент үүсгэж байна.
      const createdEvent = await apiService.createEvent(eventPayload);

      // Хэрэв зочид байгаа бол тэднийг сервер рүү илгээж байна.
      if (formData.guests && formData.guests.length > 0) {
        await apiService.createGuests(formData.guests, createdEvent.id);
      }

      // Мэдэгдэл гаргах: Эвент болон зочдыг амжилттай илгээсэн.
      message.success("Эвент болон зочид амжилттай илгээгдлээ!");
      router.push("/events"); // /events хуудас руу шилжих.
    } catch (error) {
      console.error("Error:", error);
      message.error("Өгөгдлийг илгээхэд алдаа гарлаа!");  // Алдаа гарвал тухайн мэдэгдэл гаргана.
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-10 px-5">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-xl w-full">
        {/* Алхамын толгой хэсэг */}
        <Steps current={step - 1} className="mb-8" onChange={onChange}>
          <Step icon={<span><SiGoogleforms /></span>} />
          <Step icon={<span><RxAvatar /></span>} />
          <Step icon={<span><IoMdCheckmarkCircle /></span>} />
        </Steps>

        <div>
          {/* Алхмууд */}
          {step === 1 && (
            <Step1 formData={formData} setFormData={setFormData} nextStep={nextStep} />   // Эвентийн мэдээлэл оруулах алхам
          )}
          {step === 2 && (
            <Step2 formData={formData} setFormData={setFormData} nextStep={nextStep} />   // Зочид оруулах алхам
          )}
          {step === 3 && (
            <Step3 formData={formData} submitForm={submitForm} />   // Эвент, урилга баталгаажуулах хэсэг
          )}
        </div>
      </div>
    </div>
  );
};

export default Form;
