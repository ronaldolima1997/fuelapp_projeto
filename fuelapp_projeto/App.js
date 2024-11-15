import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './components/telaprincipal';
import SimpleCalcScreen from './components/calculobasico';
import FuelAmountCalcScreen from './components/calculokm';
import KmCostCalcScreen from './components/calculopreco';
import SplashScreen from './components/iniciando';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
   <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
       <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{ title: 'Iniciando..' }}
        />
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ title: 'Fuel APP' }}
        />
        
        <Stack.Screen
          name="SimpleCalcScreen"
          component={SimpleCalcScreen}
          options={{ title: 'Cálculo Simples' }}
        />
         <Stack.Screen
          name="FuelAmountCalcScreen"
          component={FuelAmountCalcScreen}
          options={{ title: 'Cálculo de autonomia' }}
        />
        <Stack.Screen
          name="KmCostCalcScreen"
          component={KmCostCalcScreen}
          options={{ title: 'Cálculo de Custo por Quilometragem' }}
        />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

