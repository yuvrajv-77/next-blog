'use client'
import React, { useEffect, useRef, useState } from 'react'
import { useAuth } from '../../../../lib/context/AuthContext';
// import ReactQuill from 'react-quill';
import dynamic from 'next/dynamic';
// import 'react-quill/dist/quill.snow.css';
import 'react-quill/dist/quill.bubble.css';
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

const page = () => {

	const [title, setTitle]= useState()
	const [summary, setSummary]= useState()
	const [body, setBody]= useState()
	const textareaRef = useRef(null);

	const modules = {
		toolbar: [
			// [{ 'header': [1, 2, false] }],
			[{'header': 1},{'header': 2}],
			// [{ 'size': ['small', false, 'large', 'huge'] }],
			["bold", "italic", "underline", "blockquote", "code"],
			
			// [
			// 	// { list: "ordered" },
			// 	// { list: "bullet" },
			// 	{ indent: "-1" },
			// 	{ indent: "+1" },
			// ],
			["link", "image"],
			

		]
	}

	const formats = ["header", "bold", "italic", "underline", "strike", "blockquote",
		"list", "bullet", "indent", "link", "image", "color", "clean",
	];

	const { user } = useAuth();

	  // Function to adjust textarea height based on content
	  const adjustTextareaHeight = () => {
		const textarea = textareaRef.current;
		textarea.style.height = 'auto'; // Reset height
		textarea.style.height = `${textarea.scrollHeight}px`; // Set height to the scroll height
	  };
	
	  useEffect(() => {
		adjustTextareaHeight(); // Adjust height on component mount/update
	  }, [title]);

	console.log(body);
	

	return (
		<div className='px-5 lg:px-0 md:px-4 lg:max-w-[50rem] mx-auto'>
			<div className='flex items-center my-4 justify-between'>
				<div className='flex items-center gap-4 '>
					<img src={user?.photoURL || "/avatar.jpg"} className='size-7 md:size-10  rounded-full object-cover' alt="" />
					<div>
						<h1 className='text-sm md:text-xl font-semibold'>{user?.displayName || "Michael Swuengiel"}</h1>
						<p className='text-xs'>20 Jun 2156</p>
					</div>
				</div>
				<button className='bg-black py-2 px-4 text-white rounded-full hover:bg-white hover:text-black focus:ring focus:ring-gray-300 border-black border transition duration-100 ease-in-out'>Publish</button>
			</div>

			<div className='border-b border-black'></div>

			<div className=' flex flex-col gap-5 font-blog mt-10'>
				{/* title */}
				<div className=' '>
					<textarea
						type="text" rows='1'
						onInput={adjustTextareaHeight} // Adjust height on input
						ref={textareaRef}
						value={title}
						onChange={(e) => setTitle(e.target.value)}
						placeholder='Title of Blog'
						className='p-2 font-medium text-2xl md:text-3xl lg:text-4xl w-full resize-none focus:border-b-black border-b-white border-l-gray-200 border-l-2 outline-none overflow-hidden placeholder:text-gray-400 placeholder:font-light'
					/>
				</div>
				{/* summary */}
				<div className=''>
					<input
						type="text" rows='1'
						value={summary}
						// onInput={adjustTextareaHeight} // Adjust height on input
						// ref={textareaRef}
						onChange={(e) => setSummary(e.target.value)}
						placeholder='What is it about'
						className='p-2 font-medium text-xl md:text-2xl w-full resize-none focus:border-b-black border-b-white border-l-gray-200 border-l-2 outline-none overflow-hidden placeholder:text-gray-400 placeholder:font-light'
					/>
				</div>
				{/* body */}
				<div className='selection:bg-yellow-200 '>
					<ReactQuill 
					modules={modules} 
					formats={formats} className='min-h-[10rem]'
					value={body}
					theme='bubble'
					placeholder='Tell Your Story. . . . .'
					onChange={(e) => setBody(e)} />

					{/* <textarea 
					type="text" rows='1'
					placeholder='Tell  your story ....' 
					className='py-2 font-medium text-xl w-full resize-none focus:border-b-black border-b-white  outline-none overflow-hidden placeholder:text-gray-300 placeholder:font-light' 
					 /> */}
					 
				</div>
			</div>
		</div>
	)
}

export default page