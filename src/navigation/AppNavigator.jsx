import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import AlphabetScreen from '../screens/AlphabetScreen';
import NumbersScreen from '../screens/NumbersScreen';
import EverydayWordsScreen from '../screens/EverydayWordsScreen';
import QuizScreen from '../screens/QuizScreen';
import FavouritesScreen from '../screens/FavouritesScreen';
import { colors } from '../constants/theme';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: { backgroundColor: colors.primary },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: '800' },
          contentStyle: { backgroundColor: colors.background },
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'SignLearn LK' }} />
        <Stack.Screen name="Alphabet" component={AlphabetScreen} />
        <Stack.Screen name="Numbers" component={NumbersScreen} />
        <Stack.Screen name="Words" component={EverydayWordsScreen} options={{ title: 'Everyday Words' }} />
        <Stack.Screen name="Quiz" component={QuizScreen} />
        <Stack.Screen name="Favourites" component={FavouritesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
