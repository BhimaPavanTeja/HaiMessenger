import React from 'react'
import searchIcon from './search-icon.png'

const SearchBar = () => {
  return (
    <div className=' m-3 flex items-center bg-gray-700 rounded-lg border-2 border-gray-500 focus-within:border-green-200'>
      <input
        type='text'
        placeholder='Search...'
        className='text-white w-full h-3 m-2 p-3 bg-gray-700 focus:outline-none'
      />
      <img src={searchIcon} alt="search" className='w-6 m-2 cursor-pointer' /> 
    </div>
  )
}

export default SearchBar
