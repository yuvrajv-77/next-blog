import React from 'react'

function Publishing() {
    return (
        <div className='absolute h-full w-full top-0 left-0 flex items-center justify-center backdrop-blur-sm'>
            <div className='size-72 flex-col flex items-center justify-center space-y-9 shadow-md border  '>
                <div class='flex  space-x-2 justify-center items-center bg-white '>
                    <span className='sr-only'>Loading...</span>
                    <div className='size-6 bg-black rounded-full animate-bounce [animation-delay:-0.3s]'></div>
                    <div className='size-6 bg-black rounded-full animate-bounce [animation-delay:-0.15s]'></div>
                    <div className='size-6 bg-black rounded-full animate-bounce'></div>
                </div>
                <p className='text-xl animate-pulse font-blog'>Publishing Blog</p>
            </div>
        </div>
    )
}

export default Publishing;