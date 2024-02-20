import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const BackButton = ({ onPress }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View>
                <Text></Text>
            </View>
        </TouchableOpacity>
    );
};

export default BackButton;
