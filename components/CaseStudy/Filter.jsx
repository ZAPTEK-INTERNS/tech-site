import { useState } from 'react';
import { useFilter } from './Context/Filter';
import {  filterCategories} from  './data.js';

const Filter = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const { setFilter } = useFilter();
  const color = 'text-purple-900';



  const handleFilterChange = (newFilter) => {
    setSelectedFilter(newFilter);
    setFilter(newFilter);
  };

  return (
    <>
      <div className='md:flex md:space-x-12'>
        {filterCategories.map((category) => (
          <div
            key={category.value}
            onClick={() => handleFilterChange(category.value)}
            className={`pl-4 py-2 font-medium border-b border-slate-400  md:px-6   hover:cursor-pointer
             ${selectedFilter === category.value ? color : ''}`}
          >
            <p className='md:text-center'> {category.text}</p>
           
          </div>
        ))}
      </div>
    </>
  );
};

export default Filter;
