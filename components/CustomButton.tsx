import { Button } from 'antd';
import React from 'react'

// CustomButtonProps интерфэйсийг тодорхойлж байна. Энэ нь эдгээр 3 шинж чанартай:
// text,
// width, 
// onClick (клик хийгдэхэд ажиллах функц).
interface CustomButtonProps {
  text: string;
  width?: string;
  onClick?: () => void;
}

// PrimaryButton компонентыг тодорхойлж байна. Энэ нь хэрэглэгчийн өгөгдөл (text, width, onClick)-ийг хүлээн авч ашигладаг.
export const PrimaryButton: React.FC<CustomButtonProps> = ({ text, width = 'auto', onClick }) => {
  return (
    <Button
      type='primary'    // Ант дизайны "primary" кнопын төрлөөр тодорхойлсон
      onClick={onClick}   // Button дарсны дараа onClick үйлдлийг гүйцэтгэнэ.
      className='bg-gradient-custom text-[20px] py-[1rem] text-white hover:bg-transparent hover:scale-105 transition-transform duration-300 border-none'
      style={{
        width: width,
      }}
    >
      {text}    {/* text нь button дээр харагдах текст. */}
    </Button>
  )
}

// PrimaryButton-тай төстэй боловч background нь transparent байна.
export const SecondaryButton: React.FC<CustomButtonProps> = ({ text, width = 'auto', onClick }) => {
  return (
    <Button 
    onClick={onClick}   // Button дарсны дараа onClick үйлдлийг гүйцэтгэнэ.
    className='bg-transparent text-myPrimary text-[20px] py-[1rem] border-myPrimary hover:scale-105 transition-transform duration-300'
      style={{
        width: width,
      }}>
      {text}    {/* text нь button дээр харагдах текст. */}
    </Button>
  )
}
