import { render } from '@testing-library/react'
import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

function AlbumView() {
    var { id } = useParams()
    var [ albumData, setAlbumData ] = useState([])
    var navigate = useNavigate()

    useEffect(() => {
        var API_URL = `http://localhost:4000/song/${id}`
        var fetchData = async () => {
            var response = await fetch(API_URL)
            var resData = await response.json()
            setAlbumData(resData.results)
        }
        fetchData()
    }, [id])

    var justSongs = albumData.filter(entry => entry.wrapperType === 'track')
    var renderSongs = justSongs.map((song, i) => {
        return (
            <div key={i}>
                <p>{song.trackName}</p>
            </div>
        )
    })

    var navButtons = () => {
        return (
            <div>
                <button onClick={() => navigate(-1)}>Back</button>
                |
                <button onClick={() => navigate('/')}>Home</button>
            </div>
        )
    }

    return (
        <div>
            {navButtons()}
            {renderSongs}
        </div>
    )
}

export default AlbumView