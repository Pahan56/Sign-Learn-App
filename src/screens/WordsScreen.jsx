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
  SafeAreaView,
} from 'react-native';

import { signData } from '../data/signData';

// Word categories
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

  // Display word cards
  const renderSign = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => setSelectedSign(item)}
      activeOpacity={0.85}
    >
      {/* Sign image */}
      <View style={styles.imageContainer}>
        <Image
          source={item.image}
          style={styles.cardImage}
          resizeMode="contain"
        />
      </View>

      {/* Word label */}
      <View style={styles.wordLabel}>
        <Text style={styles.wordText}>
          {item.word}
        </Text>
      </View>

      {/* Category name */}
      <Text style={styles.cardCategory}>
        {item.category}
      </Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>

        {/* Screen heading */}
        <View style={styles.header}>
          <Text style={styles.heading}>
            Daily Words
          </Text>

          <Text style={styles.subtitle}>
            Learn common Sign Language words
          </Text>
        </View>

        {/* Search bar */}
        <View style={styles.searchContainer}>
          <Text style={styles.searchIcon}>⌕</Text>

          <TextInput
            style={styles.searchInput}
            placeholder="Search words..."
            placeholderTextColor="#8996A8"
            value={searchText}
            onChangeText={setSearchText}
            autoCapitalize="none"
          />

          {searchText.length > 0 && (
            <TouchableOpacity
              onPress={() => setSearchText('')}
            >
              <Text style={styles.clearSearch}>✕</Text>
            </TouchableOpacity>
          )}
        </View>

        {/* Category filter */}
        <Text style={styles.sectionTitle}>
          Categories
        </Text>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.categoryScroll}
          contentContainerStyle={styles.categoryContent}
        >
          {categories.map((category) => {
            const isSelected = selectedCategory === category;

            return (
              <TouchableOpacity
                key={category}
                style={[
                  styles.categoryButton,
                  isSelected && styles.selectedCategoryButton,
                ]}
                onPress={() => setSelectedCategory(category)}
                activeOpacity={0.8}
              >
                <Text
                  allowFontScaling={false}
                  style={[
                    styles.categoryButtonText,
                    isSelected && styles.selectedCategoryText,
                  ]}
                >
                  {category}
                </Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>

        {/* Result header */}
        <View style={styles.resultHeader}>
          <Text style={styles.resultTitle}>
            Learning Words
          </Text>

          <View style={styles.resultBadge}>
            <Text style={styles.resultCount}>
              {filteredSigns.length} words
            </Text>
          </View>
        </View>

        {/* Words grid */}
        <FlatList
          data={filteredSigns}
          renderItem={renderSign}
          keyExtractor={(item) => String(item.id)}
          numColumns={2}
          contentContainerStyle={styles.list}
          columnWrapperStyle={styles.columnWrapper}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
          ListEmptyComponent={
            <View style={styles.emptyContainer}>
              <Text style={styles.emptyEmoji}>🔍</Text>

              <Text style={styles.emptyTitle}>
                No words found
              </Text>

              <Text style={styles.emptyText}>
                Try another search or select a different category.
              </Text>
            </View>
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
                  <View style={styles.modalTop}>
                    <Text style={styles.modalTitle}>
                      {selectedSign.word}
                    </Text>

                    <Text style={styles.modalCategory}>
                      {selectedSign.category}
                    </Text>
                  </View>

                  <View style={styles.largeImageContainer}>
                    <Image
                      source={selectedSign.image}
                      style={styles.largeImage}
                      resizeMode="contain"
                    />
                  </View>

                  <TouchableOpacity
                    style={styles.closeButton}
                    onPress={() => setSelectedSign(null)}
                    activeOpacity={0.8}
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
    </SafeAreaView>
  );
}

// Styles
const styles = StyleSheet.create({

  // Main screen
  safe: {
    flex: 1,
    backgroundColor: '#F4F7FC',
  },

  container: {
    flex: 1,
    backgroundColor: '#F4F7FC',
    paddingHorizontal: 14,
    paddingTop: 12,
  },

  // Header
  header: {
    alignItems: 'center',
    marginBottom: 17,
  },

  heading: {
    fontSize: 26,
    fontWeight: '900',
    color: '#315C9B',
    textAlign: 'center',
  },

  subtitle: {
    fontSize: 13,
    color: '#52647A',
    textAlign: 'center',
    marginTop: 6,
  },

  // Search bar
  searchContainer: {
    minHeight: 50,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderWidth: 1.5,
    borderColor: '#C9D8EB',
    borderRadius: 13,
    paddingHorizontal: 13,
    marginBottom: 18,
  },

  searchIcon: {
    fontSize: 25,
    color: '#315C9B',
    marginRight: 9,
  },

  searchInput: {
    flex: 1,
    fontSize: 15,
    color: '#263445',
    paddingVertical: 10,
  },

  clearSearch: {
    fontSize: 17,
    color: '#315C9B',
    padding: 5,
  },

  // Category heading
  sectionTitle: {
    fontSize: 17,
    fontWeight: '800',
    color: '#263445',
    marginBottom: 12,
  },

  // Category scroll
  categoryScroll: {
    height: 64,
    flexGrow: 0,
    overflow:'visible',
  },

  categoryContent: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal:3,
    paddingVertical:5,
  },

  // Category buttons
  categoryButton: {
    minHeight: 48,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginRight: 10,
    borderRadius: 24,
    backgroundColor: '#FFFFFF',
    borderWidth: 2,
    borderColor: '#315C9B',
    justifyContent: 'center',
    alignItems: 'center',
    flexShrink: 0,
  },

  selectedCategoryButton: {
    backgroundColor: '#315C9B',
    borderWidth: 2,
    borderColor: '#315C9B',
  },

  categoryButtonText: {
    fontSize: 15,
    lineHeight: 21,
    fontWeight: '700',
    color: '#244B80',
  },

  selectedCategoryText: {
    color: '#FFFFFF',
  },

  // Result header
  resultHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 17,
    marginBottom: 9,
  },

  resultTitle: {
    fontSize: 16,
    fontWeight: '800',
    color: '#263445',
  },

  resultBadge: {
    backgroundColor: '#E5EDF9',
    borderRadius: 15,
    paddingHorizontal: 11,
    paddingVertical: 5,
  },

  resultCount: {
    fontSize: 12,
    fontWeight: '700',
    color: '#315C9B',
  },

  // Word list
  list: {
    paddingBottom: 25,
  },

  columnWrapper: {
    justifyContent: 'space-between',
  },

  // Word card
  card: {
    flex: 1,
    marginHorizontal: 5,
    marginVertical: 6,
    minHeight: 195,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    borderWidth: 1.2,
    borderColor: '#D7E3F3',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,

    elevation: 2,
    shadowColor: '#315C9B',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.08,
    shadowRadius: 5,
  },

  imageContainer: {
    width: '100%',
    height: 125,
    alignItems: 'center',
    justifyContent: 'center',
  },

  cardImage: {
    width: '100%',
    height: '100%',
  },

  // Word label
  wordLabel: {
    alignSelf: 'center',
    maxWidth: '100%',
    paddingHorizontal: 12,
    paddingVertical: 6,
    backgroundColor: '#EDF3FC',
    borderWidth: 1,
    borderColor: '#C9D8EB',
    borderRadius: 9,
    marginTop: 7,
  },

  wordText: {
    fontSize: 15,
    fontWeight: '800',
    color: '#315C9B',
    textAlign: 'center',
    flexShrink: 1,
  },

  cardCategory: {
    fontSize: 11,
    fontWeight: '600',
    color: '#52647A',
    marginTop: 6,
    textAlign: 'center',
  },

  // Empty results
  emptyContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 25,
    paddingTop: 45,
  },

  emptyEmoji: {
    fontSize: 40,
    marginBottom: 10,
  },

  emptyTitle: {
    fontSize: 18,
    fontWeight: '800',
    color: '#315C9B',
  },

  emptyText: {
    fontSize: 13,
    color: '#52647A',
    textAlign: 'center',
    marginTop: 8,
    lineHeight: 20,
  },

  // Preview modal
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(20, 35, 55, 0.7)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },

  modalContent: {
    width: '100%',
    maxWidth: 400,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#D7E3F3',
  },

  modalTop: {
    alignItems: 'center',
    marginBottom: 15,
  },

  modalTitle: {
    fontSize: 25,
    fontWeight: '900',
    color: '#315C9B',
    textAlign: 'center',
  },

  modalCategory: {
    fontSize: 13,
    color: '#52647A',
    marginTop: 5,
  },

  largeImageContainer: {
    width: '100%',
    height: 270,
    backgroundColor: '#F4F7FC',
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#D7E3F3',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },

  largeImage: {
    width: '100%',
    height: '100%',
  },

  closeButton: {
    width: '75%',
    backgroundColor: '#315C9B',
    paddingVertical: 13,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 18,
  },

  closeText: {
    color: '#FFFFFF',
    fontWeight: '800',
    fontSize: 15,
  },

});