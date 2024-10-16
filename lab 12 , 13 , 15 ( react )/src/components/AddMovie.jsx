import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddMovie = ({ addMovie }) => {
    const [movieData, setMovieData] = useState({
        name: '',
        releaseYear: '',
        genre: '',
        posterPath: ''
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setMovieData({
            ...movieData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addMovie(movieData);
        navigate('/');
    };

    return (
        <div style={{ padding: "20px" }}>
            <h2>Add a New Movie</h2>
            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: "10px" }}>
                    <label htmlFor="name">Movie Name:</label><br />
                    <input type="text" id="name" name="name" value={movieData.name} onChange={handleChange} style={{ width: "100%", padding: "8px" }} required />
                </div>
                <div style={{ marginBottom: "10px" }}>
                    <label htmlFor="releaseYear">Release Year:</label><br />
                    <input type="text" id="releaseYear" name="releaseYear" value={movieData.releaseYear} onChange={handleChange} style={{ width: "100%", padding: "8px" }} required />
                </div>
                <div style={{ marginBottom: "10px" }}>
                    <label htmlFor="genre">Genre:</label><br />
                    <input type="text" id="genre" name="genre" value={movieData.genre} onChange={handleChange} style={{ width: "100%", padding: "8px" }} required />
                </div>
                <div style={{ marginBottom: "10px" }}>
                    <label htmlFor="posterPath">Poster Path (URL):</label><br />
                    <input type="text" id="posterPath" name="posterPath" value={movieData.posterPath} onChange={handleChange} style={{ width: "100%", padding: "8px" }} required />
                </div>
                <button type="submit" style={{ padding: "10px 20px", backgroundColor: "#1bb434", color: "white", border: "none" }}>Add Movie</button>
            </form>
        </div>
    );
};

export default AddMovie;
