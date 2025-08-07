import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BienvenidaScreen from '../screens/BienvenidaScreen';
import DivisionScreen from '../screens/DivisionScreen';

// Se definen los tipos de las rutas para el Stack Navigator
export type RootStackParamList = {
  Bienvenida: undefined;
  Division: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Bienvenida">
      <Stack.Screen
        name="Bienvenida"
        component={BienvenidaScreen}
        options={{ title: 'Bienvenido' }}
      />
      <Stack.Screen
        name="Division"
        component={DivisionScreen}
        options={{ title: 'División de Números' }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;