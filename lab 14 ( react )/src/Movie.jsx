import React, { Component } from 'react';

class Movie extends Component {
    render() {
        const { name, releaseYear, genre, posterPath } = this.props;
        return (
            <div style={{ margin: "10px", textAlign: "center" , width: '200px' }}>
                <img src={posterPath} alt={name} style={{ width: "200px", height: "300px" }} />
                <h2 style={{ color: '#1bb434' ,fontSize: '16px',  overflow: 'hidden'  }}>{name}</h2>
                <p>
                    Released in: {releaseYear}<br></br>
                    Genre: {genre}
                </p>
            </div>
        );
    }
}

export default Movie;
