import React, { useMemo, useState } from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import SearchBar from './SearchBar';
import SignCard from './SignCard';
import SignDetailsModal from './SignDetailsModal';
import { colors } from '../constants/theme';

export default function SignListScreen({ title, subtitle, data, emptyMessage, onFavouriteChanged }) {
  const [search, setSearch] = useState('');
  const [selected, setSelected] = useState(null);

  const filtered = useMemo(() => data.filter((item) =>
    `${item.title} ${item.subtitle || ''} ${item.category || ''}`.toLowerCase().includes(search.toLowerCase())
  ), [data, search]);

  return (
    <SafeAreaView style={styles.safe}>
      <FlatList
        data={filtered}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.content}
        ListHeaderComponent={
          <View>
            <Text style={styles.heading}>{title}</Text>
            <Text style={styles.subtitle}>{subtitle}</Text>
            <SearchBar value={search} onChangeText={setSearch} placeholder={`Search ${title.toLowerCase()}...`} />
          </View>
        }
        ListEmptyComponent={<Text style={styles.empty}>{emptyMessage || 'No results found.'}</Text>}
        renderItem={({ item }) => <SignCard item={item} onPress={() => setSelected(item)} />}
      />
      <SignDetailsModal item={selected} visible={!!selected} onClose={() => setSelected(null)} onFavouriteChanged={onFavouriteChanged} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.background },
  content: { padding: 18, paddingBottom: 30 },
  heading: { fontSize: 27, fontWeight: '800', color: colors.text, marginTop: 10 },
  subtitle: { color: colors.muted, marginTop: 5, marginBottom: 18, lineHeight: 20 },
  empty: { textAlign: 'center', color: colors.muted, marginTop: 35 },
});
