import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import styles from '../Styles';


const imgPath = "https://image.tmdb.org/t/p/w500/";

const FavoritesScreen = ({ navigation, route }) => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    loadFavorites();
  }, []);

  const loadFavorites = async () => {
    try {
      const favoriteMovies = await AsyncStorage.getItem('favorites');
      if (favoriteMovies) setFavorites(JSON.parse(favoriteMovies));
    } catch (error) {
      console.error(error);
    }
  };

  const removeFavorite = async (movie) => {
    const updatedFavorites = favorites.filter(fav => fav.id !== movie.id);
    setFavorites(updatedFavorites);
    await AsyncStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    
    if (route.params && route.params.onFavoriteChange) {
      route.params.onFavoriteChange(updatedFavorites);
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={favorites}
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
              <TouchableOpacity onPress={() => removeFavorite(item)}>
                <FontAwesome name="heart" size={24} color="gray" />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default FavoritesScreen;
