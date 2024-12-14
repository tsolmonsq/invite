'use client';

// Шаардлагатай компонент болон сангуудыг импортлох
import { PrimaryButton } from '@/components/CustomButton';            //custom PrimaryButton компонент
import EventCard from '@/components/EventCard';                       // EventCard компонент нь эвент мэдээллийг харуулна
import { AlignLeftOutlined, HomeOutlined } from '@ant-design/icons';  // Ant Design-ийн icon-ууд
import { Radio } from 'antd';                                         // Ant Design-ийн Radio товчнуудыг ашиглана
import { useRouter } from 'next/navigation';                          // Next.js-ийн navigation ашиглах
import React, { useState, useEffect } from 'react';                   // React-ийн useState, useEffect ашиглах

const Events = () => {
  const router = useRouter();   // Next.js-ийн router ашиглаж navigation хийх

  // Эвентийн харагдах байдлыг удирдах (хэвтээ эсвэл босоо)
  const [formLayout, setFormLayout] = useState('horizontal');

  // Эвентүүдийн мэдээллийг хадгалах төлөв
  const [events, setEvents] = useState([]);

  // Уншиж байгаа эсэхийг харуулах төлөв
  const [loading, setLoading] = useState(true);

  // Харагдах байдал өөрчлөгдөхөд дуудагдана
  const onChange = (e: any) => {
    setFormLayout(e.target.value);
  };

  // "Эвент үүсгэх" хуудас руу шилжих
  const createEvent = () => {
    router.push('/create-event');
  };

  // Компонент анх ачаалагдахад эвентийн мэдээллийг fetch хийх
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch('http://localhost:4000/events'); // API хаяг
        if (!response.ok) {
          throw new Error('Failed to fetch events');
        }
        const data = await response.json();     // JSON мэдээлэл болгон хөрвүүлэх
        setEvents(data);                        // Мэдээллийг component-н төлөвт хадгалах
      } catch (error) {
        console.error('Error fetching events:', error);
      } finally {
        setLoading(false);                      // Ачаалж дууссаны дараа "loading"-г байхгүй болгох
      }
    };

    fetchEvents();    // Функцийг дуудах
  }, []);

  return (
    <div>
      {/* Хуудасны толгой хэсэг */}
      <div className="flex flex-row justify-between border-b border-gray-500 pb-6">
        <h2 className="font-bold text-2xl lg:text-3xl">Эвентүүд</h2>
        <PrimaryButton text="ЭВЕНТ ҮҮСГЭХ" onClick={createEvent} /> {/* Шинэ эвент үүсгэх товч */}
      </div>

      {/* Хэвтээ/Босоо харагдах байдал сонгох товчнууд */}
      <Radio.Group className="m-4" value={formLayout} onChange={onChange}>
        <Radio.Button value="horizontal">
          <HomeOutlined />  {/* Хэвтээ байрлал */}
        </Radio.Button>
        <Radio.Button value="vertical">
          <AlignLeftOutlined /> {/* Босоо байрлал */}
        </Radio.Button>
      </Radio.Group>

      {/* Эвентүүд ачаалж байна уу эсвэл хоосон байна уу шалгах */}
      {loading ? (
        <p className="mt-8 text-center">Loading events...</p>   // Ачаалж байгаа үед
      ) : (
        <div
          className={`flex ${formLayout === 'horizontal' ? 'flex-row flex-wrap' : 'flex-col'
            } gap-4 justify-start mt-8`}
        >
          {/* Эвентүүдийг харуулах хэсэг */}
          {events.length > 0 ? (
            events.map((event: any) => (
              <EventCard
                key={event.id}
                layout={formLayout}
                title={event.name}
                desc={event.address}
                date={event.startDate}
              />
            ))
          ) : (
            <p>No events found.</p>   // Хоосон мэдээлэл
          )}
        </div>
      )}
    </div>
  );
};

export default Events;
