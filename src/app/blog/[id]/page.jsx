'use client'

import { blogData } from '../../../components/blogdata';
import React, { useEffect, useState } from 'react'

// interface PageProps {
//     params: {
//         id: string;
//     };
// }
// interface Blog {
//     id: number;
//     title: string;
//     subject: string;
//     description: string;
//     blogImg: string;
//     authorName: string;
//     authorImg: string;
//     date: string;
//     category: string;
// }


const Page = ({ params }) => {

    const [data, setData] = useState(null);

    const fetchBlogData = () => {
        const blogId = Number(params.id);
        const blog = blogData.find((item) => item.id === blogId);
        if (blog) {
            setData(blog);
        }
    };
    useEffect(() => {
        fetchBlogData();
    }, [])
    return (
        <div className='px-7 lg:px-0 md:px-10 lg:max-w-[50rem] mt-7 mx-auto '>
            <div className=''>
                <h1 className='text-2xl md:text-4xl lg:text-5xl font-bold tracking-tight md:tracking-normal'>{data?.title}</h1>
                <p className='text-lg md:text-xl lg:text-2xl text-gray-500 tracking-tight mt-4'>{data?.subject}</p>
                <div className='flex items-center gap-4 mt-9 w-full'>
                    <img src={data?.authorImg} className='size-10 md:size-14 rounded-full object-cover' alt="" />
                    <span className='flex justify-between flex-col gap-1'>
                        <p className='text-sm'>{data?.authorName}</p>
                        <p className='text-sm'>{data?.date}</p>
                    </span>
                </div>
            </div>
            <div className='mt-10 w-full hidden md:block'>
                <img src={data?.blogImg} className='h-[30rem] w-full object-cover' alt="" />
            </div>
            <div className='mt-14 md:mt-20 '>
                <p className='text-[15px] tracking-wide leading-7 md:leading-9 md:text-lg  md:tracking-wider font-blog font-medium md:text-justify text-gray-700 '>
                    I love so much about Android. Feature wise, it puts iOS to shame. (And I say that as an iPhone guy.) But to date, theres been one *major* reason to pick an iPhone over the competition: years of software updates. Apples phones are expensive, but at least <br></br><br></br>I know that when I buy an iPhone for $1000+, Im sure to get major OS version updates for at least 5 to 7 years.

                    Android phones? Not so much.

                    The Google Pixel 7 and Pixel 7 Pro, for example, are slated to get five years of security patches but only *three* years of Android version updates. Samsung supports its flagships with four years of updates typically.

                    In contrast, Apple provides major iOS updates even for phones that are five, six or seven years past their release date. The iPhone 6S shipped with iOS 9 and can run iOS 16, for instance.

                    But the Google Pixel 8 and Pixel 8 Pro have been promised SEVEN years of updates — not just security updates. OS updates too.

                    Thats huge. And I hope its a sign of things to come.

                    Why do software updates matter?
                    Our smartphones are, in many ways, just like our laptops and desktop computers…


                </p>
            </div>
        </div>
    )
}

export default Page;