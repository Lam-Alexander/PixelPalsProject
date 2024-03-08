import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StartScreen from "./screens/StartScreen";
import SelectionScreen from "./screens/SelectionScreen";
import GameScreen from "./screens/GameScreen";


const Stack = createNativeStackNavigator();
const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={StartScreen}>
                <Stack.Screen name="PixelPals" component={GameScreen} options={{ headerShown: false }} />
                <Stack.Screen name="SelectionScreen" component={SelectionScreen} options={{ headerShown: false }} />
                <Stack.Screen name="StartScreen" component={StartScreen} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
