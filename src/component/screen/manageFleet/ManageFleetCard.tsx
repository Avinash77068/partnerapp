import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
  SafeAreaView,
  StyleSheet,
} from 'react-native';

import { Search, ChevronRight } from 'lucide-react-native';
import Navbar from '../../common/Navbar';
import { useNavigation } from '@react-navigation/native';

export default function ManageFleetCard() {
  const [searchQuery, setSearchQuery] = useState('');
  const navigation = useNavigation();
  const fleet = [
    { id: 1, vendorId: 'vendor1P2P', model: 'Maruti Swift', icon: '🚗' },
    { id: 2, vendorId: 'VendorAspire1', model: 'Ford Aspire', icon: '🚙' },
    { id: 3, vendorId: 'VendorAspireReg2', model: 'Ford Aspire', icon: '🚙' },
    { id: 4, vendorId: 'Vendor1MT', model: 'Hyundai Verna MT', icon: '🚗' },
    { id: 5, vendorId: 'XcentVendorP1', model: 'Hyundai Xcent', icon: '🚗' },
  ];

  const filteredFleet = fleet.filter(
    car =>
      car.vendorId.toLowerCase().includes(searchQuery.toLowerCase()) ||
      car.model.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <SafeAreaView style={styles.container}>
      <Navbar title="Manage Fleet" onBackPress={() => navigation.goBack()} />
      <ScrollView>
        <View style={styles.card}>
          {/* Title */}
          <Text style={styles.title}>Your Fleet</Text>
          <Text style={styles.subtitle}>
            Select a car to manage availability
          </Text>

          {/* Search Bar */}
          <View style={styles.searchWrapper}>
            <Search size={20} color="#9ca3af" style={styles.searchIcon} />
            <TextInput
              placeholder="Search by car model or Reg. No."
              placeholderTextColor="#9ca3af"
              style={styles.searchInput}
              value={searchQuery}
              onChangeText={setSearchQuery}
            />
          </View>

          {/* Fleet List */}
          {filteredFleet.map(car => (
            <TouchableOpacity key={car.id} style={styles.carItem}>
              <View style={styles.carImage}>
                <Text style={{ fontSize: 32 }}>{car.icon}</Text>
              </View>

              <View style={styles.carDetails}>
                <Text style={styles.carVendor}>{car.vendorId}</Text>
                <Text style={styles.carModel}>{car.model}</Text>
              </View>

              <ChevronRight size={24} color="#9ca3af" />
            </TouchableOpacity>
          ))}

          {/* No Results Message */}
          {filteredFleet.length === 0 && (
            <View style={styles.noResults}>
              <Text style={styles.noResultsText}>
                No cars found matching your search
              </Text>
            </View>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  card: {
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  title: { fontSize: 22, fontWeight: '700', color: '#111827', marginBottom: 6 },
  subtitle: { fontSize: 14, color: '#6b7280', marginBottom: 20 },

  searchWrapper: {
    position: 'relative',
    marginBottom: 20,
  },
  searchIcon: { position: 'absolute', top: 14, left: 14 },
  searchInput: {
    backgroundColor: '#f3f4f6',
    paddingVertical: 12,
    paddingLeft: 45,
    paddingRight: 10,
    borderRadius: 30,
    fontSize: 15,
    color: '#111827',
  },

  carItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
    padding: 14,
    borderWidth: 1,
    borderColor: '#e5e7eb',
    borderRadius: 18,
    marginBottom: 12,
  },

  carImage: {
    width: 75,
    height: 60,
    backgroundColor: '#e5e7eb',
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },

  carDetails: { flex: 1 },
  carVendor: { fontSize: 16, fontWeight: '700', color: '#111827' },
  carModel: { fontSize: 14, color: '#6b7280' },

  noResults: { paddingVertical: 30 },
  noResultsText: { textAlign: 'center', color: '#6b7280' },
});
