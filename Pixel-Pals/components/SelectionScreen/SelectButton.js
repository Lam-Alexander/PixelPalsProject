import { View, Text, TouchableOpacity, Image} from 'react-native'
import React from 'react'

const SelectButton = ({ onPress }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View>
                <Image source={require('../../assets/images/SelectButton.png')}/>
            </View>
        </TouchableOpacity>
    );
};



export default SelectButton;
