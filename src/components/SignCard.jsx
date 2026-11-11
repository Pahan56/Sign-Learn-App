import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { colors } from '../constants/theme';

export default function SignCard({ item, onPress, rightLabel }) {
  return (
    <Pressable onPress={onPress} style={({ pressed }) => [styles.card, pressed && { opacity: 0.75 }]}>
      <View style={styles.preview}>
        <Text style={styles.previewText}>{item.title}</Text>
        <Text style={styles.previewHint}>Sign image</Text>
      </View>
      <View style={styles.details}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.subtitle}>{item.subtitle || item.type}</Text>
      </View>
      {rightLabel ? <Text style={styles.right}>{rightLabel}</Text> : <Text style={styles.arrow}>›</Text>}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: { flexDirection: 'row', alignItems: 'center', backgroundColor: colors.card, borderRadius: 14, padding: 12, marginBottom: 10, borderWidth: 1, borderColor: colors.border },
  preview: { width: 58, height: 58, borderRadius: 11, backgroundColor: colors.softBlue, alignItems: 'center', justifyContent: 'center' },
  previewText: { fontSize: 21, fontWeight: '800', color: colors.primary },
  previewHint: { fontSize: 8, color: colors.muted, marginTop: 2 },
  details: { flex: 1, marginLeft: 13 },
  title: { fontSize: 16, fontWeight: '700', color: colors.text },
  subtitle: { fontSize: 12, color: colors.muted, marginTop: 4 },
  right: { color: colors.danger, fontWeight: '700', paddingHorizontal: 5 },
  arrow: { fontSize: 25, color: colors.primary, paddingHorizontal: 5 },
});
