"use client"
import React, { useContext, useState, useEffect } from 'react';
import Image from 'next/image';
import { UserOutlined } from '@ant-design/icons';
import { PrimaryButton, SecondaryButton } from './CustomButton';
import { Modal } from 'antd';
import SignUp from './SignUp';
import Login from './Login';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { AuthContext } from '@/contexts/AuthContext';

const Header = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isLogin, setIsLogin] = useState(true);
    const { user, login, logout, isAuthenticated } = useContext(AuthContext) || {};
    const route = useRouter();

    useEffect(() => {
        if (isAuthenticated) {
            
        }
    }, [isAuthenticated]); 

    const showForm = (formType: 'login' | 'signup') => {
        setIsVisible(true);
        setIsLogin(formType === 'login');
    };

    const handleCancel = () => {
        setIsVisible(false);
    };

    const handleLogIn = async (values: any) => {
        const { email, password } = values;

        try {
            const response = await axios.post('http://localhost:4000/auth/login', {
                email,
                password,
            });

            if (response.status === 201) {
                login?.(email, password); 
                route.push('/event');
            } 
        } catch (error) {
            console.error('Login failed:', error);
        } finally {
            setIsVisible(false);
        }
    };

    const handleSignUp = async (values: any) => {
        const { email, password, firstName, lastName, phoneNumber, passwordConfirmation } = values;
    
        if (password !== passwordConfirmation) {
            alert('Passwords do not match! Please try again.');
            return;
        }
    
        try {
            const response = await axios.post('http://localhost:4000/auth/signup', {
                email,
                phoneNumber,
                firstName,
                lastName,
                password, 
                passwordConfirmation
            });
    
            if (response.status === 201) {
                console.log('Sign-up successful:', response.data);
                setIsLogin(true);
                setIsVisible(false);
            } 
        } catch (error) {
            console.error('Sign-up failed:', error);
            alert('Sign-up failed. Please try again.');
        }
    };

    const handleLogout = () => {
        if (logout) logout(); 
        route.push('/'); 
    };

    return (
        <header className='bg-myGray flex flex-row justify-between items-center px-20 h-[70px]'>
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
                {isAuthenticated ? (
                    <div className='flex flex-row items-center gap-4'>
                        <div className="bg-gray-200 rounded-full w-12 h-12 flex items-center justify-center">
                            <UserOutlined className='text-black text-3xl' />
                        </div>
                        <PrimaryButton text="Гарах" onClick={handleLogout} />
                    </div>
                ) : (
                    <div className='flex flex-row gap-3'>
                        <PrimaryButton text='Нэвтрэх' onClick={() => showForm('login')} />
                        <SecondaryButton text="Бүртгүүлэх" onClick={() => showForm('signup')} />

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
                                <Login onSubmit={handleLogIn} />
                            ) : (
                                <SignUp onSubmit={handleSignUp} />
                            )}
                        </Modal>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;
