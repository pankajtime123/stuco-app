import React from 'react'
import { UilSearch } from '@iconscout/react-unicons'

import './Search.css'

const Search = () => {
    return (
        <div className="Search">
          <input type="text" placeholder="#Explore"/>
          <div className="s-icon">
                <UilSearch/>
          </div>
      </div>
    )
}

export default Search
