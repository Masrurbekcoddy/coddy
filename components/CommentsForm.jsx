import React , {useRef , useEffect , useState} from 'react'
import { submitComment } from '../services'
const CommentsForm = ({slug}) => {
  const [error , setError] = useState(false)
  const [localStorage , setLocalStorage] = useState(null)
  const [showSuccessMessage , setShowSuccessMessage] = useState(false)
  const commentEl = useRef()
  const nameEl = useRef()
  const emailEl = useRef()
  const storeDataEl = useRef()
  const handleCommentSubmission = () => {
    setError(false)
    const {value: comment} = commentEl.current
    const {value: name} = nameEl.current
    const {value: email} = emailEl.current
    const {checked: storeData} = storeDataEl.current
    if(!name || !comment || !email){
      setError(true)
      return
    }
    const commentsObj = {name , email , comment , slug}
    if(storeData){
      window.localStorage.setItem("name" , name)
      window.localStorage.setItem("email" , email)
    }
    else{
      window.localStorage.removeItem("name" , name)
      window.localStorage.removeItem("email" , email)
    }
    submitComment(commentsObj)
    .then(res=>{
      setShowSuccessMessage(true)
      setTimeout(()=>{
        setShowSuccessMessage(false)
      } , 3000)
    })
  }
  return (
    <div className='bg-white shadow-lg rounded-lg pb-12 p-8 mb-8 text-black'>
        <h3 className='text-xl font-semibold pb-4 mb-4 border-b'>Comments</h3>
        <div className='grid grid-cols-1 gap-4 pb-4'>
          <textarea 
            ref={commentEl}
            placeholder='Comments'
            name='comment'
            className='rounded-lg w-full outline-none p-4 focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700'
          />
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 pb-4'>
          <input 
          ref={nameEl}
            type="text"
            placeholder='Name'
            name='name'
            className='rounded-lg w-full outline-none p-4 focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700'
          />
          <input 
          ref={emailEl}
            type="email"
            placeholder='Email'
            name='email'
            className='rounded-lg w-full outline-none p-4 focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700'
          />
        </div>
        <div className='grid grid-cols-1 gap-4 pb-4'>
          <div>
            <input
            ref={storeDataEl}
              type='checkbox'
              name='storeData'
              id='storeData'
              value='true'
            />
            <label htmlFor="storeData" className='ml-3 text-gray-500 cursor-pointer'>Save name and email</label>
          </div>
        </div>
        {error && <p className='text-red-600'>Barcha bolimni toldiring</p>}
        <div className='mt-8'>
          <button
          onClick={handleCommentSubmission} 
          type='button' 
          className='transiton duration-500 ease hover:bg-indigo-900 inline-block bg-indigo-400 rounded-full text-white font-medium text-lg py-3 px-10 cursor-pointer'>
            Post Comment
          </button>
          {showSuccessMessage && <span className='text-green-600 ml-5 font-semibold text-lg'>Malumot yuborildi</span>}
        </div>
        
    </div>
  )
}

export default CommentsForm