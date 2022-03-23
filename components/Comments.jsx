import React, { useEffect, useState } from 'react'
import moment from 'moment'
import parse from 'html-react-parser'
import { getComments } from '../services'
const Comments = ({slug}) => {
  const [comments , setComments] = useState([])
  useEffect(() => {
    getComments(slug)
      .then(res => setComments(res))
  } , [])
  return (
    <>
      { comments.length > 0 && (
        <div className='bg-white rounded-lg text-black p-8 pb-12 mb-8'>
          <h3 className='text-lg mb-8 font-semibold border-b pb-4'>
          {comments.length}
          {" "}
          Kommentariyalar
          </h3>
         {comments.map(
           (comment , index) => (
             <div className='border-b border-gray-100 mb-4 pb-4' key={index}>
               
               <span className='font-semibold underline'>{comment.name}</span>
               <span> sana </span>
               <span>{moment(comment.createdAt).format("MMM DD , YYYY")}</span>
               <p className='text-blue-700 w-full whitespace-pre-line text-justify'>
                 {parse(comment.comment)}
               </p>
              
             </div>
           )
         )}
        </div>
      )}
    </>
  )
}

export default Comments