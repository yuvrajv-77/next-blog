'use client'
import React, { useState } from 'react'
import { useAuth } from '../../../../lib/context/AuthContext';
import { useRouter, useSearchParams } from 'next/navigation';


const page = () => {

    const {error, resetPassword } = useAuth();
    const [newPassword, setNewPassword] = useState('');

    // useSearchParams hooks to search to url parameters
    const searchParams = useSearchParams();
    console.log('mode: ',searchParams.get('mode'));
    console.log('oobCode: ',searchParams.get('oobCode'));
    
    

    const handleFormSubmit = (e) => {
        e.preventDefault();
        resetPassword(searchParams.get('oobCode'), newPassword);

    }
    return (
        <div className='flex my-56 justify-center  '>
            <form className=' space-y-4  shadow-2xl p-10' onSubmit={handleFormSubmit}>
                <h1 className='text-center text-2xl font-semibold font-blog'>Reset Password</h1>
                <div className=' space-y-3'>
                    <p>Enter New Password</p>
                    <input className='bg-gray-100 font-blog w-[30rem] p-2 text-base '
                        placeholder='Enter New Password'
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        type="password" />
                </div>
                <button
                    className='w-full bg-black border-black hover:bg-white hover:text-black hover:shadow-2xl text-white inline-flex items-center justify-center gap-1 py-2 px-3 my-3 border focus:ring focus:ring-gray-400'>
                    Reset Password
                </button>
                <p className='text-center text-red-400'>{error?.message}</p>
            </form>
        </div>
    )
}

export default page;