import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Import screens
import HomeScreen from '../screens/HomeScreen';
import LearningMenu from '../screens/LearningMenu';
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

      {/* Welcome Home Page */}
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown:false,
        }}
      />

      {/* Learning Menu Page */}
      <Stack.Screen
        name="LearningMenu"
        component={LearningMenu}
        options={{
          title: 'Menu',
        }}
      />

      {/* Alphabet */}
      <Stack.Screen
        name="Alphabet"
        component={AlphabetScreen}
        options={{
          title: 'Alphabet',
        }}
      />

      {/* Numbers */}
      <Stack.Screen
        name="Numbers"
        component={NumbersScreen}
        options={{
          title: 'Numbers',
        }}
      />

      {/* Words */}
      <Stack.Screen
        name="Words"
        component={WordsScreen}
        options={{
          title: 'Day-Today Words',
        }}
      />

      {/* Quiz */}
      <Stack.Screen
        name="Quiz"
        component={QuizScreen}
        options={{
          title: 'SignLearn Quiz',
        }}
      />

    </Stack.Navigator>
  );
}