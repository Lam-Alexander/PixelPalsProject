// StartScreen.js

import {View, Text, Button } from 'react-native';
import React from 'react';
import StartButton from '../components/StartPage/StartButton';

const StartScreen = ({ navigation }) => {
    return (
        <View>
            <Text></Text>
            
            <Button title ="Start" onPress = {() => navigation.navigate('SelectionScreen')}>
            </Button>
        </View>
    );
};

export default StartScreen



