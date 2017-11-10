

// Import libraries for making Component
import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';


// Make a Component
const App = () => (
    <View style={{ flex: 1 }}>         
        <Header headerText={'Albums'} />
        <AlbumList />
    </View>
);


export default App;
