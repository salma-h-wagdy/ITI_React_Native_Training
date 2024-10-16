import React, { useEffect, useState } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import axios from 'axios';
import styles from '../Styles';

const apiKey = "9813ce01a72ca1bd2ae25f091898b1c7";
const url = "https://api.themoviedb.org/3";
const imgPath = "https://image.tmdb.org/t/p/w500/";

const MovieDetails = ({ route }) => {
    const { id } = route.params;
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        const fetchMovieDetails = async () => {
            try {
                const requestUrl = `${url}/movie/${id}?api_key=${apiKey}`;
                const result = await axios.get(requestUrl);
                setMovie(result.data);
            } catch (error) {
                console.error('Error fetching movie details:', error);
            }
        };
        
        fetchMovieDetails();
    }, [id]);

    if (!movie) return <Text>Loading...</Text>;

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>{movie.title}</Text>
            <View style={styles.imageContainer}>
                <Image
                    source={{ uri: imgPath + movie.poster_path }}
                    style={styles.image}
                />
            </View>
            <Text style={styles.overview}>{movie.overview}</Text>
            <Text style={styles.details}>Release Date: {movie.release_date}</Text>
            <Text style={styles.details}>Rating: {movie.vote_average}</Text>
            <Text style={styles.details}>
                Genres: {movie.genres.map(genre => genre.name).join(', ')}
            </Text>
        </ScrollView>
    );
};

export default MovieDetails;
