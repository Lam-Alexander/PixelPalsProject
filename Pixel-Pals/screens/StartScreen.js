import { View, Button, ImageBackground } from "react-native";
import React from "react";

// Importing StartButtonStyles.js file to StartScreen
import StartButtonStyle from "../components/StartScreen/StartButtonStyles";

// Importing StartButton.js file to StartScreen
import StartButton from "../components/StartScreen/StartButton";

const StartScreen = ({ navigation }) => {

    // Function that will handle the navagation when button is pressed
    const handleStartPress = () => {
        // navigates to the SelectionScreen When button is pressed
        navigation.navigate('SelectionScreen');
    };

    return (
        <ImageBackground source={require('../assets/images/StartScreen.png')} style={{ flex: 1 }}>
            {/* This is importing styles from Start Button Styles */}

            <View style={StartButtonStyle.container}>
                {/* Using a custom start button that was created */}
                <StartButton onPress={handleStartPress} />
            </View>
        </ImageBackground>
    );
};

export default StartScreen;