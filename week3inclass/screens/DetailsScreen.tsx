import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { StackParamList } from '../App';

type DetailsNavProp = StackNavigationProp<StackParamList, 'Details'>;
type DetailsRouteProp = RouteProp<StackParamList, 'Details'>;

export default function DetailsScreen() {
  const { params } = useRoute<DetailsRouteProp>();
  const navigation = useNavigation<DetailsNavProp>();

  return (
    <View style={styles.container}>
      <Text>Details Screen</Text>
      <Text>itemId: {params.itemId}</Text>
      <Text>otherParam: {params.otherParam}</Text>
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
});
