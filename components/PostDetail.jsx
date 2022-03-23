import React from 'react'
import moment from 'moment'
const PostDetail = ({post}) => {
  const getContentFragment = (index , text , obj , type) => {
    let modifiedText = text
    if(obj){
      if(obj.bold){modifiedText = (<b key={index}>{text}</b>)}
      if(obj.italic){modifiedText = (<i key={index}>{text}</i>)}
      if(obj.underline){modifiedText = (<u key={index}>{text}</u>)}
    }

    switch(type){
      case 'heading-three':
          return <h3 key={index} className="text-xl font-semibold mb-4">{modifiedText.map((item , i)=><React.Fragment key={i}>{item}</React.Fragment>)}</h3>
      case 'paragraph':
        return <p key={index} className="mb-8">{modifiedText.map((item , i)=><React.Fragment key={i}>{item}</React.Fragment>)}</p>
      case 'image':
        return (
          <img 
            src={obj.src}
            title={obj.title}
            key={index}
            width={obj.width}
            height={obj.height}
          />
        )
        default:
          return modifiedText
        }
  }

  return (
    <div className='bg-white shadow-lg rounded-lg text-black p-0 lg:p-8 pb-12 mb-12'>
     <div className='relative overflow-hidden shadow-md mb-6'>
     <img 
     src={post.featuredImage.url}
     alt={post.title}
     className="object-cover h-96 w-full rounded-t-lg " />
     </div>
     <div className='px-4 lg:px-0'>
        <div className='flex items-center justify-center mb-4 lg:mb-0 w-full lg:w-auto mr-8'>
        <img 
          src={post.author.photo.url} 
          alt={post.author.name}
          width="40px" />
          <p className='m-2'>{post.author.name}</p>
          <span>
          <img src="https://img.icons8.com/plasticine/100/000000/apple-calendar.png"width="40px"height="40px"/>
          </span>
          <span>
           {moment(post.createdAt).format("DD . MM . YYYY")}
          </span>
        </div>
      </div>
      <h1 className='font-bold text-center text-2xl'>{post.title}</h1>
      {/* {console.log(post.content)} */}
      {post.content.raw.children.map((typeObj , index) => {
        const children = typeObj.children.map((item , itemindex)=>getContentFragment(itemindex , item.text , item))
        return getContentFragment(index , children , typeObj , typeObj.type)
      })}
      
    </div>
  )
}

export default PostDetail