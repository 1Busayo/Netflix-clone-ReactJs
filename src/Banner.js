import React , {useState , useEffect} from 'react';
import axios from './axios';
import requests  from './requests';
import  './Banner.css';
function Banner() {
const [movie, setMovie] = useState([]);

useEffect(() => {
    async function fetchData(){
    const request = await axios.get (requests.fetchNetflixOriginals);
     setMovie (
         request.data.results[
             Math.floor(Math.random() * request.data.results.length-1)
         ]
     )   
}
    fetchData();
}, [])
    return (
        <header className="banner" 
        style={{
            backgroundSize: "cover",
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
            backgroundPosition: "center center",
        }}
        >
            <div className="banner__contents">

           
            {/* title */}
         <h1 className="banner__title">{movie?.title || movie?.name || movie?.original_name}</h1>
            {/* div >2 > buu=ttons */}

            <div className="banner__buttons">
             <button className="banner__button">Play</button>
            <button className="banner__button">My List</button>

            <h1 className="banner__description">{movie?.overview}</h1>
            {/* description */}
           </div>
         </div>
         </header>
    )
}

export default Banner
