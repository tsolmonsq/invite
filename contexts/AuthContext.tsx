"use client"
import React, { createContext, useState, useEffect, ReactNode } from "react";

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
}

interface User {
  token: string;
}

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
 
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setUser({ token });
    }
  }, []);

  const login = async (email: string, password: string) => {
  try {
    logger.info(`Нэвтэрч байгаа хэрэглэгч: ${email}`); 

    const response = await fetch("http://localhost:4000/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      const data = await response.json();
      logger.info(`Амжилттай нэвтэрсэн: ${email}`);
      localStorage.setItem("token", data.token);
      setUser({ token: data.token });
    } else {
      const errorText = await response.text();
      logger.error(`Нэвтрэх амжилтгүй боллоо: ${email}. Серверийн хариу: ${errorText}`);
      throw new Error("Нэвтрэхэд алдаа гарлаа");
    }
    } catch (error) {
      logger.error(`Нэвтрэх явцад алдаа гарлаа: ${email}. Алдаа: ${error.message}`); 
      throw error;
    }
  };
  
  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{ user, login, logout, isAuthenticated: !!user }}
    >
      {children}
    </AuthContext.Provider>
  );
};
