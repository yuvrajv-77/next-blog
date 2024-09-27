'use client'
import React from 'react'
import { useAuth } from '../../lib/context/AuthContext';

const AdminPanel = () => {
    const { user } = useAuth();

  return (
    <div>
         {user ? (
        <div className='flex my-10 md:my-20 items-center gap-4 '>
          <img src={user?.photoURL || "/avatar.jpg"} className='size-20  rounded-full object-cover' alt="" />
          <h1 className='text-2xl md:text-5xl font-semibold'>{user?.displayName || "Michael Swuengiel"}</h1>
        </div>
      ) : (
        <div className='flex my-10 md:my-20 items-center gap-4 '>
          <div  className='size-20 bg-gray-300 animate-pulse rounded-full object-cover' alt="" />
          <h1 className='w-2/3 rounded-lg font-semibold animate-pulse bg-gray-300 h-20'></h1>
        </div>
      )
      }
    </div>
  )
}

export default AdminPanel