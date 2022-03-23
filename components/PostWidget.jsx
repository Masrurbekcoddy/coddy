import React, { useEffect , useState } from 'react';
import { getRecentPosts , getSimilarPosts } from '../services';
import moment from 'moment';
import Link from 'next/link';
const PostWidget = ({slug , categories}) => {
  const [relatedPosts , setRelatedPosts] = useState([])
  useEffect (()=>{
     if(slug){
       getSimilarPosts( categories , slug)
       .then(res => setRelatedPosts(res))
     }
     else{
       getRecentPosts()
       .then(res => setRelatedPosts(res))
     }
  } ,[slug])
  return (
    <div className='bg-white shadow-lg rounded-lg text-black p-0 lg:p-8 pb-12 mb-12'>
      <h3 className='text-center text-xl border-b mb-2'>{slug ? "Postlarimiz" : "Recent Posts"}</h3>
      {relatedPosts.map(post=>(
        <div key={post.title} className="flex items-center w-full mb-4 border-b" >
          <div className='w-16 flex-none'>
            <img 
            src={post.featuredImage.url} 
            alt={post.title} 
            className="rounded-3xl"/>
          </div>
          <div className='flex-grow ml-4'>
            <p>
              {moment(post.createdAt).format("MMM DD YYYY")}
            </p>  
          </div>
          <div className='flex-grow text-blue-900 hover:text-red-500 font-bold text-xl'>
          <Link href={`/post/${post.slug}`}>
             {post.title}
          </Link>
          </div>
        </div>
      ))}
    </div>
    )
};

export default PostWidget;
