import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './pages/Home/';
import Detail from './pages/Detail/';

const AppStack = createStackNavigator();

const Routes = () => {
    return (
        <NavigationContainer>
            <AppStack.Navigator headerMode="screen">
                <AppStack.Screen options={{ headerShown: false }} name="Home" component={Home} />
                <AppStack.Screen name="Detalhes" component={Detail} />
            </AppStack.Navigator>
        </NavigationContainer>
    )
}

export default Routes;