import React from 'react'
import "./Search.css"
function Search() {
    return (
        <div className="search">
            <i class='bx bx-search'></i>
            <input type="text" name="search" placeholder="Search" />
            <i class='bx bx-slider'></i>
        </div>
    )
}

export default Search
