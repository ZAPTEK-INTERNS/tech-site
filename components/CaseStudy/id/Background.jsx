import React from 'react'

const Background = ({data}) => {
  return (
    <div className="md:flex mt-12">
        <div className="md:w-1/2 space-y-4">
            <p className='text-3xl md:text-5xl font-bold md:mt-12'> Background</p>
            <p className='font-medium'> {data.background}</p>
        </div>
        <div className="md:w-1/2 flex md:justify-center ">
        <div className="bg-slate-200/30 border border-slate-400 rounded-md px-8 py-16 space-y-8 md:min-w-[60%] w-full">
              <div className='flex justify-between border-b border-b-slate-500'>
                <p >Industry:</p>
                <p>{data.location}</p>
              </div>
              <div className='flex justify-between border-b border-b-slate-500'>
              <p>Location:</p>
              <p>{data.location}</p>
              </div>
              <div>
              <p>Services Used:</p>
              </div>
          </div>
        </div>
      </div>
  )
}

export default Background
