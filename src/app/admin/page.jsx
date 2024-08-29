'use client'
import React from 'react'
import { useAuth } from '../../../lib/context/AuthContext';
import Singleblog from '../../components/Singleblog';
import { blogData } from '../../components/blogdata'
import { PiNotePencilLight } from 'react-icons/pi';
const Page = () => {

  const { user } = useAuth();

  return (
    <div className='px-5 lg:px-0 md:px-4 lg:max-w-[55rem] mx-auto '>
      <div className='flex my-10 md:my-20 items-center gap-4 '>
        <img src={user?.photoURL || "/avatar.jpg"} className='size-20  rounded-full object-cover' alt="" />
        <h1 className='text-2xl md:text-5xl font-semibold'>{user?.displayName || "Michael Swuengiel"}</h1>
      </div>

      <div>
        <div className='flex items-center justify-between mb-6'>
          <p className='text-2xl font-bold '>Posts ({blogData.length})</p>
          <button className='text-gray-600 hover:text-black inline-flex items-center gap-1 p-1'>
            <PiNotePencilLight size={28} />
            <p>Write New Blog</p>
          </button>
        </div>

        <div className='border-b-2'></div>

        <div>
          {blogData.map((blog, index) => (
            <Singleblog blog={blog} key={index} />
          ))}
        </div>
      </div>

      <div>

      </div>
    </div>
  )
}

export default Page