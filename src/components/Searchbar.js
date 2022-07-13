import { useContext } from 'react'
import { SearchContext } from '../context/SearchContext'

function Searchbar() {
    var {term, handleSearch} = useContext(SearchContext)

    return (
        <form>
            <input ref={term} type="text" placeholder="Search"/>
            <button onClick={(e) => handleSearch(e, term.current.value)}>Search</button>
        </form>
    )
}

export default Searchbar