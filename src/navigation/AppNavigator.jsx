import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Import all screens
import HomeScreen from '../screens/HomeScreen';
import AlphabetScreen from '../screens/AlphabetScreen';
import NumbersScreen from '../screens/NumbersScreen';
import WordsScreen from '../screens/WordsScreen';
import QuizScreen from '../screens/QuizScreen';

// Create Stack Navigator
const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#4A90E2',
        },
        headerTintColor: '#FFFFFF',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 20,
        },
        headerTitleAlign: 'center',
      }}
    >

      {/* Home Screen */}
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'SignLearn LK',
        }}
      />

      {/* Alphabet Screen */}
      <Stack.Screen
        name="Alphabet"
        component={AlphabetScreen}
        options={{
          title: 'Learn Alphabet',
        }}
      />

      {/* Numbers Screen */}
      <Stack.Screen
        name="Numbers"
        component={NumbersScreen}
        options={{
          title: 'Learn Numbers',
        }}
      />

      {/* Everyday Words Screen */}
      <Stack.Screen
        name="Words"
        component={WordsScreen}
        options={{
          title: 'Everyday Words',
        }}
      />

      {/* Quiz Screen */}
      <Stack.Screen
        name="Quiz"
        component={QuizScreen}
        options={{
          title: 'Sign Language Quiz',
        }}
      />

    </Stack.Navigator>
  );
}