import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Movie from './Movie';

const apiKey = "&api_key=9813ce01a72ca1bd2ae25f091898b1c7";
const url = "https://api.themoviedb.org/3";
const path = "/discover/movie?sort_by=popularity.desc";
const apiUrl = url + path + apiKey;
const imgPath = "https://image.tmdb.org/t/p/w500/";

const Movies = () => {
    const [moviesArr, setMoviesArr] = useState([]);

    useEffect(() => {
        axios.get(apiUrl).then(res => {
            setMoviesArr(res.data.results);
        });
    }, []);

    return (
        <div style={{ display: "flex", flexWrap: "wrap" }}>
            {moviesArr.map(movie => (
                <Movie 
                    key={movie.id} 
                    name={movie.title} 
                    releaseYear={movie.release_date ? movie.release_date.split('-')[0] : 'N/A'} 
                    genre={movie.genre_ids[0]} 
                    posterPath={imgPath + movie.poster_path} 
                />
            ))}
        </div>
    );
};

export default Movies;
