import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FacebookFilled, MailFilled, PhoneFilled, } from '@ant-design/icons'

// Холбоо барих мэдээлэл, хаяг, тусламж зэргийг агуулсан Footer component
const Footer = () => {
  return (
    <footer className="text-white bg-gradient-custom flex flex-col sm:flex-row items-start justify-center space-y-8 sm:space-x-32 p-12 pt-4 sm:pb-32">
      {/* Лого хэсэг */}
      <div>
        <Image
          className='mt-12'
          src="/images/logo_white.png"  // Логоний зураг
          alt='Logo'  // Зургийн тайлбар
          width={0}  // Зургийн өргөн
          height={0}  // Зургийн өндөр
          sizes="100vw"  // Зургийн хэмжээ
          style={{
            width: '120px',  // Логоны өргөн
            height: '30px',  // Логоны өндөр
          }}
        />
      </div>

      {/* Холбогдох линкүүд агуулсан тусламж хэсэг */}
      <div>
        <h2 className='font-bold text-[20px] mb-4'>Тусламж</h2>  {/* Тусламж хэсгийн гарчиг */}
        <ul className="space-y-2">  {/* Линкүүдийн жагсаалт */}
          <li>
            <Link href="/">  {/* Үйлчилгээний нөхцөл хуудас руу холбоо */}
              Үйлчилгээний нөхцөл
            </Link>
          </li>
          <li>
            <Link href="/">  {/* Нууцлалын бодлого хуудас руу холбоо */}
              Нууцлалын бодлого
            </Link>
          </li>
          <li>
            <Link href="/">  {/* Түгээмэл асуулт хуудас руу холбоо */}
              Түгээмэл асуулт
            </Link>
          </li>
        </ul>
      </div>

      {/* Хаягийн хэсэг */}
      <div className='w-60'>
        <h2 className='font-bold text-[20px] mb-4'>Хаяг</h2>  {/* Хаягийн гарчиг */}
        <p>Монгол улс, Улаанбаатар хот, Сүхбаатар дүүрэг, 1-р хороо, DDD барилга. Lorem20</p>  {/* Хаяг */}
      </div>

      {/* Холбоо барих мэдээллийн хэсэг */}
      <div>
        <h2 className='font-bold text-[20px] mb-4'>Холбоо барих</h2>  {/* Холбоо барих гарчиг */}
        <ul className="space-y-2">  {/* Холбоо барих мэдээлэлтэй линкүүдийн жагсаалт */}
          <li>
            <Link href="/">  {/* Имэйл хаяг */}
              <MailFilled className='mr-2' />  {/* Имэйл икон */}
              invite@gmail.com  {/* Имэйл хаяг */}
            </Link>
          </li>
          <li>
            <Link href="/">  {/* Утасны дугаар */}
              <PhoneFilled className='mr-2' />  {/* Утасны икон */}
              9999-9999  {/* Утасны дугаар */}
            </Link>
          </li>
          <li>
            <Link href="/">  {/* Фэйсбүүк хаяг */}
              <FacebookFilled className='mr-2' />  {/* Фэйсбүүк икон */}
              invite  {/* Фэйсбүүк хаяг */}
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer