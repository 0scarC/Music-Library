import {  useEffect, useState } from 'react'
import Gallery from './components/Gallery'
import Searchbar from './components/Searchbar'
import { DataContext } from './context/DataContext'

function App() {
    var [search, setSearch] = useState('')
    var [message, setMessage] = useState('Search for Music')
    var [data, setData] = useState([])

    var API_URL = 'https://itunes.apple.com/search?term='

    useEffect(() => {
        if (search) {
            var fetchData = async () => {
                document.title = `${search} Music`
                var response = await fetch(API_URL + search)
                var resData = await response.json()
                if (resData.results.length > 0) {
                    setData(resData.results)
                } else {
                    setMessage('Not Found')
                }
            }
            fetchData()
        }
    }, [search])

    var handleSearch = (e, term) => {
        e.preventDefault()
        setSearch(term)
    }

    return (
        <div>
            <Searchbar handleSearch={handleSearch}/>
            {message}
            <DataContext.Provider value={data}>
                <Gallery/>
            </DataContext.Provider>
        </div>
    )
}

export default App;