import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { StackParamList } from '../App';

type HomeNavProp = StackNavigationProp<StackParamList, 'Home'>;

export default function HomeScreen() {
  const navigation = useNavigation<HomeNavProp>();

  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() =>
          navigation.navigate('Details', { itemId: 123, otherParam: 'test' })
        }
      />
      <Button
        title="Go to New Screen"
        onPress={() => navigation.navigate('NewScreen')}
      />
      <Button
        title="Open Modal"
        onPress={() => navigation.navigate('Modal')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
});
