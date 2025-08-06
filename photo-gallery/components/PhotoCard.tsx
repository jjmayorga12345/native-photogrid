import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

interface Props {
  image: string;
  id: string;
}

export default function PhotoCard({ image }: Props) {
  return (
    <View style={styles.container}>
      <Image source={{ uri: image }} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 110,
    height: 110,
    borderRadius: 6,
  },
});
