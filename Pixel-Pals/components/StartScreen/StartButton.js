// StartButton.js
import { View, Text, TouchableOpacity} from 'react-native'
import React from 'react'
import styles from './StartScreenStyles'

const StartButton = ({ onPress, style }) => { 
    return (
        <TouchableOpacity onPress={onPress} style = {[styles.container, style]} > 
            <View>
                <Text style = {{color: 'white'}}>START</Text>
            </View>
        </TouchableOpacity>
    );
};


export default StartButton;

