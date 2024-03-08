import { View, Text, Button, ImageBackground, Image } from 'react-native'
import React from 'react'

// Importing TextStyle.js into SelectionScreen
import TextStyle from '../components/SelectionScreen/TextStyle'

// Importing SelectButtonStyle.js into SelectionScreen
import SelectButtonStyle from '../components/SelectionScreen/SelectButtonStyle';

// Importing SelectButton.js to SelectionScreen
import SelectButton from '../components/SelectionScreen/SelectButton';

// Importing SelectionWindow.js to SelectionScreen
import DogSelectionWindow from '../components/SelectionScreen/DogSelectionWindow';

// Importing SelectionWindowStyle.js to SelectionScreen
import DogSelectionWindowStyle from '../components/SelectionScreen/DogSelectionWindowStyle';



const SelectionScreen = ({ navigation }) => {
    const handleStartPress = () => {
        navigation.navigate('StartScreen')
    };

    return (
        // Importing background image to Selection Screen
        <ImageBackground source={require('../assets/images/SelectScreen.png')} style = {{ flex: 1 }}>
            
            <View>
                {/* Assigning style from TextStyle.js */}
                <Text style={TextStyle.container}>Select Your Pal</Text>
            </View>

            {/* Assigning style from SelectButtonStyle.js */}
            <View style={SelectButtonStyle.container}>
                <SelectButton title="back" onPress={handleStartPress} />
            </View>
            
            <View style={DogSelectionWindowStyle.container}>
                <DogSelectionWindow />
            </View>

             <Image source={require('../assets/images/EmptySelectionWindow.png')} style = {{bottom:581, right:6.,zIndex:0 }} />

        </ImageBackground>

    );


};



export default SelectionScreen;
