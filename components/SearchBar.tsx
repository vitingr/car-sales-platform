"use client"

import { SearchManufacturer } from '.'
import React, { useState } from 'react'

const SearchBar = () => {

  const [manufacturer, setManufacturer] = useState("")

  const handleSearch = () => {

  }
  
  return (
    <form className='searchbar' onSubmit={handleSearch}>
      <div className='searchbar__item'>
        <SearchManufacturer manufacturer={manufacturer} setmanufacturer={setManufacturer} />
      </div>
    </form>
  )
}

export default SearchBar 