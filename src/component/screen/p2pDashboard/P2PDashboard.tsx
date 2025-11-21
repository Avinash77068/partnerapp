import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import P2PDashboardUI, { ToolKey } from './P2PDashboardUI';
import { RootStackParamList } from '../../../navigation/AppNavigator';
import Layout from '../../common/Layout';

type P2PDashboardNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'P2PDashboard'
>;

const P2PDashboard = () => {
  const navigation = useNavigation<P2PDashboardNavigationProp>();

  const handlePressTool = (toolKey: ToolKey) => {
    console.log('Tool pressed:', toolKey);
    // Navigate to AllBookings screen with the selected tool type
    navigation.navigate('AllBookings', { type: toolKey });
  };

  // Mock data - replace with your actual data
  const allowedTools: ToolKey[] = [
    'ALL_BOOKINGS',
    'NEW_BOOKINGS',
    'TODAY_DELIVERIES',
    'PENDING_DELIVERIES',
    'TODAY_PICKUPS',
    'PENDING_PICKUPS',
  ];
  const toolBookingCount: Record<ToolKey, number> = {
    ALL_BOOKINGS: 5,
    NEW_BOOKINGS: 2,
    TODAY_DELIVERIES: 1,
    PENDING_DELIVERIES: 1,
    TODAY_PICKUPS: 1,
    PENDING_PICKUPS: 1,
  };

  return (
    <Layout
      title="Dashboard"
      isDashboard
      onLogout={() => navigation.navigate('Login')}
    >
      <P2PDashboardUI
        allowedTools={allowedTools}
        toolBookingCount={toolBookingCount}
        onPressTool={handlePressTool}
      />
    </Layout>
  );
};

export default P2PDashboard;
