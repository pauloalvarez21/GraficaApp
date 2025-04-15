import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen  from '../screens/HomeScreen';
import CalculadoraScreen from '../screens/CalculadoraScreen';

export const Stack = createNativeStackNavigator();

export const StackNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Calculadora" component={CalculadoraScreen} />
        </Stack.Navigator>
    );
};