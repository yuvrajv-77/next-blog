
import React from 'react'
import Avatar from './Avatar'
import Link from 'next/link';


const Gridblog = ({ blog }) => {
    return (
        <Link href={`/blog/${blog.id}`}>
            <div className='flex group border-black py-5 gap-8 justify-between  md:flex-col flex-row-reverse md:w-full hover:bg-gray-50 transition-colors duration-200 cursor-pointer ease-in-out'>
                <img src={blog.blogImg} className='mx-auto w-[7rem] h-[4rem] md:w-[25rem] md:h-[14rem] lg:w-[28rem] lg:h-[17rem]' alt="" />
                <div className='flex  flex-col justify-between gap-4 md:gap-3 '>
                    <h1 className='text-lg md:text-2xl lg:text-2xl leading-tight md:leading-none font-semibold group-hover:underline'>{blog.title}</h1>
                    <h3 className='text-sm md:text-lg text-gray-500 line-clamp-2 leading-tight '>{blog.subject}</h3>
                    <div className='flex items-center gap-4 w-full'>
                        <img src={blog.authorImg} className={`size-6 md:size-10 object-cover rounded-full cursor-pointer`} alt="" />
                        <span className='flex justify-between flex-col gap-1'>
                            <p className='text-xs'>{blog.authorName}</p>
                            <p className='text-xs'>{blog.date}</p>
                        </span>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default Gridblog