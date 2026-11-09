
import React, { useState } from 'react';

import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Modal,
} from 'react-native';

// Alphabet images
const alphabetData = [
  { letter: 'A', image: require('../../assets/images/alphabet/a.jpg') },
  { letter: 'B', image: require('../../assets/images/alphabet/b.jpg') },
  { letter: 'C', image: require('../../assets/images/alphabet/c.jpg') },
  { letter: 'D', image: require('../../assets/images/alphabet/d.jpg') },
  { letter: 'E', image: require('../../assets/images/alphabet/e.jpg') },
  { letter: 'F', image: require('../../assets/images/alphabet/f.jpg') },
  { letter: 'G', image: require('../../assets/images/alphabet/g.jpg') },
  { letter: 'H', image: require('../../assets/images/alphabet/h.jpg') },
  { letter: 'I', image: require('../../assets/images/alphabet/i.jpg') },
  { letter: 'J', image: require('../../assets/images/alphabet/j.jpg') },
  { letter: 'K', image: require('../../assets/images/alphabet/k.jpg') },
  { letter: 'L', image: require('../../assets/images/alphabet/l.jpg') },
  { letter: 'M', image: require('../../assets/images/alphabet/m.jpg') },
  { letter: 'N', image: require('../../assets/images/alphabet/n.jpg') },
  { letter: 'O', image: require('../../assets/images/alphabet/o.jpg') },
  { letter: 'P', image: require('../../assets/images/alphabet/p.jpg') },
  { letter: 'Q', image: require('../../assets/images/alphabet/q.jpg') },
  { letter: 'R', image: require('../../assets/images/alphabet/r.jpg') },
  { letter: 'S', image: require('../../assets/images/alphabet/s.jpg') },
  { letter: 'T', image: require('../../assets/images/alphabet/t.jpg') },
  { letter: 'U', image: require('../../assets/images/alphabet/u.jpg') },
  { letter: 'V', image: require('../../assets/images/alphabet/v.jpg') },
  { letter: 'W', image: require('../../assets/images/alphabet/w.jpg') },
  { letter: 'X', image: require('../../assets/images/alphabet/x.jpg') },
  { letter: 'Y', image: require('../../assets/images/alphabet/y.jpg') },
  { letter: 'Z', image: require('../../assets/images/alphabet/z.jpg') },
];

export default function AlphabetScreen() {
  const [selectedLetter, setSelectedLetter] = useState(null);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Learn Alphabet A - Z</Text>

      <Text style={styles.subtitle}>
        Select a letter to view its sign.
      </Text>

      <FlatList
        data={alphabetData}
        numColumns={3}
        keyExtractor={(item) => item.letter}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => setSelectedLetter(item)}
          >
            <Image source={item.image} style={styles.cardImage} />
            <Text style={styles.letterText}>{item.letter}</Text>
          </TouchableOpacity>
        )}
      />

      <Modal
        visible={selectedLetter !== null}
        transparent
        animationType="slide"
        onRequestClose={() => setSelectedLetter(null)}
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalContent}>
            {selectedLetter && (
              <>
                <Text style={styles.modalTitle}>
                  Letter {selectedLetter.letter}
                </Text>

                <Image
                  source={selectedLetter.image}
                  style={styles.largeImage}
                  resizeMode="contain"
                />

                <TouchableOpacity
                  style={styles.closeButton}
                  onPress={() => setSelectedLetter(null)}
                >
                  <Text style={styles.closeText}>Close</Text>
                </TouchableOpacity>
              </>
            )}
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F7FC',
    padding: 15,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#315C9B',
    textAlign: 'center',
    marginTop: 10,
  },
  subtitle: {
    fontSize: 15,
    color: '#666',
    textAlign: 'center',
    marginVertical: 15,
  },
  list: {
    paddingBottom: 20,
  },
  card: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    margin: 6,
    padding: 10,
    borderRadius: 12,
    alignItems: 'center',
    elevation: 3,
  },
  cardImage: {
    width: 85,
    height: 95,
    resizeMode: 'contain',
  },
  letterText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#315C9B',
    marginTop: 8,
  },
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  modalContent: {
    backgroundColor: '#FFFFFF',
    width: '100%',
    padding: 20,
    borderRadius: 15,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#315C9B',
    marginBottom: 15,
  },
  largeImage: {
    width: 230,
    height: 250,
  },
  closeButton: {
    backgroundColor: '#315C9B',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 8,
    marginTop: 20,
  },
  closeText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

