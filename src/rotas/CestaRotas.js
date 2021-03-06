import React from "react";

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Cesta from "../telas/Cesta";
import Home from '../telas/Home';

const Stack = createNativeStackNavigator();

export default function CestaRotas({ComponentPrincipal = Home}) {
    return <Stack.Navigator screenOptions={{ headerShown: false}}>
        <Stack.Screen name='HomeScreen' component={ComponentPrincipal} />
        <Stack.Screen name='Cesta' component={Cesta} />
    </Stack.Navigator>
}