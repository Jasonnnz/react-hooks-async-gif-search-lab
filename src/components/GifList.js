function GifList({gifs}) {

    const gifList = gifs.map((gif) => 
        <li><img src={gif.images.original.url} alt="gif"/></li>
    )

    return (
        <div>
            <ul>
                {gifList}
            </ul>
        </div>
    );
}

export default GifList;