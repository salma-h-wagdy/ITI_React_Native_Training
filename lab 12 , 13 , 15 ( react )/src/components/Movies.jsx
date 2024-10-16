// Movies.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Movie from './Movie';

const apiKey = "9813ce01a72ca1bd2ae25f091898b1c7";
const url = "https://api.themoviedb.org/3";
const path = "/discover/movie?sort_by=popularity.desc";
const apiUrl = url + path + "&api_key=" + apiKey;
const imgPath = "https://image.tmdb.org/t/p/w500/";

const Movies = ({ moviesArr }) => {
    const [apiMovies, setApiMovies] = useState([]);

    useEffect(() => {
        axios.get(apiUrl).then(res => {
            setApiMovies(res.data.results);
        });
    }, []);

    // Combine API movies with manually added movies
    const combinedMovies = [...apiMovies, ...moviesArr];

    return (
        <div style={{ display: "flex", flexWrap: "wrap" }}>
            {combinedMovies.map(movie => (
                <Movie
                    key={movie.id}
                    id={movie.id}
                    name={movie.name || movie.title}
                    releaseYear={movie.releaseYear || (movie.release_date ? movie.release_date.split('-')[0] : 'N/A')}
                    genre={movie.genre || (movie.genre_ids ? movie.genre_ids[0] : 'Unknown')}
                    posterPath={movie.posterPath || (imgPath + movie.poster_path)}
                />
            ))}
        </div>
    );
};

export default Movies;
