// React болон Next.js Image компонентыг импортлох
import React from 'react'
import Image from 'next/image';

// EventCard props-ийн төрлүүдийг тодорхойлох
interface EventCardProps {
    layout?: string;    // Харагдац: хэвтээ эсвэл босоо
    img?: string;       // Зураг 
    title: string;      // Эвентийн гарчиг
    desc: string;       // Эвентийн тайлбар
    date: string;       // Эвентийн огноо
}

// EventCard компонент нь эвентийн мэдээллийг харуулах
const EventCard: React.FC<EventCardProps> = ({ layout, title, desc, date }) => {
    return (
        <div className={`flex ${layout === 'horizontal' ? 'flex-col' : 'flex-row'} bg-myGray rounded-3xl max-w-xl
    ${layout === 'horizontal' ? 'max-w-[290px]' : 'max-w-[700px]'}`}>
            {/* Эвентийн зураг харуулах хэсэг */}
            <div className={`${layout === 'horizontal' ? 'w-full' : 'w-1/3'}`}>
                <Image
                    src="/images/art_img.png"   // Зурагны эх
                    alt='Logo'                  // Зургийн тодорхойлолт
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{
                        width: '100%',
                        height: '160px',
                        objectFit: 'cover',     // Зургийн хэмжээг тааруулах
                        objectPosition: 'center',
                    }}
                />
            </div>

            {/* Эвентийн текст мэдээлэл харуулах хэсэг */}
            <div className='p-4'>
                <h3>{title}</h3>    {/* Эвентийн гарчиг */}
                <p>{desc}</p>       {/* Эвентийн тайлбар */}
                <p>{date}</p>       {/* Эвентийн огноо */}
            </div>
        </div>
    );
};

export default EventCard;