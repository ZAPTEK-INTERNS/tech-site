import React from 'react'
import {BsCircle} from 'react-icons/bs'


const Result = ({data}) => {
  return (
    <div className="md:flex my-8">
       
        <div className="md:w-1/2 space-y-4">
          <p className='font-bold md:text-7xl text-4xl'>Results</p>
            {
                data.resultlist.map((item,idx)=>(
<div className='flex' key={idx}>
<div className=' h-fit w-fit'>
            <BsCircle size={10} className='bg-violet-700 rounded-full text-white mr-4 mt-2'/>
            </div>
            <p>{item.head}:</p>
            <p> {item.body}</p>
</div>
                ))
            }
             <p>{data.result}</p>
           
        </div>

        <div className="md:w-1/2 my-4">
            1 image
        </div>
        </div>
      
  )
}

export default Result
