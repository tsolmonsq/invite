'use client'
import React, { useState } from 'react'
import Image from 'next/image';
import { UserOutlined } from '@ant-design/icons';
import { PrimaryButton, SecondaryButton } from './CustomButton';
import { Modal } from 'antd';
import SignUp from './SignUp';
import Login from './Login';
import { useRouter } from 'next/navigation';



const Header = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [isLogin, setIsLogin] = useState(true);
    const route = useRouter();

    const showForm = (formType: 'login' | 'signup') => {
        setIsVisible(true);
        setIsLogin(formType === 'login');
    };

    const handleCancel = () => {
        setIsVisible(false);
    };

    const handleSubmit = (values: any) => {

        const { email, password } = values;

        if (email === "tse@gmail.com" && password === "123456") {
            setIsLoggedIn(true);
            route.push("/event");
        }
        setIsVisible(false);
    };

    return (
        <header className='bg-myGray bg-opacity-3s0 flex flex-row justify-between items-center px-20 h-[70px]'>
            <div className="flex justify-center items-center">
                <Image
                    src="/images/logo.png"
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
                {isLoggedIn ? (
                    <div className="bg-gray-200 rounded-full w-12 h-12 flex items-center justify-center">
                        <UserOutlined className='text-black text-3xl' />
                    </div>
                ) : (
                    <div className='flex flex-row gap-3'>
                        <PrimaryButton text='Нэвтрэх' onClick={() => showForm('login')}></PrimaryButton>
                        <SecondaryButton text="Бүртгүүлэх" onClick={() => showForm('signup')}></SecondaryButton>

                        <Modal
                            open={isVisible}
                            footer={null}
                            onCancel={handleCancel}
                            width={450}
                            style={{
                                top: '5%',
                            }}
                        >
                            {isLogin ? (
                                <Login onSubmit={handleSubmit} />
                            ) : (
                                <SignUp onSubmit={handleSubmit} />
                            )}
                        </Modal>
                    </div>
                )}
            </div>
        </header>
    )
}

export default Header;