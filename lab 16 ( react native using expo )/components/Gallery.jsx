import React from 'react';
import { StyleSheet, View, Image, ScrollView, Dimensions } from 'react-native';
import styles from './Styles.js';

const images = [
  { id: '1', uri: require('../images/1.jpg') },
  { id: '2', uri: require('../images/2.jpg') },
  { id: '3', uri: require('../images/3.png') },
  { id: '4', uri: require('../images/4.png') },
  { id: '5', uri: require('../images/5.png') }
];



const Gallery = () => {
  return (
    <View style={styles.container}>
      <ScrollView
        horizontal={true}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
      >
        {images.map((item) => (
          <Image key={item.id} source={item.uri} style={styles.fullImage} />
        ))}
      </ScrollView>
    </View>
  );
};

const { width, height } = Dimensions.get('window');


export default Gallery;
