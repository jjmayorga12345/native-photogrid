import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation, StackActions } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { StackParamList } from '../App';

type ModalNavProp = StackNavigationProp<StackParamList, 'Modal'>;

export default function ModalScreen() {
  const navigation = useNavigation<ModalNavProp>();

  const closeAndNavigate = () => {
    const unsubscribe = navigation.addListener('transitionEnd', () => {
      navigation.navigate('Details', { itemId: 123, otherParam: 'from modal' });
      unsubscribe();
    });
    navigation.dispatch(StackActions.pop(1));
  };

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 20 }}>Modal</Text>
      <Button title="Go to Details" onPress={closeAndNavigate} />
      <Button title="Close Modal" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
});
