import { useState } from 'react'
import { useParams } from 'react-router-dom'

function ArtistView() {
    var { id } = useParams()
    var [artistData, setArtistData] = useState([])

    return (
        <div>
            <h2>The id passed was: {id}</h2>
            <p>Artist Data</p>
        </div>
    )
}

export default ArtistView