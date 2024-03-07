import { View, Button, ImageBackground } from "react-native";
import React from "react";
import ButtonStyle from "../components/StartScreen/PixelStartButtonStyles";
import PixelStartButton from "../components/StartScreen/PixelStartButton";

const StartScreen = ({ navigation }) => {
    const handleStartPress = () => {
        navigation.navigate('SelectionScreen');
    };

    return (
        <ImageBackground source={require('../assets/images/StartScreen.png')} style={{ flex: 1 }}>
            <View style={ButtonStyle.container}>
                 <PixelStartButton onPress = {handleStartPress} />
            </View>
        </ImageBackground>
    );
};

export default StartScreen;