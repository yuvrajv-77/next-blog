'use client'
import React from 'react'
import Avatar from './Avatar'
import Link from 'next/link';


const Singleblog = ({blog}) => {
    
    
    return (
        <Link href={`/blog/${blog.id}`}>
            <div className='flex group py-5 gap-8 justify-between flex-row-reverse md:w-full transition-colors duration-200 cursor-pointer ease-in-out'>
                <img src={blog.blogImg} className=' w-[100px] h-[60px] md:w-[160px] md:h-[100px] md:ml-9 border object-cover' alt="" />
                <div className='flex  flex-col justify-between gap-3  '>
                    <h1 className='text-lg md:text-2xl lg:text-2xl leading-5 font-semibold group-hover:underline'>{blog.title}</h1>
                    <h3 className='text-sm md:text-lg text-gray-500 line-clamp-2 leading-tight md:leading-none'>{blog.subject}</h3>
                    <div className='flex items-center gap-4 mt-2 w-full'>
                    <img src={blog.authorImg} className={`size-6 md:size-10 object-cover rounded-full cursor-pointer`} alt="" />
                        <span className='flex justify-between flex-col gap-1'>
                            <p className='text-xs'>{blog.authorName}</p>
                            <p className='text-xs'>{blog.date}</p>
                        </span>
                    </div>
                </div>
            </div>
            <div className='border-b border-gray-400'> </div>

        </Link>

    )
}

export default Singleblog