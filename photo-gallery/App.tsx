import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import PhotoGallery from './components/PhotoGallery';

export interface ImageData {
  id: string;
  url: string;
}

const imageData: ImageData[] = [];
for (let i = 1; i <= 70; i++) {
  imageData.push({
    id: i.toString(),
    url: `https://picsum.photos/id/${i}/200`,
  });
}

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <PhotoGallery photos={imageData} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
