import { Button } from 'antd';
import React from 'react'

interface CustomButtonProps {
  text: string;
  width?: string;
  onClick?: () => void;
}

export const PrimaryButton: React.FC<CustomButtonProps> = ({ text, width = 'auto', onClick }) => {
  return (
    <Button
      type='primary'
      onClick={onClick}
      className='bg-gradient-custom text-[20px] py-[1rem] text-white hover:bg-transparent hover:scale-105 transition-transform duration-300 border-none'
      style={{
        width: width,
      }}
    >
      {text}
    </Button>
  )
}

export const SecondaryButton: React.FC<CustomButtonProps> = ({ text, width = 'auto', onClick }) => {
  return (
    <Button 
    onClick={onClick}
    className='bg-transparent text-myPrimary text-[20px] py-[1rem] border-myPrimary hover:scale-105 transition-transform duration-300'
      style={{
        width: width,
      }}>
      {text}
    </Button>
  )
}
