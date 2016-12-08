import React from 'react';

const Search = props => {
  return (
    <div>
      <input className="searchBar" type="text" placeholder="enter query here"></input>
      <button className="searchButton" click="performQuery()">Search</button>
    </div>
  )
}

export default Search
