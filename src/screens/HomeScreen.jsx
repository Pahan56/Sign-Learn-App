import React from 'react';

import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  useWindowDimensions,
} from 'react-native';

export default function HomeScreen({ navigation }) {
  const { height } = useWindowDimensions();

  return (
    <SafeAreaView style={styles.container}>

      {/* Hero Image */}
      <Image
        source={require('../../assets/girl.jpg')}
        style={[styles.heroImage, { height: height * 0.5 }]}
        resizeMode="cover"
      />

      {/* Welcome Content */}
      <View style={styles.content}>

        <Text style={styles.title}>
          SignLearn
        </Text>

        <Text style={styles.welcome}>
          Welcome to SignLearn!
        </Text>

        <Text style={styles.subtitle}>
          Learn. Sign. Connect.
        </Text>

        <Text style={styles.description}>
          Discover Sign Language
          through interactive learning.
        </Text>

        {/* Start Learning Button */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('LearningMenu')}
        >
          <Text style={styles.buttonText}>
            START LEARNING
          </Text>
        </TouchableOpacity>

      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  heroImage: {
    width: '100%',
  },

  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 25,
  },

  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#315C9B',
    marginBottom: 8,
  },

  welcome: {
    fontSize: 21,
    fontWeight: 'bold',
    color: '#243746',
    marginBottom: 10,
  },

  subtitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#25A99A',
    marginBottom: 12,
  },

  description: {
    fontSize: 15,
    color: '#6B7C93',
    textAlign: 'center',
    lineHeight: 23,
    marginBottom: 25,
  },

  button: {
    backgroundColor: '#315C9B',
    paddingVertical: 16,
    paddingHorizontal: 40,
    borderRadius: 30,
    elevation: 4,
  },

  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
});