'use client'
import React, { useState } from 'react'
import { useAuth } from '../../../lib/context/AuthContext';

const page = () => {

    const {error,  email, setEmail, forgotPassword, isSending } = useAuth();
   
    const handleFormSubmit = (e) => {
        e.preventDefault();
        forgotPassword();
    }
    return (
        <div className='flex my-56 justify-center  '>
            <form className=' space-y-4  shadow-2xl p-10' onSubmit={handleFormSubmit}>
            <h1 className='text-center text-2xl font-semibold font-blog'>Reset Password</h1>
                <div className=' space-y-3'>
                    <p>Email</p>
                    <input className='bg-gray-100 font-blog w-[30rem] p-3 text-base '
                        placeholder='Enter Your Registerd Email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email" />
                </div>
                <button
                    className='w-full bg-black border-black hover:bg-white hover:text-black hover:shadow-2xl text-white inline-flex items-center justify-center gap-1 py-3 px-3 my-3 border focus:ring focus:ring-gray-400'>
                    {isSending? 'Password reset link sent!':'Send Password Reset Link' }
                </button>
                <p className='text-center text-red-400'>{error?.message}</p>
            </form>
        </div>
    )
}

export default page;