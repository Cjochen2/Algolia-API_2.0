import { useSelector } from 'react-redux';
import ResultsCard from './ResultsCard';

const SearchResults = () => {

    const searchData = useSelector(state => state.results)

    return (
        <div className='row'>
            {!searchData.hits ? "No Results to Display" : searchData.hits.map((info, i) => <ResultsCard article={info} key={i}/>)}
        </div>
    )
};

export default SearchResults;