import React from 'react';

import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

export default function HomeScreen({ navigation }) {

  const categories = [
    { title: 'Alphabet', route: 'Alphabet', icon: '🔤' },
    { title: 'Numbers', route: 'Numbers', icon: '🔢' },
    { title: 'Everyday Words', route: 'Words', icon: '💬' },
    { title: 'Quiz', route: 'Quiz', icon: '📝' },
    { title: 'Favourites', route: 'Favourites', icon: '❤️' },
  ];

  return (
    <View style={styles.container}>

      <Text style={styles.welcome}>
        Welcome to SignLearn LK!
      </Text>

      <Text style={styles.description}>
        Learn Sri Lankan Sign Language
      </Text>

      {categories.map((item, index) => (

        <TouchableOpacity
          key={index}
          style={styles.button}
          onPress={() => navigation.navigate(item.route)}
        >

          <Text style={styles.buttonText}>
            {item.icon}   {item.title}
          </Text>

        </TouchableOpacity>

      ))}

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },

  welcome: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    color: '#1E293B',
  },

  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 30,
    color: '#64748B',
  },

  button: {
    backgroundColor: '#2563EB',
    padding: 18,
    borderRadius: 12,
    marginBottom: 15,
  },

  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },

});