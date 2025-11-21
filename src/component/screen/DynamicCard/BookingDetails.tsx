import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';
import {
  ArrowLeft,
  Fuel,
  Settings,
  CheckCircle,
  Clock,
  MapPin,
  IndianRupee,
  User,
  Phone,
  ChevronDown,
} from 'lucide-react-native';

// CHANGED: Import modal component
import AssignPickupExecutive from './AssignPickupExecutive';
import Navbar from '../../common/Navbar';
import { useNavigation } from '@react-navigation/native';

export default function BookingDetailsScreen  () {
  const navigation = useNavigation();
  const [showAssignModal, setShowAssignModal] = useState(false); // CHANGED

  const bookingDetails = {
    id: '90029595',
    status: 'Ongoing',
    vehicle: 'Ford Aspire I VendorAspire1',
    fuelType: 'Diesel',
    transmission: 'Manual',
    pickupDateTime: '14th Nov 7:30 PM | 16th Nov 2:30 PM',
    duration: '1 Day, 19 Hours',
    deliveryLocation: 'Bengaluru, Karnataka, India',
    pickupLocation: 'Bengaluru, Karnataka, India',
    bookingAmount: 2929,
    customerName: 'keshav',
  };

  return (
    <View style={styles.container}>
      <Navbar
        title="Ongoing Bookings"
        onBackPress={() => navigation.goBack()}
      />
      <ScrollView contentContainerStyle={{ padding: 16 }}>
        <View style={styles.card}>
          <View style={styles.bookingRow}>
            <View>
              <Text style={styles.bookingId}>
                Booking ID: {bookingDetails.id}
              </Text>
              <Text style={styles.vehicle}>{bookingDetails.vehicle}</Text>
            </View>

            <View style={styles.statusTag}>
              <Text style={styles.statusText}>{bookingDetails.status}</Text>
            </View>
          </View>

          {/* Specs */}
          <View style={styles.specsRow}>
            <View style={styles.specItem}>
              <Fuel size={20} color="#7c3aed" />
              <Text style={styles.specText}>{bookingDetails.fuelType}</Text>
            </View>
            <View style={styles.specItem}>
              <Settings size={20} color="#7c3aed" />
              <Text style={styles.specText}>{bookingDetails.transmission}</Text>
            </View>
          </View>

          {/* Details */}
          <View style={{ gap: 12 }}>
            <View style={styles.detailRow}>
              <CheckCircle size={20} color="#7c3aed" />
              <Text style={styles.detailText}>
                {bookingDetails.pickupDateTime}
              </Text>
            </View>

            <View style={styles.detailRow}>
              <Clock size={20} color="#7c3aed" />
              <Text style={styles.detailText}>{bookingDetails.duration}</Text>
            </View>

            <View style={styles.detailRow}>
              <MapPin size={20} color="#7c3aed" />
              <Text style={styles.detailText}>
                Delivery: {bookingDetails.deliveryLocation}
              </Text>
            </View>

            <View style={styles.detailRow}>
              <MapPin size={20} color="#7c3aed" />
              <Text style={styles.detailText}>
                Pickup: {bookingDetails.pickupLocation}
              </Text>
            </View>

            <View style={styles.detailRow}>
              <IndianRupee size={20} color="#7c3aed" />
              <Text style={styles.detailText}>
                Booking Amount:{' '}
                <Text style={{ fontWeight: '700' }}>
                  Rs {bookingDetails.bookingAmount}
                </Text>
              </Text>
            </View>

            <View style={[styles.detailRow, { alignItems: 'center' }]}>
              <User size={20} color="#7c3aed" />
              <Text style={[styles.detailText, { flex: 1 }]}>
                {bookingDetails.customerName}
              </Text>
              <TouchableOpacity style={styles.phoneBtn}>
                <Phone size={18} color="white" />
              </TouchableOpacity>
            </View>
          </View>

          <TouchableOpacity style={styles.viewBtn}>
            <Text style={styles.viewBtnText}>View Details</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f3f4f6' },
  header: {
    backgroundColor: '#0e7490',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
    padding: 16,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: 'white',
  },
  card: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 24,
    borderWidth: 3,
    borderColor: '#06b6d4',
  },
  bookingRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  bookingId: { color: '#555', fontSize: 14 },
  vehicle: { fontSize: 20, fontWeight: '800', color: '#111' },
  statusTag: {
    borderWidth: 2,
    borderColor: '#ccc',
    borderRadius: 20,
    paddingHorizontal: 14,
    paddingVertical: 6,
  },
  statusText: { fontWeight: '600', fontSize: 13 },
  specsRow: {
    flexDirection: 'row',
    gap: 24,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderColor: '#ddd',
    marginBottom: 14,
  },
  specItem: { flexDirection: 'row', alignItems: 'center', gap: 6 },
  specText: { color: '#333' },
  detailRow: {
    flexDirection: 'row',
    gap: 8,
  },
  detailText: { fontSize: 15, color: '#222' },
  phoneBtn: {
    backgroundColor: '#0891b2',
    borderRadius: 50,
    padding: 10,
  },
  viewBtn: {
    marginTop: 16,
    borderWidth: 2,
    borderColor: '#c084fc',
    padding: 14,
    borderRadius: 40,
    alignItems: 'center',
  },
  viewBtnText: { fontWeight: '700', color: '#9333ea' },
  assignFab: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#0891b2',
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 50,
    elevation: 6,
  },
  assignFabText: { color: 'white', fontWeight: '700' },
});
