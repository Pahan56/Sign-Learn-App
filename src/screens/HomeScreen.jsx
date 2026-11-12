import React from 'react';

import {
  SafeAreaView,
  StyleSheet,
  Text,
  Pressable,
  View,
  Image,
  StatusBar,
} from 'react-native';

import { colors } from '../constants/theme';

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar
        backgroundColor="#FFFFFF"
        barStyle="dark-content"
      />

      <View style={styles.container}>

        {/* Top Image - 50% of screen */}
        <View style={styles.imageContainer}>
          <Image
            source={require('../../assets/girl.jpg')}
            style={styles.heroImage}
            resizeMode="cover"
          />
        </View>

        {/* Welcome Content */}
        <View style={styles.content}>

          <Text style={styles.brand}>
            SignLearn
          </Text>

          <Text style={styles.welcome}>
            Welcome to SignLearn!
          </Text>

          <Text style={styles.description}>
            Learn. Sign. Connect.
          </Text>

          <Text style={styles.subtitle}>
            
          </Text>

          {/* Start Learning Button */}
          <Pressable
            onPress={() => navigation.navigate('LearningMenu')}
            style={({ pressed }) => [
              styles.button,
              pressed && styles.buttonPressed,
            ]}
          >
            <Text style={styles.buttonText}>
              START LEARNING
            </Text>

            <Text style={styles.arrow}>
              →
            </Text>
          </Pressable>

        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  safe: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  imageContainer: {
    height: '50%',
    width: '100%',
    overflow: 'hidden',
    backgroundColor: '#D76B2D',
  },

  heroImage: {
    width: '100%',
    height: '100%',
  },

  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 25,
    paddingVertical: 15,
  },

  brand: {
    fontSize: 36,
    fontWeight: '900',
    color: colors.primary,
    letterSpacing: 1,
    marginBottom: 12,
  },

  welcome: {
    fontSize: 21,
    fontWeight: '800',
    color: '#263445',
    textAlign: 'center',
  },

  description: {
    fontSize: 17,
    fontWeight: '800',
    color: colors.secondary,
    marginTop: 10,
  },

  subtitle: {
    fontSize: 14,
    color: colors.muted,
    textAlign: 'center',
    lineHeight: 22,
    marginTop: 10,
    marginBottom: 22,
  },

  button: {
    width: '80%',
    minHeight: 55,
    backgroundColor: colors.primary,
    borderRadius: 16,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },

  buttonPressed: {
    opacity: 0.8,
    transform: [{ scale: 0.97 }],
  },

  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '900',
    letterSpacing: 1,
  },

  arrow: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: 'bold',
    marginLeft: 12,
  },

});