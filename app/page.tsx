"use client";
import React, { useState, useEffect } from 'react';
import { toast } from "sonner"

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

  if (formData.email==="")
    toast.error('Geçerli bir e-mail adresi giriniz..')

  else if (!formData.password)
    toast.error('Geçerli bir password giriniz..')

  else 
  {
    const promise = () => new Promise((resolve) => setTimeout(() => resolve({ name: 'Sonner' }), 2000));
    toast.promise(promise, {
      loading: 'Kontrol ediliyor...',
      success: () => {
        return `Girişiniz başarılı oldu, sistem yöneticisi ile iletişime geçiniz.`;
      },
      error: 'Error',
    });

  }

  };

  return (
<>
<div className="min-h-screen bg-gray-900 py-6 flex flex-col justify-center sm:py-12">
	<div className="relative py-3 sm:max-w-xl sm:mx-auto">

    <div
      className="absolute inset-0 bg-gradient-to-r from-orange-300 to-orange-600 shadow-lg transform -skew-y-12 sm:skew-y-0 sm:-rotate-12 sm:rounded-3xl">
    </div>

		<div
			className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
		</div>
		<div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
			<div className="max-w-md mx-auto">
				<div>
        <h1 className="text-2xl"> <span className="font-semibold rounded-md text-gray-100 bg-gradient-to-r from-orange-600 to-orange-300"> -nimi.com.tr </span> </h1>

				</div>
				<div className="divide-y divide-gray-200">
					<form onSubmit={handleFormSubmit} className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
						<div className="relative">
							<input autoComplete="off" id="email" name="email" type="text" value={formData.email} onChange={handleInputChange} className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Email address" />
							<label htmlFor="email" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Email Address</label>
						</div>
						<div className="relative">
							<input autoComplete="off" id="password" name="password" type="password" value={formData.password} onChange={handleInputChange} className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Password" />
							<label htmlFor="password" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Password</label>
						</div>
						<div className="relative">
							<button className="bg-blue-400 text-white rounded-md px-2 py-1">Login</button>
						</div>
					</form>


          <div className="grid grid-cols-3 gap-4">
            <div className="font-semibold text-gray-400 text-center text-xs mt-2">villaci.com</div>
            <div className="font-semibold text-gray-400 text-center text-xs mt-2">hepsirota.com.tr</div>
            <div className="font-semibold text-gray-400 text-center text-xs mt-2">esolar.com.tr</div>
          </div>


				</div>
			</div>
		</div>
	</div>
</div>


</>
  );
}
