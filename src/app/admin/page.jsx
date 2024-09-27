
import React from 'react'

import Singleblog from '../../components/Singleblog';
import AdminPanel from '../../components/AdminPanel';
import { blogData } from '../../components/blogdata'
import { PiNotePencilLight } from 'react-icons/pi';
import Link from 'next/link';
import AuthContextProvider from '../../../lib/context/AuthContext';

const Page = () => {


  return (
    <div className='px-5 lg:px-0 md:px-4 lg:max-w-[55rem] mx-auto '>
     <AuthContextProvider>
            <AdminPanel />
        </AuthContextProvider>

      <div>
        <div className='flex items-center justify-between mb-6'>
          <p className='text-2xl font-bold '>Posts ({blogData.length})</p>
          <Link href={'/admin/form'}>
            <button className='text-gray-600 hover:text-black inline-flex items-center gap-1 p-1'>
              <PiNotePencilLight size={28} />
              <p>Write New Blog</p>
            </button>
          </Link>
        </div>

        <div className='border-b-2'></div>

        <div>
          {blogData.map((blog, index) => (
            <Singleblog blog={blog} key={index} />
          ))}
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