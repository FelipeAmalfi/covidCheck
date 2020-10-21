import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { MainNavigation } from './src/Navigation/navigation'
import { InfoContext } from './src/store/GlobalContext'


const App = () => {

    return (
        <>
            <InfoContext>
                <NavigationContainer >
                    <MainNavigation />
                </NavigationContainer>
            </InfoContext>
        </>
    );
};

export default App;
