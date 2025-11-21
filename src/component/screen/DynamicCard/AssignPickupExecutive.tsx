// CHANGED: Converted to React Native
import React, { useState } from 'react';
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from 'react-native'; // CHANGED
import { X, Search, Plus } from 'lucide-react-native'; // CHANGED

interface Props {
  onClose: () => void;
  visible: boolean; // CHANGED
}

export default function AssignPickupExecutive({ onClose, visible }: Props) {
  // CHANGED
  const [searchDriver, setSearchDriver] = useState(''); // CHANGED

  return (
    <Modal visible={visible} transparent animationType="fade">
      {' '}
      {/* CHANGED */}
      <View style={styles.overlay}>
        <View style={styles.modalContainer}>
          {/* Header */}
          <View style={styles.headerRow}>
            <Text style={styles.title}>Assign Pickup Executive</Text>
            <TouchableOpacity onPress={onClose}>
              <X size={28} color="#555" />
            </TouchableOpacity>
          </View>

          {/* Search Driver */}
          <View style={styles.sectionBox}>
            <Text style={styles.sectionTitle}>Search existing Pickup Executive</Text>
            <View style={styles.inputWrapper}>
              <Search size={20} color="#0891b2" style={styles.searchIcon} />
              <TextInput
                style={styles.input}
                placeholder="Type to search..."
                value={searchDriver}
                onChangeText={setSearchDriver}
              />
            </View>
          </View>

          {/* Add Driver */}
          <TouchableOpacity style={styles.addButton}>
            <Plus size={24} color="#0891b2" style={{ marginTop: 4 }} />
            <View>
              <Text style={styles.addTitle}>Add new driver</Text>
              <Text style={styles.addSubtitle}>Add driver name & phone no</Text>
            </View>
          </TouchableOpacity>

          {/* No Results */}
          <Text style={styles.noResult}>No results found.</Text>

          {/* Assign Button */}
          <TouchableOpacity style={styles.assignBtn}>
            <Text style={styles.assignText}>Assign</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1, // CHANGED
    backgroundColor: 'rgba(0,0,0,0.5)', // CHANGED
    justifyContent: 'center', // CHANGED
    alignItems: 'center', // CHANGED

  },
  modalContainer: {
    backgroundColor: 'white',
    borderRadius: 24,
    padding: 24,
    width: '100%',
    maxWidth: 400,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: '#111',
  },
  sectionBox: {
    backgroundColor: '#f5f5f5',
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
  },
  sectionTitle: {
    color: '#555',
    fontWeight: '600',
    marginBottom: 10,
  },
  inputWrapper: {
    position: 'relative',
    justifyContent: 'center',
  },
  searchIcon: {
    position: 'absolute',
    left: 12,
    zIndex: 10,
  },
  input: {
    height: 48,
    paddingLeft: 44,
    borderRadius: 8,
    borderColor: '#ccc',
    borderWidth: 1,
  },
  addButton: {
    flexDirection: 'row',
    gap: 12,
    backgroundColor: '#f6f6f6',
    padding: 16,
    borderRadius: 16,
    marginBottom: 16,
  },
  addTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#222',
  },
  addSubtitle: {
    color: '#888',
  },
  noResult: {
    textAlign: 'center',
    color: '#777',
    marginBottom: 18,
  },
  assignBtn: {
    backgroundColor: '#0891b2',
    paddingVertical: 14,
    borderRadius: 50,
  },
  assignText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 18,
    fontWeight: '700',
  },
});
