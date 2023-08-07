import React from 'react';
import { categories } from "../data/data";

const Category = () => {
    console.log(categories);
  return (
      <div className='max-w-[1640px] m-auto px-4 py-12'>
          <h1 className=' text-yellow-600 font-bold text-center text-4xl'>Top Rated Menu Items</h1>
          <div className=' grid grid-cols-2 lg:grid-cols-4 gap-6 py-6 '>
          {categories.map((item)=>(
          <> 
          <div className=' flex bg-gray-100 rounded-lg p-4 justify-between items-center '>
              <h2 className=' font-bold sm:text-xl ' >{item.name}</h2>
                      <img src={item.image} alt={item.name} className='w-20'/>
          </div></>
          ))}
          </div>
          
    </div>
  )
};

export default Category;