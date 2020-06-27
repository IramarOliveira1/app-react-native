import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './pages/Home/';
import Detail from './pages/Detail/';

const AppStack = createStackNavigator();

const Routes = () => {
    return (
        <NavigationContainer>
            <AppStack.Navigator
                headerMode="screen"
                
            >
                <AppStack.Screen name="Home" component={Home} />
                <AppStack.Screen name="Voltar" component={Detail} />
            </AppStack.Navigator>
        </NavigationContainer>
    )
}

export default Routes;