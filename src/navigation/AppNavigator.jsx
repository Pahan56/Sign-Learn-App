import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../screens/HomeScreen';
import LearningMenu from '../screens/LearningMenu';
import AlphabetScreen from '../screens/AlphabetScreen';
import NumbersScreen from '../screens/NumbersScreen';
import WordsScreen from '../screens/WordsScreen';
import QuizScreen from '../screens/QuizScreen';

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

      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="LearningMenu"
        component={LearningMenu}
        options={{
          title: 'Menu',
        }}
      />

      <Stack.Screen
        name="Alphabet"
        component={AlphabetScreen}
        options={{
          title: 'Alphabet',
        }}
      />

      <Stack.Screen
        name="Numbers"
        component={NumbersScreen}
        options={{
          title: 'Numbers',
        }}
      />

      <Stack.Screen
        name="Words"
        component={WordsScreen}
        options={{
          title: 'Everyday Words',
        }}
      />

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