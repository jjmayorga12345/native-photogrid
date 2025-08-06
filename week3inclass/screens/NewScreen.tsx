import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { StackParamList } from '../App';

type NewNavProp = StackNavigationProp<StackParamList, 'NewScreen'>;

export default function NewScreen() {
  const navigation = useNavigation<NewNavProp>();

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 20 }}>Week 3 SCREEN assignmentt</Text>
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
});
