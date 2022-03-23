import Link from 'next/link';
import React, {useEffect , useState} from 'react';
import { getCategories } from '../services';

const Categories = () => {
  const [categories , setCategories] = useState([])
  useEffect(()=>{
    getCategories()
    .then(res => setCategories(res))
  } , [])
  return (
    <div className='bg-white shadow-lg rounded-lg text-black p-0 lg:p-8 pb-12 mb-12'>
    <h3 className='text-center text-xl border-b mb-2'>
      Categories
    </h3>
    {categories.map(category=>(
      <Link href={`/category/${category.slug}`} key={category.slug}>
         <span className='block border-b text-indigo-500 cursor-pointer hover:text-indigo-400 text-lg font-semibold py-3'>
         {category.name}
         </span>
      </Link>
    ))}
    </div>
  )
};

export default Categories;
