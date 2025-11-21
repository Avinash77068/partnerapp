import React, { useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../navigation/AppNavigator';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Modal,
} from 'react-native';
import {
  Fuel,
  Settings,
  CheckCircle,
  Clock,
  MapPin,
  IndianRupee,
  User,
  Phone,
  Navigation,
} from 'lucide-react-native';
import Layout from '../../common/Layout';
import AssignPickupExecutive from './AssignPickupExecutive';

type AllBookingsScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'AllBookings'
>;

export default function AllBookingsScreen() {
  const navigation = useNavigation<AllBookingsScreenNavigationProp>();
  const route = useRoute();
  const [activeTab, setActiveTab] = useState('active');
  const [assignModalVisible, setAssignModalVisible] = useState(false);

  const booking = {
    id: '90029595',
    status: 'Ongoing',
    vehicle: 'Ford Aspire I VendorAspire1',
    fuelType: 'Diesel',
    transmission: 'Manual',
    pickupDateTime: '14th Nov 7:30 PM',
    dropDateTime: '16th Nov 2:30 PM',
    duration: '1 Day, 19 Hours',
    location: 'Bengaluru, Karnataka, India',
    amount: 2929,
    customerName: 'keshav',
  };

  return (
    <Layout title="All Bookings" onBackPress={() => navigation.goBack()}>
      {/* Tabs */}
      <View style={styles.tabWrapper}>
        <View style={styles.tabContainer}>
          <TouchableOpacity
            onPress={() => setActiveTab('active')}
            style={[
              styles.tabButton,
              activeTab === 'active' && styles.activeTab,
            ]}
          >
            <Text
              style={[
                styles.tabText,
                activeTab === 'active' && styles.activeTabText,
              ]}
            >
              Active (1)
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setActiveTab('completed')}
            style={[
              styles.tabButton,
              activeTab === 'completed' && styles.activeTab,
            ]}
          >
            <Text
              style={[
                styles.tabText,
                activeTab === 'completed' && styles.activeTabText,
              ]}
            >
              Completed (0)
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Main Scroll */}
      <ScrollView style={styles.scroll}>
        <View style={styles.card}>
          {/* Booking Header */}
          <View style={styles.cardHeader}>
            <View>
              <Text style={styles.bookingId}>Booking ID: {booking.id}</Text>
              <Text style={styles.vehicleName}>{booking.vehicle}</Text>
            </View>
            <Text style={styles.statusBadge}>{booking.status}</Text>
          </View>

          {/* Specs */}
          <View style={styles.specRow}>
            <View style={styles.specItem}>
              <Fuel size={20} color="#9333ea" />
              <Text style={styles.specText}>{booking.fuelType}</Text>
            </View>
            <View style={styles.specItem}>
              <Settings size={20} color="#9333ea" />
              <Text style={styles.specText}>{booking.transmission}</Text>
            </View>
          </View>

          {/* Details */}
          <View style={styles.detailSection}>
            <View style={styles.detailRow}>
              <CheckCircle size={20} color="#9333ea" />
              <Text style={styles.detailText}>
                {booking.pickupDateTime} | {booking.dropDateTime}
              </Text>
            </View>

            <View style={styles.detailRow}>
              <Clock size={20} color="#9333ea" />
              <Text style={styles.detailText}>{booking.duration}</Text>
            </View>

            <View style={styles.locationRow}>
              <MapPin size={20} color="#9333ea" />
              <Text style={[styles.detailText, { flex: 1 }]}>
                {booking.location}
              </Text>
              <TouchableOpacity style={styles.navButton}>
                <Navigation size={18} color="#fff" />
              </TouchableOpacity>
            </View>

            <View style={styles.detailRow}>
              <IndianRupee size={20} color="#9333ea" />
              <Text style={styles.detailText}>
                Booking Amount:{' '}
                <Text style={styles.bold}>Rs. {booking.amount}</Text>
              </Text>
            </View>

            <View style={styles.locationRow}>
              <User size={20} color="#9333ea" />
              <Text style={[styles.detailText, { flex: 1 }]}>
                {booking.customerName}
              </Text>
              <TouchableOpacity style={styles.navButton}>
                <Phone size={18} color="#fff" />
              </TouchableOpacity>
            </View>
          </View>

          {/* Buttons */}
          <View style={styles.actionRow}>
            <TouchableOpacity
              style={styles.outlineBtn}
              onPress={() =>
                navigation.navigate('BookingDetails', { bookingId: booking.id })
              }
            >
              <Text style={styles.outlineBtnText}>View Details</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.primaryBtn}>
              <Text style={styles.primaryBtnText}>Picked up</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={styles.assignBtn}
            onPress={() => setAssignModalVisible(true)}
          >
            <Text style={styles.outlineBtnText}>Assign Pickup Executive</Text>
          </TouchableOpacity>
        </View>
        <AssignPickupExecutive
          visible={assignModalVisible}
          onClose={() => setAssignModalVisible(false)}
        />
      </ScrollView>
    </Layout>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f3f4f6' },

  tabWrapper: { backgroundColor: '#fff' },
  tabContainer: {
    backgroundColor: '#e5e7eb',
    borderRadius: 50,
    flexDirection: 'row',
  },
  tabButton: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 50,
    alignItems: 'center',
  },
  tabText: { fontSize: 15, fontWeight: '500', color: '#4b5563' },
  activeTab: { backgroundColor: '#0891b2' },
  activeTabText: { color: '#fff' },

  scroll: { paddingVertical: 20 },

  card: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 28,
    borderWidth: 3,
    borderColor: '#06b6d4',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    elevation: 3,
    marginBottom: 16,
  },

  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  bookingId: { fontSize: 14, color: '#4b5563' },
  vehicleName: { fontSize: 20, fontWeight: '700', color: '#111827' },
  statusBadge: {
    borderWidth: 1,
    borderColor: '#9ca3af',
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 20,
    fontSize: 14,
    color: '#374151',
  },

  specRow: {
    flexDirection: 'row',
    gap: 20,
    paddingBottom: 12,
    marginBottom: 12,
    borderBottomWidth: 1,
    borderColor: '#e5e7eb',
  },
  specItem: { flexDirection: 'row', gap: 6, alignItems: 'center' },
  specText: { color: '#4b5563', fontSize: 14 },

  detailSection: { gap: 10 },
  detailRow: { flexDirection: 'row', gap: 8, alignItems: 'flex-start' },
  locationRow: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  detailText: { fontSize: 15, color: '#111827' },
  bold: { fontWeight: '700' },

  navButton: {
    backgroundColor: '#0891b2',
    padding: 10,
    borderRadius: 50,
  },

  actionRow: { flexDirection: 'row', gap: 10, marginTop: 18 },
  outlineBtn: {
    flex: 1,
    borderWidth: 2,
    borderColor: '#c084fc',
    paddingVertical: 12,
    borderRadius: 50,
  },
  outlineBtnText: {
    color: '#9333ea',
    fontSize: 15,
    fontWeight: '600',
    textAlign: 'center',
  },
  primaryBtn: {
    flex: 1,
    backgroundColor: '#0891b2',
    paddingVertical: 12,
    borderRadius: 50,
  },
  primaryBtnText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: '600',
  },

  assignBtn: {
    marginTop: 12,
    borderWidth: 2,
    borderColor: '#c084fc',
    paddingVertical: 12,
    borderRadius: 50,
  },
});
