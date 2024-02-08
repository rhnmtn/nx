"use client";
import React, { useState, useEffect } from 'react';
import { toast } from "sonner"
import * as EmailValidator from 'email-validator';

export default function Home() {

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

 const handleFormSubmit = (e) => {
    e.preventDefault();

  if (!EmailValidator.validate(formData.email))
    toast.message('Hatalı e-mail adresi', {
      description: 'Geçerli bir e-mail adresi giriniz..',
    })

  else if (!formData.password)
    toast.message('Hatalı şifre', {
      description: 'Şifre alanı boş olamaz..',
    })

  else 
  {
    const promise = () => new Promise((resolve) => setTimeout(() => resolve({ name: 'Sonner' }),1250));
    toast.promise(promise, {
      loading: 'Kontrol ediliyor...',
      success: () => {
        return `Giriş bilgileriniz kontrol edildi, Lütfen sistem yöneticisi ile iletişime geçiniz.`;
      },
      error: 'Error',
    });

  }

  };

  return (
<>
<div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
    <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-300 to-orange-600 shadow-lg transform -skew-y-12 sm:skew-y-0 sm:-rotate-12 sm:rounded-3xl"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
            <div className="max-w-md mx-auto">
                <div>
                    <h1 className="text-2xl">
                        <span className="font-semibold rounded-md text-gray-100 bg-gradient-to-r from-orange-600 to-orange-300"> ~nimi.com.tr </span>
                    </h1>
                </div>
                <div className="divide-y divide-gray-200">
                    <form onSubmit={handleFormSubmit} className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                        <div className="relative">
                            <input
                                autoComplete="off"
                                id="email"
                                name="email"
                                type="text"
                                value={formData.email}
                                onChange={handleInputChange}
                                className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
                                placeholder="E-posta adresi"
                            />
                            <label htmlFor="email" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">
                                E-posta Adresi
                            </label>
                        </div>
                        <div className="relative">
                            <input
                                autoComplete="off"
                                id="password"
                                name="password"
                                type="password"
                                value={formData.password}
                                onChange={handleInputChange}
                                className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
                                placeholder="Şifre"
                            />
                            <label htmlFor="password" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">
                                Şifre
                            </label>
                        </div>
                        <div className="relative">
                            <button className="bg-blue-400 text-white rounded-md px-2 py-1">Giriş Yap</button>
                        </div>
                    </form>

                    <div className="max-w-screen-xl px-4 py-3 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
                        <nav className="flex flex-wrap justify-center -mx-5 -my-2">
                            <div className="flex justify-center items-center m-1 font-medium py-1 px-2 rounded-full text-gray-700 bg-gray-100 border border-gray-300">
                                <div className="text-base font-normal leading-none max-w-full flex-initial">
                                    <a href="https://www.eSolar.com.tr" target="_blank" className="text-gray-400 hover:text-gray-500">eSolar</a>                                
                                </div>
                            </div>
                            <div className="flex justify-center items-center m-1 font-medium py-1 px-2 rounded-full text-gray-700 bg-gray-100 border border-gray-300">
                                <div className="text-base font-normal leading-none max-w-full flex-initial">
                                    <a href="https://www.eWave.com.tr" target="_blank" className="text-gray-400 hover:text-gray-500">eWave</a>
                                </div>
                            </div>
                            
                            <div className="flex justify-center items-center m-1 font-medium py-1 px-2 rounded-full text-gray-700 bg-gray-100 border border-gray-300">
                                <div className="text-base font-normal leading-none max-w-full flex-initial">
                                    <a href="https://www.Villaci.com" target="_blank" className="text-gray-400 hover:text-gray-500">Villaci</a>
                                </div>
                            </div>

                            <div className="flex justify-center items-center m-1 font-medium py-1 px-2 rounded-full text-gray-700 bg-gray-100 border border-gray-300">
                                <div className="text-base font-normal leading-none max-w-full flex-initial">
                                    <a href="https://www.hepsirota.com" target="_blank" className="text-gray-400 hover:text-gray-500">HepsiRota</a>
                                </div>
                            </div>
                        </nav>

                        <p className="mt-8 text-semibold leading-6 text-center text-gray-400">
                            © {new Date().getFullYear()}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>


</>
  );
}
