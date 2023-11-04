import React from 'react'

const Result = ({data}) => {
  return (
    <div className="md:flex my-8">
       
        <div className="md:w-1/2 space-y-4">
          <p className='font-bold md:text-7xl text-4xl'>Results</p>
            {
                data.resultlist.map((item,idx)=>(
<div className='flex' key={idx}>
<div className=' bg-purple-900 w-2 h-2 mt-2.5 mr-4 rounded-full'>
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
