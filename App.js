import React, { useEffect, useState } from 'react';
import { ActivityIndicator, View, Text } from 'react-native';
import {NavigationContainer} from "@react-navigation/native"
import AppNavigator from './src/navigation/AppNavigator';
import { initializeDatabase } from './src/database/database';
import { colors } from './src/constants/theme';

export default function App() {
  const [ready, setReady] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    initializeDatabase()
      .then(() => setReady(true))
      .catch((err) => {
        console.error('Database error:', err);
        setError(err.message || 'Database initialization failed.');
      });
  }, []);

  if (!ready) {
    return (
      <View style={{
        flex: 1,
        backgroundColor: colors.background,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        {error ? (
          <Text style={{ color: 'red', padding: 20 }}>{error}</Text>
        ) : (
          <ActivityIndicator size="large" color={colors.primary} />
        )}
      </View>
    );
  }

  return (
    <NavigationContainer>
      <AppNavigator/>
    </NavigationContainer>
  );
}