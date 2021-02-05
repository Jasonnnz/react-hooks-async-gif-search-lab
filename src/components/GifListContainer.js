import { useEffect, useState } from 'react';
import GifList from './GifList';
import GifSearch from './GifSearch';

function GifListContainer(){
    const [ gifs, setGifs ] = useState([])
    const [ query, setQuery ] = useState("dolphins")

    useEffect(()=>{
        fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g`)
        .then(r => r.json())
        .then(gifs => {
            setGifs(gifs.data.slice(0,3))
        })
    },[query])

    // function fetchGifs(query){
    //     fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g&limit=3`)
    //     .then(r => r.json())
    //     .then(gifs => {
    //         setGifs(gifs.map((gif) => ({url: gif.images.original.url})))
    //     })
    // }

    function onSubmitEvent(query){
        setQuery(query)
    }

    return (
        <div>
            <GifList gifs={gifs}/>
            <GifSearch handleSubmit={onSubmitEvent}/>
        </div>
    );
}

export default GifListContainer;