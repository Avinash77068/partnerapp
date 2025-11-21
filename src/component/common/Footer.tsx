import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Home, User } from 'lucide-react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/AppNavigator';

type FooterNavigationProp = NativeStackNavigationProp<RootStackParamList>;

export default function Footer() {
  const navigation = useNavigation<FooterNavigationProp>();
  const route = useRoute();
  const isDashboard = route.name === 'P2PDashboard';
  const isManageFleet = route.name === 'ManageFleet';

  return (
    <View style={styles.bottomNav}>
      <TouchableOpacity
        style={[styles.navItem, isDashboard && styles.navItemActive]}
        onPress={() => navigation.navigate('P2PDashboard')}
      >
        <Home size={24} color={isDashboard ? '#2563eb' : '#9ca3af'} />
        <Text style={[styles.navText, isDashboard && styles.navTextActive]}>
          Home
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.navItem, isManageFleet && styles.navItemActive]}
        onPress={() => navigation.navigate('ManageFleet')}
      >
        <User size={24} color={isManageFleet ? '#2563eb' : '#9ca3af'} />
        <Text style={[styles.navText, isManageFleet && styles.navTextActive]}>
          Manage Fleet
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  bottomNav: {
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    paddingVertical: 12,
  },
  navItemActive: {
    flex: 1,
    alignItems: 'center',
    borderTopWidth: 2,
    borderTopColor: '#2563eb',
    paddingTop: 10,
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 12,
  },
  navTextActive: {
    fontSize: 11,
    marginTop: 4,
    color: '#2563eb',
    fontWeight: '500',
  },
  navText: {
    fontSize: 11,
    marginTop: 4,
    color: '#9ca3af',
  },
});
