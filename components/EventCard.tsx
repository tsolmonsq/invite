import React from 'react'
import Image from 'next/image';

interface EventCardProps {
    layout?: string;
    img?: string;
    title: string;
    desc: string;
    date: string;
}

const EventCard : React.FC<EventCardProps> = ({layout ,title, desc, date}) => {
  return (
    <div className={`flex ${layout === 'horizontal' ? 'flex-col' : 'flex-row'} bg-myGray rounded-3xl max-w-xl
    ${ layout === 'horizontal' ? 'max-w-[290px]' : 'max-w-[700px]'}`}>

        <div className={`${layout === 'horizontal' ? 'w-full' : 'w-1/3'}`}>
            <Image
                src="/images/art_img.png"
                alt='Logo'
                width={0}
                height={0}
                sizes="100vw"
                style={{ 
                    width: '100%', 
                    height: '160px', 
                    objectFit: 'cover',
                    objectPosition: 'center', 
                }} 
                />
            </div>
            <div className='p-4'>
                <h3>{title}</h3>
                <p>{desc}</p>
                <p>{date}</p>
            </div>
    </div>
  )
}

export default EventCard;