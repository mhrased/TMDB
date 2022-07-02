//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';

// create a component
const Home = () => {
    return (
        <View style={styles.container}>
            <StatusBar animated={true} backgroundColor="#000"  barStyle="light-content" />
            <Text style={{color:'#FFF'}}>Home</Text>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000'
    },
});

//make this component available to the app
export default Home;
