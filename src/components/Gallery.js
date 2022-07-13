import GalleryItem from './GalleryItem'

function Gallery(props) {
    var display = props.data.map((item, index) => {
        return (
            <GalleryItem item={item} key={index}/>
        )
    })

    return (
        <div>
            {display}
        </div>
    )
}

export default Gallery