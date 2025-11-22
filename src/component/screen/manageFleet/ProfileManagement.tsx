import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Switch,
  ScrollView,
} from 'react-native';
import Navbar from '../../common/Navbar';
import { useNavigation } from '@react-navigation/native';

export default function ProfileManagement() {
  const navigation = useNavigation();
  const [activeTab, setActiveTab] = useState('profile');
  const [leadTime, setLeadTime] = useState('');
  const [minDuration, setMinDuration] = useState('8 hour');
  const [maxDuration, setMaxDuration] = useState('');
  const [startTime, setStartTime] = useState('09:00 PM');
  const [endTime, setEndTime] = useState('02:59 AM');
  const [available24Hours, setAvailable24Hours] = useState(false);
  const [selfPickup, setSelfPickup] = useState(true);
  const [doorStepDelivery, setDoorStepDelivery] = useState(false);
  const [hostLocation, setHostLocation] = useState('');

  return (
    <View style={{ flex: 1, backgroundColor: '#F1F4F8' }}>
      <Navbar title="Manage Profile" onBackPress={() => navigation.goBack()} />

      <ScrollView contentContainerStyle={{ padding: 16 }}>
        {/* Tabs */}
        <View
          style={{
            flexDirection: 'row',
            gap: 12,
            marginBottom: 16,
            alignSelf: 'center',
            width: '100%',
          }}
        >
          <TouchableOpacity
            onPress={() => setActiveTab('profile')}
            style={{
              flex: 1,
              paddingVertical: 12,
              borderRadius: 50,
              alignItems: 'center',
              backgroundColor: activeTab === 'profile' ? '#06b6d4' : 'white',
              borderWidth: activeTab !== 'profile' ? 1 : 0,
              borderColor: '#D1D5DB',
            }}
          >
            <Text
              style={{
                color: activeTab === 'profile' ? 'white' : '#4b5563',
                fontWeight: '500',
              }}
            >
              Profile
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setActiveTab('users')}
            style={{
              flex: 1,
              paddingVertical: 12,
              borderRadius: 50,
              alignItems: 'center',
              backgroundColor: activeTab === 'users' ? '#06b6d4' : 'white',
              borderWidth: activeTab !== 'users' ? 1 : 0,
              borderColor: '#D1D5DB',
            }}
          >
            <Text
              style={{
                color: activeTab === 'users' ? 'white' : '#4b5563',
                fontWeight: '500',
              }}
            >
              Users
            </Text>
          </TouchableOpacity>
        </View>

        {/* Service Settings */}
        <View
          style={{
            backgroundColor: 'white',
            padding: 16,
            borderRadius: 12,
            marginBottom: 16,
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 16 }}>
            Service Settings
          </Text>

          {/* Lead Time */}
          <Text style={{ fontWeight: '600', marginBottom: 8 }}>
            Lead time (in hours)
          </Text>
          <TextInput
            placeholder="Select"
            value={leadTime}
            onChangeText={setLeadTime}
            style={{
              borderWidth: 1,
              borderColor: '#D1D5DB',
              borderRadius: 8,
              padding: 12,
              marginBottom: 6,
            }}
          />
          <Text style={{ color: '#6B7280', fontSize: 12, marginBottom: 16 }}>
            Minimum time needed before a booking can be made
          </Text>

          {/* Min Duration */}
          <Text style={{ fontWeight: '600', marginBottom: 8 }}>
            Min. Booking duration
          </Text>
          <TextInput
            value={minDuration}
            onChangeText={setMinDuration}
            style={{
              borderWidth: 1,
              borderColor: '#D1D5DB',
              borderRadius: 8,
              padding: 12,
              marginBottom: 16,
            }}
          />

          {/* Max Duration */}
          <Text style={{ fontWeight: '600', marginBottom: 8 }}>
            Max. Booking duration
          </Text>
          <TextInput
            value={maxDuration}
            onChangeText={setMaxDuration}
            placeholder="Select"
            style={{
              borderWidth: 1,
              borderColor: '#D1D5DB',
              borderRadius: 8,
              padding: 12,
            }}
          />
        </View>

        {/* Operational Hours */}
        <View
          style={{
            backgroundColor: 'white',
            padding: 16,
            borderRadius: 12,
            marginBottom: 16,
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 4 }}>
            Operational Hours
          </Text>
          <Text style={{ color: '#6B7280', marginBottom: 16 }}>
            Set your daily operational hours
          </Text>

          <View style={{ flexDirection: 'row', gap: 12, marginBottom: 12 }}>
            <TextInput
              value={startTime}
              onChangeText={setStartTime}
              style={{
                flex: 1,
                borderWidth: 1,
                borderColor: '#D1D5DB',
                borderRadius: 8,
                padding: 12,
              }}
            />
            <TextInput
              value={endTime}
              onChangeText={setEndTime}
              style={{
                flex: 1,
                borderWidth: 1,
                borderColor: '#D1D5DB',
                borderRadius: 8,
                padding: 12,
              }}
            />
          </View>

          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
            <Switch
              value={available24Hours}
              onValueChange={setAvailable24Hours}
              trackColor={{ false: '#9CA3AF', true: '#06b6d4' }}
            />
            <Text>Available 24 hours</Text>
          </View>
        </View>

        {/* Delivery Options */}
        <View
          style={{
            backgroundColor: 'white',
            padding: 16,
            borderRadius: 12,
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 8 }}>
            Delivery Options
          </Text>
          <Text style={{ color: '#6B7280', marginBottom: 16 }}>
            Please select all delivery types provided
          </Text>

          {/* Self Pickup */}
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: 10,
              alignItems: 'center',
            }}
          >
            <Text>Self Pickup (Required)</Text>
            <Switch
              value={selfPickup}
              onValueChange={setSelfPickup}
              trackColor={{ false: '#9CA3AF', true: '#06b6d4' }}
            />
          </View>

          {selfPickup && (
            <TextInput
              value={hostLocation}
              onChangeText={setHostLocation}
              placeholder="Tap to set pickup location..."
              style={{
                borderWidth: 1,
                borderColor: '#D1D5DB',
                borderRadius: 8,
                padding: 12,
                marginBottom: 16,
              }}
            />
          )}

          {/* Door Step */}
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: 16,
              alignItems: 'center',
            }}
          >
            <Text>Door Step Delivery</Text>
            <Switch
              value={doorStepDelivery}
              onValueChange={setDoorStepDelivery}
              trackColor={{ false: '#9CA3AF', true: '#06b6d4' }}
            />
          </View>

          {/* Save Button */}
          <TouchableOpacity
            style={{
              backgroundColor: '#06b6d4',
              padding: 16,
              borderRadius: 12,
              alignItems: 'center',
            }}
          >
            <Text style={{ color: 'white', fontWeight: '600' }}>
              Save changes
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
