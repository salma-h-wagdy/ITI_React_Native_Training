import React, { useEffect } from 'react';
import { View, Text, Image } from 'react-native';
import styles from '../Styles';

const LoadingScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Home');
    }, 3000);
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require('../images/image.png')} 
        style={styles.loadImage}
      />
      <Text style={styles.LoadingScreen}>Movies App</Text>
    </View>
  );
};

export default LoadingScreen;
