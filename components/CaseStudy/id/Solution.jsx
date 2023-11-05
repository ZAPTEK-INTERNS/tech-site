import React from 'react'
import {BsCircle} from 'react-icons/bs'

const Solution = ({data}) => {
  return (
    <div className="md:flex my-8">
        <div className="md:w-1/2 my-4">
            4 images
        </div>
        <div className="md:w-1/2 space-y-4 ">
          <p className='font-bold md:text-7xl text-4xl'>Solution</p>
          <p>{data.solution}</p>
      
            
            {
                data.solutionlist.map((item,idx)=>(
<div className='flex' key={idx}>
<div className=' h-fit w-fit'>
            <BsCircle size={10} className='bg-violet-700 rounded-full text-white mr-4 mt-2'/>
            </div>
            <p className='font-medium'> <span className='text-gray-500'> {item.head}:</span>  {item.body}</p>
</div>
                ))
            }
           
        </div>
        </div>
      
  )
}

export default Solution
