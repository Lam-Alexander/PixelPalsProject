import {View, Text, Button} from 'react-native'
import React from 'react'
import styles from '../components/SelectionScreen/SelectionPageStyles'
// import BackButton from '../components/SelectionScreen/BackButton';

const SelectionScreen = ({ navigation }) => {
    const handleStartPress = () => {
        navigation.navigate ('StartScreen')
    };

    return (
        <View>
            <Text style = {styles.titleText}> Welcome to Selection Screen</Text>
            {/* <BackButton title="back" onPress ={handleStartPress} /> */}
            <Button title = "Back" onPress = {handleStartPress} />
        </View>
    );
};



export default SelectionScreen;
