import React, { useMemo, useState } from 'react';

import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Modal,
  ScrollView,
} from 'react-native';

import { signData } from '../data/signData';

const categories = [
  'All',
  'Greetings',
  'Family',
  'Common Needs',
  'Feelings',
];

export default function WordsScreen() {
  const [searchText, setSearchText] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedSign, setSelectedSign] = useState(null);

  // Search and category filtering
  const filteredSigns = useMemo(() => {
    return signData.filter((item) => {
      const matchesSearch = item.word
        .toLowerCase()
        .includes(searchText.trim().toLowerCase());

      const matchesCategory =
        selectedCategory === 'All' ||
        item.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchText, selectedCategory]);

  // Display each word card
  const renderSign = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => setSelectedSign(item)}
      activeOpacity={0.8}
    >
      <Image
        source={item.image}
        style={styles.cardImage}
        resizeMode="contain"
      />

      <Text style={styles.wordText}>
        {item.word}
      </Text>

      <Text style={styles.categoryText}>
        {item.category}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>

      <Text style={styles.heading}>
        Everyday Words
      </Text>

      <Text style={styles.subtitle}>
        Learn common sign language words
      </Text>

      {/* Search bar */}
      <TextInput
        style={styles.searchInput}
        placeholder="Search words..."
        value={searchText}
        onChangeText={setSearchText}
        autoCapitalize="none"
      />

      {/* Category filter */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.categoryScroll}
      >
        {categories.map((category) => (
          <TouchableOpacity
            key={category}
            style={[
              styles.categoryButton,
              selectedCategory === category &&
                styles.selectedCategoryButton,
            ]}
            onPress={() => setSelectedCategory(category)}
          >
            <Text
              style={[
                styles.categoryButtonText,
                selectedCategory === category &&
                  styles.selectedCategoryText,
              ]}
            >
              {category}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <Text style={styles.resultCount}>
        {filteredSigns.length} words found
      </Text>

      {/* Words grid */}
      <FlatList
        data={filteredSigns}
        renderItem={renderSign}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.list}
        ListEmptyComponent={
          <Text style={styles.emptyText}>
            No matching words found.
          </Text>
        }
      />

      {/* Selected word preview */}
      <Modal
        visible={selectedSign !== null}
        transparent
        animationType="fade"
        onRequestClose={() => setSelectedSign(null)}
      >
        <View style={styles.modalBackground}>

          <View style={styles.modalContent}>

            {selectedSign && (
              <>
                <Text style={styles.modalTitle}>
                  {selectedSign.word}
                </Text>

                <Text style={styles.modalCategory}>
                  {selectedSign.category}
                </Text>

                <Image
                  source={selectedSign.image}
                  style={styles.largeImage}
                  resizeMode="contain"
                />

                <TouchableOpacity
                  style={styles.closeButton}
                  onPress={() => setSelectedSign(null)}
                >
                  <Text style={styles.closeText}>
                    Close
                  </Text>
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
    paddingHorizontal: 14,
    paddingTop: 12,
  },

  heading: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#315C9B',
    textAlign: 'center',
  },

  subtitle: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginTop: 5,
    marginBottom: 12,
  },

  searchInput: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#D7DFEC',
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 11,
    fontSize: 16,
  },

  categoryScroll: {
    maxHeight: 48,
    marginTop: 12,
  },

  categoryButton: {
    paddingHorizontal: 13,
    paddingVertical: 9,
    borderRadius: 20,
    backgroundColor: '#E4EAF4',
    marginRight: 8,
  },

  selectedCategoryButton: {
    backgroundColor: '#315C9B',
  },

  categoryButtonText: {
    color: '#315C9B',
    fontSize: 13,
    fontWeight: '600',
  },

  selectedCategoryText: {
    color: '#FFFFFF',
  },

  resultCount: {
    color: '#666',
    fontSize: 13,
    marginTop: 9,
    marginBottom: 5,
  },

  list: {
    paddingBottom: 20,
  },

  card: {
    flex: 1,
    margin: 6,
    padding: 10,
    minHeight: 175,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
  },

  cardImage: {
    width: '100%',
    height: 115,
  },

  wordText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#315C9B',
    marginTop: 7,
    textAlign: 'center',
  },

  categoryText: {
    fontSize: 11,
    color: '#777',
    marginTop: 3,
  },

  emptyText: {
    textAlign: 'center',
    color: '#666',
    marginTop: 35,
    fontSize: 16,
  },

  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.65)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },

  modalContent: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    alignItems: 'center',
  },

  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#315C9B',
  },

  modalCategory: {
    color: '#777',
    marginTop: 4,
    marginBottom: 12,
  },

  largeImage: {
    width: 250,
    height: 260,
  },

  closeButton: {
    backgroundColor: '#315C9B',
    paddingHorizontal: 38,
    paddingVertical: 11,
    borderRadius: 9,
    marginTop: 15,
  },

  closeText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
  },

});