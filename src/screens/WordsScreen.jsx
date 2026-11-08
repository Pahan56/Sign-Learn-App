import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function WordsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Everyday Words</Text>
      <Text>Learn common Sri Lankan sign language words</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});