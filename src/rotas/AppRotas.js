import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import CestaRotas from "./CestaRotas";
import MelhoresProdutosRotas from "./MelhoresProdutosRotas";

import Home from '../assets/home.svg';
import Coracao from '../assets/coracao.svg';

const Tab = createBottomTabNavigator();

export default function AppRotas() {
    return <NavigationContainer>
      <Tab.Navigator screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: ({color}) => {
          let Icon = Home;

          if (route.name === 'Melhores Produtos'){
            Icon = Coracao;
          }

          return <Icon color={color} />
        },
        tabBarActiveTintColor: '#64221e'})
        }>
        <Tab.Screen name='Produtos' component={CestaRotas} options={{tabBarBadge: 3}} />
        <Tab.Screen name='Melhores Produtos' component={MelhoresProdutosRotas} />
      </Tab.Navigator>
    </NavigationContainer>
}