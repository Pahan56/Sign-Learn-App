import React, { useEffect, useState } from 'react';
import { Modal, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { addFavourite, isFavourite, removeFavourite } from '../database/database';
import { colors } from '../constants/theme';

export default function SignDetailsModal({ item, visible, onClose, onFavouriteChanged }) {
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    let active = true;
    if (item && visible) isFavourite(item.id).then((value) => active && setSaved(value));
    return () => { active = false; };
  }, [item, visible]);

  if (!item) return null;

  async function toggleFavourite() {
    if (saved) await removeFavourite(item.id);
    else await addFavourite(item);
    setSaved(!saved);
    onFavouriteChanged?.();
  }

  return (
    <Modal visible={visible} transparent animationType="slide" onRequestClose={onClose}>
      <View style={styles.overlay}>
        <View style={styles.sheet}>
          <ScrollView>
            <Pressable onPress={onClose} style={styles.close}><Text style={styles.closeText}>✕</Text></Pressable>
            <View style={styles.imagePlaceholder}>
              <Text style={styles.bigText}>{item.title}</Text>
              <Text style={styles.hint}>Add a verified local sign image for this item</Text>
            </View>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.subtitle}>{item.subtitle}</Text>
            <Text style={styles.description}>{item.description}</Text>
            <Pressable onPress={toggleFavourite} style={styles.button}>
              <Text style={styles.buttonText}>{saved ? 'Remove from Favourites' : 'Add to Favourites'}</Text>
            </Pressable>
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: { flex: 1, justifyContent: 'flex-end', backgroundColor: '#0008' },
  sheet: { maxHeight: '85%', backgroundColor: colors.card, borderTopLeftRadius: 24, borderTopRightRadius: 24, padding: 22 },
  close: { alignSelf: 'flex-end', padding: 6 },
  closeText: { fontSize: 20, color: colors.muted },
  imagePlaceholder: { height: 180, borderRadius: 18, backgroundColor: colors.softBlue, alignItems: 'center', justifyContent: 'center', padding: 15 },
  bigText: { fontSize: 64, fontWeight: '800', color: colors.primary },
  hint: { color: colors.muted, fontSize: 12, textAlign: 'center', marginTop: 6 },
  title: { fontSize: 25, fontWeight: '800', color: colors.text, marginTop: 18 },
  subtitle: { color: colors.secondary, fontWeight: '700', marginTop: 5 },
  description: { color: colors.muted, lineHeight: 22, marginTop: 12 },
  button: { backgroundColor: colors.primary, padding: 15, borderRadius: 12, alignItems: 'center', marginTop: 22, marginBottom: 15 },
  buttonText: { color: '#fff', fontWeight: '700' },
});
