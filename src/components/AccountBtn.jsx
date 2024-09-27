'use client'
import React, { useEffect, useRef, useState } from 'react'
import { useAuth } from '../../lib/context/AuthContext'
import Link from 'next/link';

const AccountBtn = () => {
    const { user, loading, error, handlesignInWithGoogle, handleLogout } = useAuth();
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);



    return (
        <>
            {user ? (
                <div className='relative' ref={dropdownRef}>
                    <button className='flex items-center gap-3' onClick={() => setIsOpen(!isOpen)}>
                        <img src={user?.photoURL || "/avatar.jpg"} className={`size-6 md:size-10 object-cover rounded-full cursor-pointer`} alt="" />
                        <p className='hidden lg:block'>{user?.displayName}</p>
                    </button>
                    {isOpen && <ul className='absolute border bg-white w-40 space-y-2 p-3 my-3 shadow-lg right-0'>
                        <li className=' flex' onClick={() => setIsOpen(false)}><Link className='p-1 hover:bg-gray-100 w-full' href='/admin' >My Blogs</Link></li>
                        <li className='p-1  text-red-500 hover:bg-gray-100 ' onClick={handleLogout}>Log Out</li>
                    </ul>
                    }

                </div>
            ) : <Link href={'/login'}>
                <button className=' bg-black border-black hover:bg-white hover:text-black hover:shadow-2xl text-white inline-flex items-center gap-1 py-2 px-3  border focus:ring focus:ring-gray-300'>
                    Get Started
                </button >
            </Link >}
        </>
        // <div className='relative' ref={dropdownRef}>
        //     <button className='flex items-center gap-3' onClick={() => setIsOpen(!isOpen)}>
        //         <img src={user?.photoURL || "/avatar.jpg"} className={`size-6 md:size-10 object-cover rounded-full cursor-pointer`} alt="" />
        //         <p className='hidden lg:block'>{user?.displayName}</p>
        //     </button>
        //     {isOpen && <ul className='absolute border bg-white w-40 space-y-2 p-3 my-3 shadow-lg right-0'>
        //         <li className=' flex' onClick={() => setIsOpen(false)}><Link className='p-1 hover:bg-gray-100 w-full' href='/admin' >My Blogs</Link></li>
        //         <li className='p-1  text-red-500 hover:bg-gray-100 ' onClick={handleLogout}>Log Out</li>
        //     </ul>
        //     }

        // </div>
    )
}

export default AccountBtn