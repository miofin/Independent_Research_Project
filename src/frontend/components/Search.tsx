import React, { useState} from 'react'
import '../public/Search.css'

//TODO (done) Implement the SearchProps interface.
interface SearchProps {
    query: string,
    setQuery: void,
    currentPage: number,
    setCurrentPage: void
}

//TODO (done) Make sure that the component works properly.
// Every time the user types in the input field, the first page of the results should be displayed.
const Search: React.FC<SearchProps> = ({
    query,
    setQuery,
    currentPage,
    setCurrentPage,
}) => {
    const [temp, setTemp] = useState('');

    return (
        <div className="search-container">
            <form className="search-form" role="search" onSubmit={(e)=>{
                e.preventDefault();
                setQuery(temp);
                setCurrentPage(1);
            }}>
                <h2 className="search-form-title">Search Products</h2>
                <div className="search-form-group">
                    <input
                        type="text"
                        id="search-query"
                        value={temp}
                        onChange={(e)=>setTemp(e.target.value)}
                        placeholder="Enter product name..."
                        required
                    />
                </div>
            </form>
        </div>
    )
}

export default Search
