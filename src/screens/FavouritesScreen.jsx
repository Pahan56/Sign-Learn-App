import React, { useCallback, useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { Alert, FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import SignCard from '../components/SignCard';
import SignDetailsModal from '../components/SignDetailsModal';
import { getFavourites, removeFavourite } from '../database/database';
import { colors } from '../constants/theme';

export default function FavouritesScreen() {
  const [items, setItems] = useState([]);
  const [selected, setSelected] = useState(null);

  const load = useCallback(async () => {
    try { setItems(await getFavourites()); }
    catch (e) { Alert.alert('Error', 'Could not load favourites.'); }
  }, []);

  useFocusEffect(useCallback(() => { load(); }, [load]));

  async function remove(item) {
    await removeFavourite(item.id);
    setSelected(null);
    load();
  }

  return (
    <SafeAreaView style={styles.safe}>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.content}
        ListHeaderComponent={<View><Text style={styles.heading}>Favourites</Text><Text style={styles.subtitle}>Signs you have saved for quick revision.</Text></View>}
        ListEmptyComponent={<Text style={styles.empty}>You have not saved any favourites yet. Open a sign and tap “Add to Favourites”.</Text>}
        renderItem={({ item }) => <SignCard item={item} onPress={() => setSelected(item)} rightLabel="♥" />}
      />
      <SignDetailsModal item={selected} visible={!!selected} onClose={() => setSelected(null)} onFavouriteChanged={load} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.background },
  content: { padding: 18, paddingBottom: 30 },
  heading: { fontSize: 27, fontWeight: '800', color: colors.text, marginTop: 10 },
  subtitle: { color: colors.muted, marginTop: 5, marginBottom: 18 },
  empty: { color: colors.muted, lineHeight: 22, textAlign: 'center', marginTop: 35, paddingHorizontal: 15 },
});
