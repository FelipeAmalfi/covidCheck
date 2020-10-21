
import React, { useEffect } from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Screens/container/Home/Home'
import Search from '../Screens/container/Search/Search'
import Ranking from '../Screens/container/Ranking/Ranking'
import Icon from 'react-native-vector-icons/FontAwesome5';



const Tab = createBottomTabNavigator();

const getIcon = {
    'Geral': 'globe-americas',
    'Ranking': 'list-ol',
    'Busca': 'search',
}

export const MainNavigation = () => {


    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) => {
                    return <Icon name={getIcon[route.name]} size={size} color={color} />;
                },
            })}
            tabBarOptions={{
                activeTintColor: '#7159c1',
                inactiveTintColor: 'gray',
            }}>
            <Tab.Screen name="Geral" component={Home} options={({ route }) => ({ title: route.name })} />
            <Tab.Screen name="Ranking" component={Ranking} options={{ title: 'Ranking' }} options={({ route }) => ({ title: route.name })} />
            <Tab.Screen name="Busca" component={Search} options={{ title: 'Busca' }} options={({ route }) => ({ title: route.name })} />
        </Tab.Navigator>
    )
}