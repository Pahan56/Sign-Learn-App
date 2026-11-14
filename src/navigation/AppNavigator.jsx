import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Import Screens
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
    <NavigationContainer>

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
            headerShown: false,
          }}
        />

        {/* Learning Menu Screen */}
        <Stack.Screen
          name="LearningMenu"
          component={LearningMenu}
          options={{
            title: 'Menu',
          }}
        />

        {/* Alphabet Screen */}
        <Stack.Screen
          name="Alphabet"
          component={AlphabetScreen}
          options={{
            title: 'Alphabet',
          }}
        />

        {/* Numbers Screen */}
        <Stack.Screen
          name="Numbers"
          component={NumbersScreen}
          options={{
            title: 'Numbers',
          }}
        />

        {/* Words Screen */}
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
            title: 'SignLearn Quiz',
          }}
        />

      </Stack.Navigator>

    </NavigationContainer>
  );
}
