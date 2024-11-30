import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FacebookFilled, MailFilled, PhoneFilled, } from '@ant-design/icons'

const Footer = () => {
  return (
    <footer className="text-white bg-gradient-custom flex flex-col sm:flex-row items-start justify-center space-y-8 sm:space-x-32 p-12 pt-4 sm:pb-32">
      <div>
      <Image
      className='mt-12'
              src="/images/logo_white.png"
              alt='Logo'
              width={0}
              height={0}
              sizes="100vw"
              style={{ 
                  width: '120px', 
                  height: '30px', 
              }} 
            />
      </div>
      <div>
        <h2 className='font-bold text-[20px] mb-4'>Тусламж</h2>
        <ul className="space-y-2">
          <li>
            <Link href="/">
              Үйлчилгээний нөхцөл
            </Link>
          </li>
          <li>
            <Link href="/">
              Нууцлалын бодлого
            </Link>
          </li>
          <li>
            <Link href="/">
              Түгээмэл асуулт
            </Link>
          </li>
        </ul>
      </div>
      <div className='w-60'>
        <h2 className='font-bold text-[20px] mb-4'>Хаяг</h2>
        <p>Монгол улс, Улаанбаатар хот, Сүхбаатар дүүрэг, 1-р хороо, DDD барилга. Lorem20</p>
      </div>

      <div>
        <h2 className='font-bold text-[20px] mb-4'>Холбоо барих</h2>
        <ul className="space-y-2">
          <li>
            <Link href="/">
              <MailFilled className='mr-2'/>
              invite@gmail.com
            </Link>
          </li>
          <li>
            <Link href="/">
              <PhoneFilled className='mr-2'/>
              9999-9999
            </Link>
          </li>
          <li>
            <Link href="/">
              <FacebookFilled className='mr-2'/>
              invite
            </Link>
          </li>
        </ul>
      </div>

    </footer>
  )
}

export default Footer