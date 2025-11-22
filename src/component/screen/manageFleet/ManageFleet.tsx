import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { CheckSquare, Star, ChevronRight } from 'lucide-react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../navigation/AppNavigator';
import Layout from '../../common/Layout';

type FleetOption = {
  id: string;
  icon: React.ComponentType<{ size: number; color: string }>;
  title: string;
  description: string;
  type: 'MANAGE_BOOKING' | 'MANAGE_NEW_BOOKING';
};

const fleetOptions: FleetOption[] = [
  {
    id: 'Manage Fleet',
    icon: CheckSquare,
    title: 'Manage Fleet',
    description: 'View and manage all your bookings',
    type: 'MANAGE_BOOKING',
  },
  {
    id: 'Manage Profile',
    icon: Star,
    title: 'Manage Profile',
    description: 'Check out new booking requests',
    type: 'MANAGE_NEW_BOOKING',
  },
];

const FleetOptionCard: React.FC<{
  option: FleetOption;
  onPress: () => void;
}> = ({ option: { icon: Icon, title, description }, onPress }) => (
  <TouchableOpacity style={styles.optionCard} onPress={onPress}>
    <View style={styles.optionContent}>
      <View style={styles.iconContainer}>
        <Icon size={24} color="#4f46e5" />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.optionTitle}>{title}</Text>
        <Text style={styles.optionDescription}>{description}</Text>
      </View>
      <ChevronRight size={20} color="#9ca3af" />
    </View>
  </TouchableOpacity>
);

const ManageFleet = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const handleOptionPress = (type: 'MANAGE_BOOKING' | 'MANAGE_NEW_BOOKING') => {
    if (type === 'MANAGE_BOOKING') {
      navigation.navigate('ManageFleetCard');
    } else if (type === 'MANAGE_NEW_BOOKING') {
      navigation.navigate('ProfileManagement');
    }
  };

  return (
    <Layout
      title="Manage Fleet"
      isDashboard={false}
      onBackPress={() => navigation.goBack()}
    >
      <View style={styles.container}>
        {fleetOptions.map(option => (
          <FleetOptionCard
            key={option.id}
            option={option}
            onPress={() => handleOptionPress(option.type)}
          />
        ))}
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9fafb',
  },
  optionCard: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  optionContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    backgroundColor: '#eef2ff',
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  textContainer: {
    flex: 1,
  },
  optionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: 4,
  },
  optionDescription: {
    fontSize: 14,
    color: '#6b7280',
  },
});

export default ManageFleet;
