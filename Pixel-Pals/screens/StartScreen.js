import { View, Text, Button, Image} from "react-native";
import React from "react";
// import StartButton from '../components/StartScreen/StartButton';

const StartScreen = ({navigation}) => {
    const handleStartPress = () => {
        navigation.navigate ('SelectionScreen')
    };

    return (
        <View>
            <Image source = {require('../assets/images/logo.png')} />
            {/* <StartButton onPress = {handleStartPress} /> */}
            <Button title="start" onPress = {handleStartPress} />
        </View>
    );
};

export default StartScreen;

