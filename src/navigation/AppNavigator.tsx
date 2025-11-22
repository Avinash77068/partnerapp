import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../component/login/Login';
import OTPScreen from '../component/login/Otp';
import P2PDashboard from '../component/screen/p2pDashboard/P2PDashboard';
import ManageFleet from '../component/screen/manageFleet/ManageFleet';
import AllBookingsScreen from '../component/screen/DynamicCard/Card';
import ManageFleetCard from '../component/screen/manageFleet/ManageFleetCard';
import BookingDetailsScreen from '../component/screen/DynamicCard/BookingDetails';
import AssignPickupExecutive from '../component/screen/DynamicCard/AssignPickupExecutive';
import ProfileManagement from '../component/screen/manageFleet/ProfileManagement';

export type RootStackParamList = {
  Login: undefined;
  OTP: { phoneNumber: string };
  P2PDashboard: undefined;
  ManageFleet: undefined;
  AllBookings: { type: string };
  ManageFleetCard: undefined;
  BookingDetails: { bookingId: string };
  AssignPickupExecutive: { bookingId: string };
  ProfileManagement: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="P2PDashboard"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen
          name="AssignPickupExecutive"
          component={AssignPickupExecutive}
        />
        <Stack.Screen name="ProfileManagement" component={ProfileManagement} />
        <Stack.Screen name="OTP" component={OTPScreen} />
        <Stack.Screen name="P2PDashboard" component={P2PDashboard} />
        <Stack.Screen name="ManageFleet" component={ManageFleet} />
        <Stack.Screen name="ManageFleetCard" component={ManageFleetCard} />
        <Stack.Screen
          name="AllBookings"
          component={AllBookingsScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="BookingDetails"
          component={BookingDetailsScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
