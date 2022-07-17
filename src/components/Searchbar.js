import { useState } from 'react'

function Searchbar(props) {
    var [term, setSearchTerm] = useState('')

    return (
        <form onSubmit={(e) => props.handleSearch(e, term)}>
            <input type="text" placeholder="Search" onChange={(e) => setSearchTerm(e.target.value)}/>
            <input type="submit"/>
        </form>
    )
}

export default Searchbar