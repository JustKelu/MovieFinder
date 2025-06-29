import React, { useState } from 'react';

function SearchBar(props) {
    const [search, setSearch] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(search);
        props.onSearch(search);
    }

    return (
        <form onSubmit={handleSubmit} className='search-bar'>
            <input 
                type="text" 
                placeholder='Film title...' 
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            ></input>
            <button type='submit'>Search</button>
         </form>
    );
}

export default SearchBar;