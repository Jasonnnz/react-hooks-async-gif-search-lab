import { useEffect, useState } from 'react';
function GifSearch({ handleSubmit }){
    const [ query, setQuery ] = useState("")
    return (
        <div>
            <label htmlFor="search">Enter a Search Term:</label><br></br>
            <input onChange={(e) => setQuery(e.target.value)} type="text" id="search" placeholder="Search..." value={query}></input><br></br>
            <button onClick={()=>handleSubmit(query)} type="submit">Find Gifs</button>
        </div>
    );
}

export default GifSearch;