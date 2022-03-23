import React from 'react';
import Link from 'next/link';
import moment from 'moment';
const PostCard = ({post}) => {
  return (
      <div className='bg-white shadow-lg rounded-lg text-black p-0 lg:p-8 pb-12 mb-12 '>
      <h1 className='text-center text-3xl font-semibold hover:text-red-500 cursor-pointer transition duration-700 mb-8'>
        <Link href={`/post/${post.slug}`}>{post.title}</Link>
      </h1>
      <div className='block lg:flex text-center items-center justify-center mb-8 w-full'>
        <div className='flex items-center justify-center mb-4 lg:mb-0 w-full lg:w-auto mr-8'>
          <img 
          src={post.author.photo.url} 
          alt={post.author.name}
          width="40px" />
          <p className='m-2'>{post.author.name}</p>
          <span>
          <img src="https://img.icons8.com/emoji/48/000000/calendar-emoji.png"width="30px"height="30px"/>
          </span>
          <span>
           {moment(post.createdAt).format("MMM . DD . YYYY")}
          </span>
        </div>
      </div>
        <div className='relative overflow-hidden shadow-md pb-80 mb-6 '>
          <img 
            src={post.featuredImage.url} 
            alt={post.title}
            className='object-top absolute w-full h-100 object-cover shadow-lg rounded-t-lg lg:rounded-lg'
           />
        
        </div>
        <div>
        <h1 className='text-justify '> {post.excerpt} </h1>
        </div>
        <div className='text-center cursor-pointer'>
          <Link href={`/post/${post.slug}`}>
           <span className='rounded-full bg-blue-800 w-40 px-8 py-2 mt-7 text-white inline-block transition duration-500 hover:translate-y-1'>
             Batafsil
           </span>
          </Link>
        </div>
     
      </div>
  )
};

export default PostCard;
