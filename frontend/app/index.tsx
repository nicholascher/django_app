import React from 'react';
import { SafeAreaView, Text, Image, StyleSheet } from 'react-native';

export default function HomeScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <Image
                source={require('../assets/images/react-logo.png')} 
                style={styles.logo}
                resizeMode="contain"
            />
            
            <Text style={styles.welcomeText}>Welcome to The Events App!</Text>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',  
        justifyContent: 'center', 
        padding: 16,
        backgroundColor: '#f0f0f0',
    },
    logo: {
        width: 150,
        height: 150,
        marginBottom: 20,
    },
    welcomeText: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#333',
    },
    helloText: {
        fontSize: 18,
        color: '#666',
    },
});
