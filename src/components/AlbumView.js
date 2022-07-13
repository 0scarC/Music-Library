import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

function AlbumView() {
    var { id } = useParams()
    var [ albumData, setAlbumData ] = useState()

    return (
        <div>
            <h2>The album id passed was: {id}</h2>
            <p>Album Data</p>
        </div>
    )
}

export default AlbumView