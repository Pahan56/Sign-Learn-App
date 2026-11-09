import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, Pressable, View } from 'react-native';
import { colors } from '../constants/theme';

const sections = [
  { title: 'Alphabet', description: 'Learn A–Z', screen: 'Alphabet', icon: '🔤' },
  { title: 'Numbers', description: 'Learn 0–9', screen: 'Numbers', icon: '🔢' },
  { title: 'Everyday Words', description: 'Useful daily vocabulary', screen: 'Words', icon: '💬' },
  { title: 'Quiz', description: 'Test what you have learned', screen: 'Quiz', icon: '📝' },
  { title: 'Favourites', description: 'Your saved signs', screen: 'Favourites', icon: '⭐' },
];

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.hero}>
          <Text style={styles.brand}>SignLearn LK</Text>
          <Text style={styles.tagline}>Learn. Practise. Communicate.</Text>
          <Text style={styles.intro}>A simple offline learning companion for Sri Lankan Sign Language.</Text>
        </View>
        <Text style={styles.sectionTitle}>Start learning</Text>
        {sections.map((section) => (
          <Pressable key={section.screen} onPress={() => navigation.navigate(section.screen)} style={({ pressed }) => [styles.card, pressed && { opacity: 0.75 }]}>
            <Text style={styles.icon}>{section.icon}</Text>
            <View style={{ flex: 1 }}>
              <Text style={styles.cardTitle}>{section.title}</Text>
              <Text style={styles.cardDescription}>{section.description}</Text>
            </View>
            <Text style={styles.arrow}>›</Text>
          </Pressable>
        ))}
        <Text style={styles.note}>Learning note: use verified Sri Lankan Sign Language materials for all sign images and descriptions.</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.background },
  content: { padding: 18, paddingBottom: 30 },
  hero: { backgroundColor: colors.primary, borderRadius: 22, padding: 23, marginTop: 8, marginBottom: 25 },
  brand: { color: '#fff', fontSize: 30, fontWeight: '900' },
  tagline: { color: '#DDEBFF', fontSize: 15, fontWeight: '700', marginTop: 6 },
  intro: { color: '#fff', lineHeight: 21, marginTop: 18 },
  sectionTitle: { fontSize: 21, fontWeight: '800', color: colors.text, marginBottom: 13 },
  card: { flexDirection: 'row', alignItems: 'center', backgroundColor: colors.card, borderRadius: 15, padding: 17, marginBottom: 11, borderWidth: 1, borderColor: colors.border },
  icon: { fontSize: 27, marginRight: 15 },
  cardTitle: { color: colors.text, fontSize: 16, fontWeight: '800' },
  cardDescription: { color: colors.muted, fontSize: 12, marginTop: 4 },
  arrow: { color: colors.primary, fontSize: 27 },
  note: { color: colors.muted, fontSize: 11, lineHeight: 17, marginTop: 12 },
});
