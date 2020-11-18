import React, { useState } from 'react';
import axios from 'axios';
import { searchResults, userHistory } from "../actions";
import { useDispatch } from 'react-redux';


function SearchBar() {
    const [searchTerm, setSearchTerm] = useState('');
    const dispatch = useDispatch();

    const handleChange = event => {
        setSearchTerm(event.target.value);
    };

    const query = e => {
        e.preventDefault()

        axios.get('http://hn.algolia.com/api/v1/search?query=' + searchTerm + "&tags=story")
            .then((response) => {

                dispatch(searchResults(response.data))
                console.log(searchTerm)
                dispatch(userHistory(searchTerm))
                setSearchTerm('');

            })
    }

    return (
        <div className='searchBar row justify-content-center'>
            <form onSubmit={query}>
                <input
                    type="text"
                    name='search'
                    placeholder="Search Algolia"
                    value={searchTerm}
                    onChange={handleChange}
                />
                <button type='submit' className='btn-info'>Search</button>
            </form>
        </div>
    )
};

export default SearchBar;