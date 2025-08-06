import React, { useState } from 'react';
import {
  View,
  TextInput,
  FlatList,
  StyleSheet,
  Modal,
  TouchableOpacity,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import PhotoCard from './PhotoCard';
import { ImageData } from '../App';

interface Props {
  photos: ImageData[];
}

export default function PhotoGallery({ photos }: Props) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPhoto, setSelectedPhoto] = useState<ImageData | null>(null);

  const filteredPhotos = photos.filter(photo =>
    photo.id.includes(searchQuery)
  );

  const openPhoto = (photo: ImageData) => {
    setSelectedPhoto(photo);
  };

  const closePhoto = () => {
    setSelectedPhoto(null);
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <Icon name="search" size={20} style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search by ID"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>
      <FlatList
        data={filteredPhotos}
        keyExtractor={(item) => item.id}
        numColumns={3}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => openPhoto(item)}>
            <PhotoCard image={item.url} id={item.id} />
          </TouchableOpacity>
        )}
      />
      <Modal visible={!!selectedPhoto} transparent>
        <TouchableOpacity
          style={styles.fullscreenContainer}
          onPress={closePhoto}
        >
          {selectedPhoto && (
            <Image
              source={{ uri: `https://picsum.photos/id/${selectedPhoto.id}/500` }}
              style={styles.fullscreenImage}
            />
          )}
        </TouchableOpacity>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#eee',
    margin: 10,
    borderRadius: 8,
    paddingHorizontal: 10,
  },
  searchIcon: { marginRight: 5, color: '#888' },
  searchInput: { flex: 1, height: 40 },
  fullscreenContainer: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  fullscreenImage: {
    width: '90%',
    height: '70%',
    resizeMode: 'contain',
  },
});
