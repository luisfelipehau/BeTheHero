import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

import Incidents from './pages/Incidents';
import Details from './pages/Details';

const AppStack = createStackNavigator();

export default function Routes() {
    return (
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{headerShown: false}}>
                <AppStack.Screen name="Casos" component={Incidents} />
                <AppStack.Screen name="Detalhes" component={Details} />
            </AppStack.Navigator>
        </NavigationContainer>
    );
}