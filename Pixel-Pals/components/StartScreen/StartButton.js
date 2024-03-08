// PixelStartButton.js
import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'


// Creating a Custom Button called Start Button
const StartButton = ({ onPress}) => {
    return (
        // When button is press will give user a Opacity feed back
        <TouchableOpacity onPress={onPress}>
            <View>
                {/* Importing a custom image for our button */}
                <Image source={require('../../assets/images/StartButton.png')} />
            </View>

        </TouchableOpacity>
    );
};


export default StartButton;

