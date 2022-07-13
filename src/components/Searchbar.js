import { useState } from 'react'

function Searchbar(props) {
    var [searchTerm, setSearchTerm] = useState('')
    //without submit button, comment out var above and change input onChange to (e) => props.handleSearch(e, e.target.value)
    return (
        <form onSubmit={(e) => props.handleSearch(e, searchTerm)}>
            <input type="text" placeholder="Enter a search term here" onChange={(e) => setSearchTerm(e.target.value)}/>
            
            <input type="submit"/>
        </form>
    )
}

export default Searchbar