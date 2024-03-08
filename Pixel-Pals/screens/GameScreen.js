import React, { useState, useEffect } from 'react';
import { View, Image, TouchableOpacity, Text, Animated } from 'react-native';
import styles from '../components/GameScreen/GameScreenStyle.js';
import GameBackGround from '../assets/images/BG_InGame.png';
import PixelDogTailWag from '../assets/images/PixelDogTailWag.gif';
import PixelDogEating from '../assets/images/PixelDogEating.gif';
import FeedButton from '../assets/images/FeedButton25-2.png';
import PixelDogBallThrow from '../assets/images/PixelDogBallThrowFramed.gif';
import PlayButton from '../assets/images/PlayButton.png';


export default function GameScreen() {
    const [dogGif, setDogGif] = useState(PixelDogTailWag);
    const [health, setHealth] = useState(1);
    const healthBarWidth = health * 80;

    const [playGif, setBallThrowGif] = useState(PixelDogTailWag);
    const [energy, setEnergy] = useState(1); // New state for the energy bar
    const energyBarWidth = energy * 80;


    useEffect(() => {
        const interval = setInterval(() => {
            setHealth((currentHealth) => Math.max(0, currentHealth - 0.00233)); 
        }, 1000);

        return () => clearInterval(interval); // Clear the interval when the component unmounts
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setEnergy((currentEnergy) => Math.max(0, currentEnergy - 0.0033));
        }, 1000);
    
        return () => clearInterval(interval);
    }, []);
    

    const feedPressed = () => {
        setDogGif(PixelDogEating);
        setHealth(1); // Refills the health

        setTimeout(() => {
            setDogGif(PixelDogTailWag);
        }, 5500);
    };

    const playPressed = () => {
        setDogGif(PixelDogBallThrow); // Change to the playing animation
        setEnergy(1); // Refill the energy
    
        setTimeout(() => {
            setDogGif(PixelDogTailWag); // Change back to the default animation
        }, 7000); // Adjust the timeout to the length of your playing animation
    };

    return (
        <View style={styles.container}>

            <Image source={GameBackGround} style={styles.backgroundImage}></Image> 
            

        {dogGif === PixelDogBallThrow && (
            <Image source={PixelDogBallThrow} style={styles.ballThrow} />
        )}
        {dogGif !== PixelDogBallThrow && (
            <Image source={dogGif} style={styles.pixelAnimal} />
        )}

            <TouchableOpacity onPress={feedPressed}>
                <Image source={FeedButton} style={styles.feedButton} />
            </TouchableOpacity>

            <TouchableOpacity onPress={playPressed}>
                <Image source={PlayButton} style={styles.playButton} />
            </TouchableOpacity>

            <View style={styles.healthContainer}>
                <Text style={styles.healthText}>Hunger</Text>
                <Animated.View style={[styles.healthBar, { width: `${healthBarWidth}%` }]} />
            </View>

            <View style={styles.energyContainer}>
                <Text style={styles.energyText}>Happiness</Text>
                <Animated.View style={[styles.energyBar, { width: `${energyBarWidth}%` }]} />
            </View>

        </View>
    );
}