
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

const numberData = [
  
  { number: 1, image: require('../../assets/images/numbers/1.jpg') },
  { number: 2, image: require('../../assets/images/numbers/2.jpg') },
  { number: 3, image: require('../../assets/images/numbers/3.jpg') },
  { number: 4, image: require('../../assets/images/numbers/4.jpg') },
  { number: 5, image: require('../../assets/images/numbers/5.jpg') },
  { number: 6, image: require('../../assets/images/numbers/6.jpg') },
  { number: 7, image: require('../../assets/images/numbers/7.jpg') },
  { number: 8, image: require('../../assets/images/numbers/8.jpg') },
  { number: 9, image: require('../../assets/images/numbers/9.jpg') },
  { number: 10, image: require('../../assets/images/numbers/10.jpg') },
];

export default function NumbersScreen() {
  const [selectedNumber, setSelectedNumber] = useState(null);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Learn Numbers 0 - 10</Text>

      <Text style={styles.subtitle}>
        Select a number to view its sign.
      </Text>

      <FlatList
        data={numberData}
        numColumns={3}
        keyExtractor={(item) => String(item.number)}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => setSelectedNumber(item)}
          >
            <Image source={item.image} style={styles.cardImage} />
            <Text style={styles.numberText}>{item.number}</Text>
          </TouchableOpacity>
        )}
      />

      <Modal
        visible={selectedNumber !== null}
        transparent
        animationType="slide"
        onRequestClose={() => setSelectedNumber(null)}
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalContent}>
            {selectedNumber && (
              <>
                <Text style={styles.modalTitle}>
                  Number {selectedNumber.number}
                </Text>

                <Image
                  source={selectedNumber.image}
                  style={styles.largeImage}
                  resizeMode="contain"
                />

                <TouchableOpacity
                  style={styles.closeButton}
                  onPress={() => setSelectedNumber(null)}
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
  numberText: {
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
