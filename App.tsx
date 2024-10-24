import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MainBage from './src/Screens/MainBage';
import {NavigationContainer} from '@react-navigation/native';
const Stack = createNativeStackNavigator();
import SplashScreen from 'react-native-splash-screen';
import {useEffect} from 'react';

export default function App() {
    // useEffect(() => {
    //     console.log("SplashScreen.hide()");
    //     SplashScreen.hide();
    // }, []);

  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="MainBage">
            <Stack.Screen name="MainBage" component={MainBage} options={{ headerShown: false }} />

        </Stack.Navigator>
      </NavigationContainer>
  );
}
