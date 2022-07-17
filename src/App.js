import { useState, Fragment } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Gallery from './components/Gallery'
import Searchbar from './components/Searchbar'
import AlbumView from './components/AlbumView'
import ArtistView from './components/ArtistView'

function App() {
  // var [search, setSearch] = useState('')
  var [message, setMessage] = useState('Search for Music')
  var [data, setData] = useState([])

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
      {message}
      <Router>
        <Routes>
          <Route path="/" element={
            <Fragment>
              <Searchbar handleSearch={handleSearch} />
              <Gallery data={data} />
            </Fragment>
          }>
          </Route>
          <Route path="/album/:id" element={<AlbumView/>} />
          <Route path="artist/:id" element={<ArtistView/>}/>
        </Routes>
      </Router>
    </div>
  )

}

export default App;
