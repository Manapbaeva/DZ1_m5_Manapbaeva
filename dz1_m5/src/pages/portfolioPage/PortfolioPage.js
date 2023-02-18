import React, {useEffect, useState} from "react";


function PortfolioPage() {

    const [photos, setPhotos] = useState([]);
    const [photoData, setPhotoData] = useState(null);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/photos')
            .then(response => response.json())
            .then(photos => setPhotos(photos))
            .then(photoData => setPhotoData(photoData))
    }, [])


    const handleGetPhoto = () => {
        setPhotos(photoData.url);
    };

    return (
        <div>
        <h1>Portfolio Page</h1>

            <div style={{display: "flex"}}>
                <div>
                    {
                        photos.slice(0, 10).map(photo => <div>
                            <img src={photo.url} alt=""/>
                            <p>{photo.title}</p>
                            <button onClick={handleGetPhoto}>узнать url</button>
                            <p>---------------------------------------------------------</p>

                        </div>)
                    }
                </div>


                <h2>url  картинки:</h2>
                <p>{photoData.url}</p>

            </div>


    </div>
    )
}

export default PortfolioPage;