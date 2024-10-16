import React from 'react';
import { View, Text } from 'react-native';
import styles from '../Styles';

const Profile = ({ route }) => {
    const { user } = route.params;

    return (
        <View style={styles.container}>
            <Text style={styles.profileName}>{user.name}</Text>
            <Text style={styles.profileDetail}>Email: {user.email}</Text>
            <Text style={styles.profileDetail}>Phone: {user.phone}</Text>
            <Text style={styles.profileDetail}>Website: {user.website}</Text>
        </View>
    );
};

export default Profile;
