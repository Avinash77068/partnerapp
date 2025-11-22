import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Image,
} from 'react-native';
import { ArrowLeft, Camera } from 'lucide-react-native';

export default function PickupDetails() {
  const [fuelLevel, setFuelLevel] = useState('');
  const [odoReading, setOdoReading] = useState('');
  const [tollCharge, setTollCharge] = useState('');
  const [fuelChargesSettled, setFuelChargesSettled] = useState('no');
  const [tollChargesSettled, setTollChargesSettled] = useState('no');
  const [damagesReported, setDamagesReported] = useState('no');

  const ImageUploadBox = ({ label, description }: any) => (
    <View style={{ marginBottom: 24 }}>
      <Text style={styles.label}>{label}</Text>
      {description && <Text style={styles.description}>{description}</Text>}

      <View style={styles.imageBox}>
        <View style={styles.imageInner}>
          <Camera size={42} color="#9ca3af" />
        </View>
      </View>
    </View>
  );

  const RadioGroup = ({ label, description, value, onChange }: any) => (
    <View style={{ marginBottom: 20 }}>
      <View style={styles.radioRow}>
        <Text style={styles.label}>{label}</Text>

        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 24 }}>
          <TouchableOpacity
            style={styles.radioButtonContainer}
            onPress={() => onChange('yes')}
          >
            <View style={styles.radioCircle}>
              {value === 'yes' && <View style={styles.dotYes} />}
            </View>
            <Text style={styles.radioText}>Yes</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.radioButtonContainer}
            onPress={() => onChange('no')}
          >
            <View style={styles.radioCircle}>
              {value === 'no' && <View style={styles.dotNo} />}
            </View>
            <Text style={styles.radioText}>No</Text>
          </TouchableOpacity>
        </View>
      </View>

      {description && <Text style={styles.description}>{description}</Text>}
    </View>
  );

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <ArrowLeft size={28} color="#111" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Enter Details</Text>
      </View>

      <ScrollView contentContainerStyle={styles.container}>
        {/* Fuel Level */}
        <View style={styles.inputBox}>
          <Text style={styles.label}>Fuel Level</Text>
          <TextInput
            placeholder="Enter Fuel Reading %"
            value={fuelLevel}
            onChangeText={setFuelLevel}
            style={styles.input}
          />
        </View>

        {/* Images */}
        <ImageUploadBox label="Fuel Gauge Image" />
        <ImageUploadBox label="Odometer Image" />
        <ImageUploadBox label="Car Images (Minimum 5)" />

        {/* ODO Reading */}
        <View style={styles.inputBox}>
          <Text style={styles.label}>ODO Reading</Text>
          <TextInput
            placeholder="Enter ODO Reading"
            value={odoReading}
            onChangeText={setOdoReading}
            style={styles.input}
          />
        </View>

        {/* Radio Inputs */}
        <RadioGroup
          label="Fuel charges settled"
          description="Fuel charge will be added to customer invoice"
          value={fuelChargesSettled}
          onChange={setFuelChargesSettled}
        />

        <RadioGroup
          label="Toll charges settled"
          value={tollChargesSettled}
          onChange={setTollChargesSettled}
        />

        {/* Toll charge input */}
        <View style={styles.inputBox}>
          <Text style={styles.label}>Toll charges</Text>
          <TextInput
            placeholder="Enter toll charge"
            value={tollCharge}
            onChangeText={setTollCharge}
            style={styles.input}
          />
        </View>

        <RadioGroup
          label="Damages Reported"
          value={damagesReported}
          onChange={setDamagesReported}
        />

        {/* Continue Button */}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderColor: '#e5e7eb',
    gap: 14,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#111',
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111',
    marginBottom: 6,
  },
  description: {
    color: '#6b7280',
    fontSize: 13,
    marginBottom: 8,
  },
  inputBox: { marginBottom: 22 },
  input: {
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 10,
    padding: 12,
    fontSize: 15,
  },
  imageBox: {
    borderWidth: 2,
    borderColor: '#d1d5db',
    borderStyle: 'dashed',
    padding: 6,
    borderRadius: 14,
  },
  imageInner: {
    borderWidth: 2,
    borderStyle: 'dashed',
    borderColor: '#d1d5db',
    padding: 45,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  radioCircle: {
    width: 24,
    height: 24,
    borderRadius: 24,
    borderWidth: 2,
    borderColor: '#9ca3af',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dotYes: {
    width: 12,
    height: 12,
    borderRadius: 12,
    backgroundColor: '#111827',
  },
  dotNo: {
    width: 12,
    height: 12,
    borderRadius: 12,
    backgroundColor: '#3b82f6',
  },
  radioButtonContainer: { flexDirection: 'row', alignItems: 'center', gap: 6 },
  radioText: { fontSize: 15, color: '#111' },
  button: {
    backgroundColor: '#d1d5db',
    padding: 18,
    borderRadius: 12,
    marginBottom: 30,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '600',
    color: 'white',
  },
});
