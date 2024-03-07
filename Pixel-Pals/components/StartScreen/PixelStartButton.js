// PixelStartButton.js
import { View, Text, TouchableOpacity, Image} from 'react-native'
import React from 'react'
import styles from './StartScreenStyles'


const PixelStartButton = ({ onPress, style }) => { 
    return (
        <TouchableOpacity onPress={onPress} style = {[styles.container, style]} > 
            <View>
                <Image source={require('../../assets/images/PixelButton.png')}/>
            </View>
            
        </TouchableOpacity>
    );
};


export default PixelStartButton;

