import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TextInput, TouchableOpacity, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';
import styles from '../Styles';

const apiKey = "&api_key=9813ce01a72ca1bd2ae25f091898b1c7";
const url = "https://api.themoviedb.org/3";
const path = "/discover/movie?sort_by=popularity.desc";
const apiUrl = url + path + apiKey;
const imgPath = "https://image.tmdb.org/t/p/w500/";

const HomeScreen = ({ navigation }) => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    fetchMovies();
    loadFavorites();
  }, []);

  const fetchMovies = async () => {
    try {
      const response = await axios.get(apiUrl); 
      setMovies(response.data.results);
    } catch (error) {
      console.error(error);
    }
  };

  const loadFavorites = async () => {
    try {
      const favoriteMovies = await AsyncStorage.getItem('favorites');
      if (favoriteMovies) setFavorites(JSON.parse(favoriteMovies));
    } catch (error) {
      console.error(error);
    }
  };

  const toggleFavorite = async (movie) => {
    let updatedFavorites;
    if (favorites.some(fav => fav.id === movie.id)) {
      updatedFavorites = favorites.filter(fav => fav.id !== movie.id);
    } else {
      updatedFavorites = [...favorites, movie];
    }
    setFavorites(updatedFavorites);
    await AsyncStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  const filteredMovies = movies.filter(movie =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
    <View style={styles.header}>
      <TouchableOpacity onPress={() => navigation.navigate('Favorites', {onFavoriteChange: setFavorites})}>
        <Text style={styles.headerTitle}>Movies &nbsp;
        <FontAwesome name="heart" size={24} color="red" />
        </Text>
          
        </TouchableOpacity>
      </View>
    <View style={styles.container}>
      <TextInput
        style={styles.searchBar}
        placeholder="Search Movies..."
        onChangeText={text => setSearchTerm(text)}
      />
      <FlatList
        data={filteredMovies}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('MovieDetails', { id: item.id })}>
            <View style={styles.movieItem}>
              <Image
                source={{ uri: imgPath + item.poster_path }}
                style={styles.moviePoster}
              />
              <Text style={styles.movieTitle}>{item.title}</Text>
              <TouchableOpacity onPress={() => toggleFavorite(item)}>
                <FontAwesome
                  name="heart"
                  size={24}
                  color={favorites.some(fav => fav.id === item.id) ? "red" : "gray"}
                />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
    </>
  );
  
};

export default HomeScreen;
