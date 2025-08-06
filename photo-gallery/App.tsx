import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import PhotoGalleryScreen from './screens/PhotoGalleryScreen';
import PhotoDetailScreen from './screens/PhotoDetailScreen';
import PhotoModalScreen from './screens/PhotoModalScreen';

export type StackParamList = {
  PhotoGallery: undefined;
  PhotoDetail: { id: number; url: string };
  PhotoModal: { url: string };
};

const Stack = createStackNavigator<StackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="PhotoGallery"
          component={PhotoGalleryScreen}
          options={{ title: 'Photo Gallery' }}
        />
        <Stack.Screen
          name="PhotoDetail"
          component={PhotoDetailScreen}
          options={({ route }) => ({
            headerTitle: route.params.url,
          })}
        />
        <Stack.Screen
          name="PhotoModal"
          component={PhotoModalScreen}
          options={{
            presentation: 'modal',
            headerStyle: { backgroundColor: 'black' },
            headerTintColor: 'white',
            headerShadowVisible: false,
            headerTitle: '',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
