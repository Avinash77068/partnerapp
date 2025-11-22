import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import {
  CheckSquare,
  Star,
  Clock,
  Calendar,
  ChevronRight,
} from 'lucide-react-native';

export type ToolKey =
  | 'ALL_BOOKINGS'
  | 'NEW_BOOKINGS'
  | 'TODAY_DELIVERIES'
  | 'TODAY_PICKUPS'
  | 'ONGOING_BOOKINGS';

interface BookingCategory {
  id: ToolKey;
  icon: React.ComponentType<{ size: number; color: string }>;
  label: string;
  badge: number | null;
}

const bookingCategories: BookingCategory[] = [
  { id: 'ALL_BOOKINGS', icon: CheckSquare, label: 'All Bookings', badge: null },
  { id: 'NEW_BOOKINGS', icon: Star, label: 'New Bookings', badge: null },
  {
    id: 'TODAY_DELIVERIES',
    icon: Clock,
    label: "Today's Deliveries",
    badge: 1,
  },
  {
    id: 'TODAY_PICKUPS',
    icon: Calendar,
    label: "Today's Pickups",
    badge: 1,
  },
  {
    id: 'ONGOING_BOOKINGS',
    icon: Calendar,
    label: 'Ongoing Bookings',
    badge: 1,
  },
];

interface P2PDashboardUIProps {
  allowedTools?: ToolKey[];
  toolBookingCount?: Record<ToolKey, number>;
  onPressTool: (toolKey: ToolKey) => void;
}

export default function P2PDashboardUI({
  allowedTools = [
    'ALL_BOOKINGS',
    'NEW_BOOKINGS',
    'TODAY_DELIVERIES',
    'TODAY_PICKUPS',
    'ONGOING_BOOKINGS',
  ] as ToolKey[],
  toolBookingCount = {
    ALL_BOOKINGS: 0,
    NEW_BOOKINGS: 0,
    TODAY_DELIVERIES: 0,
    TODAY_PICKUPS: 0,
    ONGOING_BOOKINGS: 0,
  },
  onPressTool,
}: P2PDashboardUIProps) {
  return (
    <View style={styles.container}>
      {bookingCategories.map(category => (
        <TouchableOpacity
          key={category.id}
          style={styles.card}
          activeOpacity={0.7}
          onPress={() => onPressTool(category.id)}
        >
          <View style={styles.cardLeft}>
            <View style={styles.iconContainer}>
              <category.icon size={24} color="#9333ea" />
            </View>
            <Text style={styles.cardLabel}>{category.label}</Text>

            {category.badge && (
              <View style={styles.badge}>
                <Text style={styles.badgeText}>{category.badge}</Text>
              </View>
            )}
          </View>
          <ChevronRight size={24} color="#9ca3af" />
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9fafb',
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 2,
  },
  cardLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    flex: 1,
  },
  iconContainer: {
    backgroundColor: '#f3e8ff',
    borderRadius: 12,
    padding: 12,
  },
  cardLabel: {
    fontSize: 16,
    fontWeight: '500',
    color: '#1f2937',
    flex: 1,
  },
  badge: {
    backgroundColor: '#f3e8ff',
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 4,
  },
  badgeText: {
    color: '#9333ea',
    fontSize: 14,
    fontWeight: '600',
  },
});
