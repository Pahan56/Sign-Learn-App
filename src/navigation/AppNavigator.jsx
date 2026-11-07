import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../screens/HomeScreen';
import AlphabetScreen from '../screens/AlphabetScreen';
import NumbersScreen from '../screens/NumbersScreen';
import WordsScreen from '../screens/WordsScreen';
import QuizScreen from '../screens/QuizScreen';
import FavouritesScreen from '../screens/FavouritesScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#2563EB',
        },
        headerTintColor: '#FFFFFF',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        contentStyle: {
          backgroundColor: '#F8FAFC',
        },
      }}
    >

      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: 'SignLearn LK' }}
      />

      <Stack.Screen
        name="Alphabet"
        component={AlphabetScreen}
        options={{ title: 'Learn Alphabet' }}
      />

      <Stack.Screen
        name="Numbers"
        component={NumbersScreen}
        options={{ title: 'Learn Numbers' }}
      />

      <Stack.Screen
        name="Words"
        component={WordsScreen}
        options={{ title: 'Everyday Words' }}
      />

      <Stack.Screen
        name="Quiz"
        component={QuizScreen}
        options={{ title: 'Practice Quiz' }}
      />

      <Stack.Screen
        name="Favourites"
        component={FavouritesScreen}
        options={{ title: 'My Favourites' }}
      />

    </Stack.Navigator>
  );
}