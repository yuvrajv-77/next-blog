import React from 'react'

import Gridblog from '../components/Gridblog'
import Singleblog from '../components/Singleblog'
import { blogData } from '../components/blogdata'
import Link from 'next/link'
import Image from 'next/image'

const HomePosts = () => {
  return (
    <div className='px-5 lg:px-0 md:px-4 lg:max-w-[55rem] mx-auto'>
      <div className='py-2 border-b-2'>
        Tech | News | Sports
      </div>

      <div className=' '>
        {/* first blog here */}
        <Link href={`/blog/${blogData[0].id}`}>
        <div className='flex border-b group border-black py-5 gap-8 justify-between md:flex-row flex-row-reverse cursor-pointer'>
          {/* <img src={blogData[0].blogImg} className='w-[7rem] h-[4rem] md:w-[20rem] md:h-[13rem] lg:w-[25rem] lg:h-[17rem]' alt="" /> */}
          <Image src={blogData[0].blogImg} width={400} height={272} className='w-[7rem] h-[4rem] md:w-[20rem] md:h-[13rem] lg:w-[25rem] lg:h-[17rem]'/>
          <div className='flex flex-col justify-between gap-4 md:gap-0'>
            <h1 className='text-lg md:text-3xl lg:text-3xl leading-5 font-semibold group-hover:underline'>{blogData[0].title}</h1>
            <h3 className='text-sm md:text-xl text-gray-500 line-clamp-2 lg:line-clamp-3 '> {blogData[0].subject}</h3>
            <div className='flex items-center gap-4 w-full'>
            <img src={blogData[0].authorImg} className={`size-6 md:size-10 object-cover rounded-full cursor-pointer`} alt="" />
              <span className='flex justify-between flex-col gap-1'>
                <p className='text-xs'>{blogData[0].authorName}</p>
                <p className='text-xs'>{blogData[0].date}</p>
              </span>
            </div>
          </div>
        </div>
        </Link>
      

      <div className='grid md:grid-cols-2 justify-between md:gap-y-6 md:gap-x-10 '>
        <Gridblog blog={blogData[1]} />
        <Gridblog blog={blogData[2]} />

      </div>

      <div className='border-b border-black mt-10'> </div>

      {blogData.slice(3).map((blog, index) => (
        <Singleblog blog={blog} key={index} />
      ))}

    </div>
    </div >
  )
}

export default HomePosts