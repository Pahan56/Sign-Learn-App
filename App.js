import React, { useEffect, useState } from 'react';
import { ActivityIndicator, View } from 'react-native';
import AppNavigator from './src/navigation/AppNavigator';
import { initializeDatabase } from './src/database/database';
import { colors } from './src/constants/theme';

export default function App() {
  const [ready, setReady] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    initializeDatabase()
      .then(() => setReady(true))
      .catch((err) => setError(err.message || 'Could not initialize local database.'));
  }, []);

  if (!ready) {
    return (
      <View style={{ flex: 1, backgroundColor: colors.background, alignItems: 'center', justifyContent: 'center' }}>
        {error ? null : <ActivityIndicator size="large" color={colors.primary} />}
      </View>
    );
  }

  return <AppNavigator />;
}
