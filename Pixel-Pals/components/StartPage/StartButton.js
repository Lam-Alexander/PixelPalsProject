//StartButton.js
import { View, Text, TouchableOpacity, Button} from 'react-native'
import React from 'react'

const StartButton = () => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View>
                <Text>Button</Text>
                <Button></Button>
            </View>
        </TouchableOpacity>
    );
};

export default StartButton;