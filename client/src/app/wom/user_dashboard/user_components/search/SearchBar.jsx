import React from 'react'
import './searchbar.css'
function SearchBar() {
  return (
    <div className="search-btn">
    <form action="#" method='POST' className='search-form d-flex align-items-center'>
        <input type="text" name='query' placeholder='Search' title='Enter Search Keyword' />
        <button type='submit' title='Search'>
            <i className='bi bi-search'></i>
        </button>
    </form>
</div>
  )
}

export default SearchBar