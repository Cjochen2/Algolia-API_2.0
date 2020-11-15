import React, { useState } from 'react';
import axios from 'axios'

function SearchBar() {
    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = event => {
        setSearchTerm(event.target.value);
    };

    const query = e => {
        e.preventDefault()

        axios.get('http://hn.algolia.com/api/v1/search?query=' + searchTerm + "&tags=story")
            .then((response) => {

                //results(response.data.items);
                //setSearchTerm('');
                //console.log(searchTerm)

            })
    }

    return (
        <div className='searchBar'>
            <form>
                <input
                    type="text"
                    placeholder="Search"
                    value={searchTerm}
                    onChange={handleChange}
                />
                <button type='button' className='btn' onClick={query}>Search</button>
            </form>
        </div>
    )
};

export default SearchBar