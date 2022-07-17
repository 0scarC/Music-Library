import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

function ArtistView() {
    var { id } = useParams()
    var [ artistData, setArtistData ] = useState([])
    
    return (
        <div>
            <h2>The artist id passed was: {id}</h2>
            <p>Artist Data</p>
        </div>
    )
}

export default ArtistView