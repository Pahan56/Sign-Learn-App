import React from 'react';

import {
  SafeAreaView,
  StyleSheet,
  Text,
  Pressable,
  View,
} from 'react-native';

import { colors } from '../constants/theme';

const sections = [
  {
    title: 'Alphabet',
    description: 'Learn A–Z',
    icon: '🔤',
    screen: 'Alphabet',
  },
  {
    title: 'Numbers',
    description: 'Learn 0–9',
    icon: '🔢',
    screen: 'Numbers',
  },
  {
    title: 'Words',
    description: 'Learn everyday words',
    icon: '💬',
    screen: 'Words',
  },
  {
    title: 'Quizzes',
    description: 'Test your knowledge',
    icon: '📝',
    screen: 'Quiz',
  },
];

export default function LearningMenu({ navigation }) {
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>

        <Text style={styles.heading}>
          Start Learning
        </Text>

        <Text style={styles.subtitle}>
          Choose a learning category to get started.
        </Text>

        <View style={styles.grid}>
          {sections.map((section) => (
            <Pressable
              key={section.screen}
              onPress={() => navigation.navigate(section.screen)}
              style={({ pressed }) => [
                styles.card,
                pressed && styles.pressed,
              ]}
            >
              <Text style={styles.icon}>
                {section.icon}
              </Text>

              <Text style={styles.cardTitle}>
                {section.title}
              </Text>

              <Text style={styles.description}>
                {section.description}
              </Text>

              <Text style={styles.arrow}>
                →
              </Text>
            </Pressable>
          ))}
        </View>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: colors.background,
  },

  container: {
    flex: 1,
    padding: 20,
  },

  heading: {
    fontSize: 27,
    fontWeight: '900',
    color: colors.text,
    marginTop: 15,
  },

  subtitle: {
    fontSize: 14,
    color: colors.muted,
    marginTop: 7,
    marginBottom: 25,
  },

  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },

  card: {
    width: '48%',
    height: 175,
    backgroundColor: colors.card,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: colors.border,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
    marginBottom: 15,
    elevation: 3,
  },

  pressed: {
    opacity: 0.7,
    transform: [{ scale: 0.96 }],
  },

  icon: {
    fontSize: 42,
    marginBottom: 12,
  },

  cardTitle: {
    fontSize: 17,
    fontWeight: '800',
    color: colors.text,
  },

  description: {
    fontSize: 12,
    color: colors.muted,
    marginTop: 6,
    textAlign: 'center',
  },

  arrow: {
    fontSize: 20,
    color: colors.primary,
    marginTop: 8,
    fontWeight: 'bold',
  },
});