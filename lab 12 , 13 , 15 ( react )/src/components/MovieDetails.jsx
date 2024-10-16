import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const apiKey = "9813ce01a72ca1bd2ae25f091898b1c7";
const url = "https://api.themoviedb.org/3";
const imgPath = "https://image.tmdb.org/t/p/w500/";

const MovieDetails = () => {
    const { id } = useParams();  
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        const fetchMovieDetails = async () => {
            const result = await axios.get(`${url}/movie/${id}?api_key=${apiKey}`);
            setMovie(result.data);
        };
        fetchMovieDetails();
    }, [id]);

    if (!movie) return <p>Loading...</p>;

    return (
        <div style={{ textAlign: "center" }}>
            <h1>{movie.title}</h1>
            <img src={imgPath + movie.poster_path} alt={movie.title} />
            <p>{movie.overview}</p>
            <p>Release Date: {movie.release_date}</p>
            <p>Rating: {movie.vote_average}</p>
            <p>Genres: {movie.genres.map(genre => genre.name).join(', ')}</p>
        </div>
    );
};

export default MovieDetails;
