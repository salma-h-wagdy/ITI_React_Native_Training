import React from 'react';
import { Link } from 'react-router-dom';

const Movie = ({ id, name, releaseYear, genre, posterPath }) => {
    return (
        <div style={{ margin: "10px", textAlign: "center", width: '200px' }}>
            <Link to={`/movie/${id}`}>
                <img src={posterPath} alt={name} style={{ width: "200px", height: "300px" }} />
                <h2 style={{ color: '#1bb434', fontSize: '16px', overflow: 'hidden' }}>{name}</h2>
            </Link>
            <p>
                Released in: {releaseYear}<br />
                Genre: {genre}
            </p>
        </div>
    );
};

export default Movie;
