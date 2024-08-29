'use client'
import React, { useState } from 'react'
import { PiNotePencilLight } from 'react-icons/pi'

import { useAuth } from '../../lib/context/AuthContext'
import AccountBtn from './AccountBtn'
import Link from 'next/link'

const Header = () => {

    const { user, loading, error, handlesignInWithGoogle, handleLogout } = useAuth();


    return (
        <header className='px-2 md:px-36 border-b shadow-xs'>
            <div className='flex items-center justify-between py-4'>
                <div>
                    <h1 className='text-2xl md:text-4xl font-brand font-bold'>TheBlog</h1>
                </div>
                <div>
                    <div className='flex gap-9 items-center'>
                        <button className='text-gray-600 hover:text-black inline-flex items-center gap-1 p-1  '>
                            <PiNotePencilLight size={28} />
                            <p>Write</p>
                        </button>
                    
                        {user ? <AccountBtn/> :<Link href={'/login'}>
                            <button className=' bg-black border-black hover:bg-white hover:text-black hover:shadow-2xl text-white inline-flex items-center gap-1 py-2 px-3  border focus:ring focus:ring-gray-300'>
                                Get Started
                            </button>
                        </Link>}
                        
                        
                        

                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header