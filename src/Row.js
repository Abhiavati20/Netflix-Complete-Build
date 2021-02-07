import React from 'react'
import './Row.css';
import { useEffect, useState } from 'react';
import axios from './axios';
import YouTube from "react-youtube";
import movieTrailer from 'movie-trailer'
const baseUrl="https://image.tmdb.org/t/p/original/"
function Row({ title , fetchUrl, isLargeRow=false}) {
    const [movies,setMovies]=useState([]);
    const [trailerUrl,setTrailerUrl]=useState("");

    useEffect(() => {
        async function fetchData() {
          const request = await axios.get(fetchUrl);
          setMovies(request.data.results);
          return request;
        }
        fetchData();
      }, [fetchUrl]);
    
      const opts = {
        height: "390",
        width: "100%",
        playerVars: {
          autoplay: 1,
        },
      };
    
      const handleClick = (movie) => {
        if (trailerUrl) {
          setTrailerUrl("");
        } else {
          movieTrailer(movie?.name || "")
            .then((url) => {
              const urlParams = new URLSearchParams(new URL(url).search);
              setTrailerUrl(urlParams.get("v"));
            })
            .catch((error) => alert("there is no trailer for this movie"));
        }
      };
    
    // console.log(movies)
    return (
        <div className="row">
            <h2>{title}</h2>
            <div className="row__posters">
                {   
                    movies.map(
                        (movie)=>
                        (isLargeRow && movie.poster_path&& (
                            <img 
                                key={movie.id}
                                onClick={()=>handleClick(movie)}
                                className={`row__poster ${isLargeRow && "row__posterLarge"}`} 
                                src={`${baseUrl}${isLargeRow ?  movie.poster_path: movie.backdrop_path}`} 
                                alt={`${baseUrl}${movie.name}`}
                            />
                        )) ||
                        (!isLargeRow && movie.backdrop_path && (
                            <img 
                                key={movie.id}
                                onClick={()=>handleClick(movie)}
                                className={`row__poster ${isLargeRow && "row__posterLarge"}`} 
                                src={`${baseUrl}${isLargeRow ?  movie.poster_path: movie.backdrop_path}`} 
                                alt={`${baseUrl}${movie.name}`}
                            />
                        ))
                        
                )}
            </div>
            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts}/>}               
        </div>
    )
}

export default Row
