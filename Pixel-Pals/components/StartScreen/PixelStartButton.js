// PixelStartButton.js
import { View, Text, TouchableOpacity, Image} from 'react-native'
import React from 'react'



const PixelStartButton = ({ onPress, style }) => { 
    return (
        <TouchableOpacity onPress={onPress}> 
            <View>
                <Image source={require('../../assets/images/PixelButton.png')}/>
            </View>
            
        </TouchableOpacity>
    );
};


export default PixelStartButton;

