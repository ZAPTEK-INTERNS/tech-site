import React from 'react'

const Search = ({setSearch, search}) => {
  return (
    <div className='flex flex-col sm:flex-row gap-4'>
    <input 
     type="text" 
     value={search}
     onChange={(e) => setSearch(e.target.value)}
     placeholder='Enter search keyword' 
     className='outline-none border border-gray-300 p-3 rounded-md'
     /> 
    <button className='bg-violet-700 py-2 border border-violet-700 px-8 text-white hover:text-black hover:bg-white transition-all rounded-3xl'>
       Search
    </button>
  </div>
  )
}

export default Search
