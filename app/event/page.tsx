'use client'
import { PrimaryButton } from '@/components/CustomButton'
import EventCard from '@/components/EventCard'
import { AlignLeftOutlined, HomeOutlined } from '@ant-design/icons'
import { Radio } from 'antd'
import React, { useState } from 'react'

const Events = () => {

  const [formLayout, setFormLayout] = useState('horizontal');
  const onChange = (e: any) => {
    setFormLayout(e.target.value);
  };

  return (
    <div>
      <div className='flex flex-row justify-between border-b border-gray-500 pb-6'>
        <h2 className='font-bold text-2xl lg:text-3xl'>Эвентүүд</h2>
        <PrimaryButton text='ЭВЕНТ ҮҮСГЭХ' />
      </div>

      <Radio.Group
        className='m-4'
        value={formLayout} onChange={onChange}>
        <Radio.Button value="horizontal"><HomeOutlined /></Radio.Button>
        <Radio.Button value="vertical"><AlignLeftOutlined /></Radio.Button>
      </Radio.Group>

      <div className={`flex ${formLayout === 'horizontal' ? 'flex-row flex-wrap' : 'flex-col'} gap-4 justify-start mt-8`}>
        <EventCard
          layout={formLayout}
          title='Шинэ жил'
          desc='Монгол улс, Улаанбаатар хот, Сүхбаатар дүүрэг, 1-р хороо. БББ цогцолбор'
          date='2024-10-10'
        />

        <EventCard
          layout={formLayout}
          title='Шинэ жил'
          desc='Монгол улс, Улаанбаатар хот, Сүхбаатар дүүрэг, 1-р хороо. БББ цогцолбор'
          date='2024-10-10'
        />

        <EventCard
          layout={formLayout}
          title='Шинэ жил'
          desc='Монгол улс, Улаанбаатар хот, Сүхбаатар дүүрэг, 1-р хороо. БББ цогцолбор'
          date='2024-10-10'
        />

        <EventCard
          layout={formLayout}
          title='Шинэ жил'
          desc='Монгол улс, Улаанбаатар хот, Сүхбаатар дүүрэг, 1-р хороо. БББ цогцолбор'
          date='2024-10-10'
        />

        <EventCard
          layout={formLayout}
          title='Шинэ жил'
          desc='Монгол улс, Улаанбаатар хот, Сүхбаатар дүүрэг, 1-р хороо. БББ цогцолбор'
          date='2024-10-10'
        />

        <EventCard
          layout={formLayout}
          title='Шинэ жил'
          desc='Монгол улс, Улаанбаатар хот, Сүхбаатар дүүрэг, 1-р хороо. БББ цогцолбор'
          date='2024-10-10'
        />

<EventCard
          layout={formLayout}
          title='Шинэ жил'
          desc='Монгол улс, Улаанбаатар хот, Сүхбаатар дүүрэг, 1-р хороо. БББ цогцолбор'
          date='2024-10-10'
        />

      </div>

    </div>
  )
}

export default Events