import { useState, useRef } from 'react'
import Gallery from './components/Gallery'
import Searchbar from './components/Searchbar'
import { DataContext } from './context/DataContext'
import { SearchContext } from './context/SearchContext'

function App() {
    var [search, setSearch] = useState('')
    var [message, setMessage] = useState('Search for Music')
    var [data, setData] = useState([])
    var searchInput = useRef('')

    var API_URL = 'https://itunes.apple.com/search?term='

    var handleSearch = (e, term) => {
        e.preventDefault()
        var fetchData = async () => {
            document.title = `${term} Music`
            var response = await fetch(API_URL + term)
            var resData = await response.json()
            if (resData.results.length > 0) {
                setData(resData.results)
            } else {
                setMessage('Not Found')
            }
        }
        fetchData()
    }

    return (
        <div>
            <SearchContext.Provider value={{
                term: searchInput,
                handleSearch: handleSearch
            }}>
                <Searchbar/>
            </SearchContext.Provider>
            {message}
            <DataContext.Provider value={data}>
                <Gallery/>
            </DataContext.Provider>
        </div>
    )
}

export default App;