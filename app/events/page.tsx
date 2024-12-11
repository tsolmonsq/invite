'use client';
import { PrimaryButton } from '@/components/CustomButton';
import EventCard from '@/components/EventCard';
import { AlignLeftOutlined, HomeOutlined } from '@ant-design/icons';
import { Radio } from 'antd';
import { useRouter } from 'next/navigation';
import React, { useState, useEffect } from 'react';

const Events = () => {
  const router = useRouter();

  const [formLayout, setFormLayout] = useState('horizontal');
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  const onChange = (e: any) => {
    setFormLayout(e.target.value);
  };

  const createEvent = () => {
    router.push('/create-event');
  };

  // Fetch events data
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch('http://localhost:4000/events');
        if (!response.ok) {
          throw new Error('Failed to fetch events');
        }
        const data = await response.json();
        setEvents(data);
      } catch (error) {
        console.error('Error fetching events:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div>
      <div className="flex flex-row justify-between border-b border-gray-500 pb-6">
        <h2 className="font-bold text-2xl lg:text-3xl">Эвентүүд</h2>
        <PrimaryButton text="ЭВЕНТ ҮҮСГЭХ" onClick={createEvent} />
      </div>

      <Radio.Group className="m-4" value={formLayout} onChange={onChange}>
        <Radio.Button value="horizontal">
          <HomeOutlined />
        </Radio.Button>
        <Radio.Button value="vertical">
          <AlignLeftOutlined />
        </Radio.Button>
      </Radio.Group>

      {loading ? (
        <p className="mt-8 text-center">Loading events...</p>
      ) : (
        <div
          className={`flex ${
            formLayout === 'horizontal' ? 'flex-row flex-wrap' : 'flex-col'
          } gap-4 justify-start mt-8`}
        >
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
            <p>No events found.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Events;
