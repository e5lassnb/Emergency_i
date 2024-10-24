import React, { useEffect } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const SplashScreen = ({ navigation }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.replace('MainBage'); // Navigate to your main screen
        }, 3000); // Display splash for 3 seconds

        return () => clearTimeout(timer); // Clean up the timer
    }, [navigation]);

    return (
        <View style={styles.container}>
            <Image
                source={require('../../assets/tfai.png')} // Replace with your logo path
                style={styles.logo}
                resizeMode="contain"
            />
            <Text style={styles.title}>Your App Name</Text>
            <Text style={styles.subtitle}>Your tagline or description</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#6AB62F', // Custom background color
    },
    logo: {
        width: 200, // Adjust based on your logo size
        height: 200, // Adjust based on your logo size
        marginBottom: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#FFFFFF', // Title text color
        marginBottom: 5,
    },
    subtitle: {
        fontSize: 16,
        color: '#FFFFFF', // Subtitle text color
    },
});

export default SplashScreen;
