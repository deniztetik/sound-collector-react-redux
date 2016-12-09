import React from 'react';

const Search = ({searchKeyword, handleChange}) => {
  return (
    <div>
      <input
        className="searchBar"
        type="text"
        placeholder="enter query here"
        value={searchKeyword}
        onChange={(e) => handleChange(e)}
      >
      </input>
      <button className="searchButton" click="performQuery()">Search</button>
    </div>
  )
}

export default Search
