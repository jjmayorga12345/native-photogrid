import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';
import NewScreen from './screens/NewScreen';
import ModalScreen from './screens/ModalScreen';

export type StackParamList = {
  Home: undefined;
  Details: { itemId: number; otherParam?: string };
  NewScreen: undefined;
  Modal: undefined;
};

const Stack = createStackNavigator<StackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen
          name="NewScreen"
          component={NewScreen}
          options={{
            headerTitle: 'Custom Header',
            headerStyle: { backgroundColor: '#4CAF50' },
            headerTintColor: '#fff',
          }}
        />
        <Stack.Screen
          name="Modal"
          component={ModalScreen}
          options={{
            presentation: 'modal',
            headerTitle: 'Modal View',
            headerStyle: { backgroundColor: '#673ab7' },
            headerTintColor: '#fff',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
