import React from 'react';
import {
    StyleSheet,

} from 'react-native';

import 'react-native-gesture-handler';



import { Colors } from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MainNavigation } from './src/Navigation/navigation'


const App = () => {


    return (
        <>
            <NavigationContainer >
                <MainNavigation />
            </NavigationContainer>
        </>
    );
};

export default App;
