//SelectionScreen.js
import {View, Text, Button, StyleSheet } from 'react-native'
import React from 'react'
import styles from '../components/SelectionPage/styles'


const SelectionScreen = ({ navigation }) => {

    const Handlepress = () => {
        console.log('Handle Pressed');
    };
    return (
        <View>

            <Text style = {styles.titleText}> Welcome to Selection Screen</Text>

            {/* <Button title = "Go Back" onPress = {() => {Handlepress(); navigation.navigate ('StartScreen');}}> </Button> */}
        </View>
    );
};



export default SelectionScreen;
