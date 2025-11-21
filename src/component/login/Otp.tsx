import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ActivityIndicator,
} from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '../../navigation/AppNavigator';

type OTPScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'OTP'
>;
type OTPScreenRouteProp = RouteProp<RootStackParamList, 'OTP'>;

export default function OTPScreen() {
  const navigation = useNavigation<OTPScreenNavigationProp>();
  const route = useRoute<OTPScreenRouteProp>();
  const phoneNumber = route.params?.phoneNumber || '';
  const [otp, setOtp] = useState('');
  const [errorMessages, setErrorMessages] = useState('');
  const [isResendDisabled, setIsResendDisabled] = useState(false);
  const [timer, setTimer] = useState(30);
  const [isLoading, setIsLoading] = useState(false);

  const handleVerify = async () => {
    if (otp.length === 4) {
      navigation.navigate('P2PDashboard');
    } else {
      console.log('Please enter a valid 4-digit OTP.');
    }
  };

  const handleResendOTP = async () => {
    setIsResendDisabled(true);
    setTimer(30);
  };

  const handleEditPhone = () => {
    navigation.goBack();
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <View style={styles.card}>
        <Text style={styles.title}>Verify OTP</Text>

        <View style={styles.phoneContainer}>
          <Text style={styles.phoneText}>
            The OTP has been sent to{' '}
            <Text style={styles.phoneBold}>+91 {phoneNumber}</Text>
          </Text>
          <TouchableOpacity onPress={handleEditPhone} style={styles.editIcon}>
            <Text style={styles.editIconText}>✎</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.formGroup}>
          <TextInput
            style={styles.input}
            placeholder="Enter 4-digit OTP"
            placeholderTextColor="#999"
            value={otp}
            onChangeText={setOtp}
            keyboardType="number-pad"
            maxLength={4}
            textAlign="center"
          />
        </View>

        {errorMessages ? (
          <Text style={styles.errorText}>{errorMessages}</Text>
        ) : null}

        <View style={styles.resendContainer}>
          <TouchableOpacity
            onPress={handleResendOTP}
            disabled={isResendDisabled}
            style={styles.resendButton}
          >
            <Text
              style={[
                styles.resendText,
                isResendDisabled && styles.resendTextDisabled,
              ]}
            >
              Resend OTP {isResendDisabled && `(${timer}s)`}
            </Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={[styles.button, otp.length !== 4 && styles.buttonDisabled]}
          onPress={handleVerify}
          disabled={otp.length !== 4 || isLoading}
        >
          {isLoading ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <Text style={styles.buttonText}>Submit</Text>
          )}
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 24,
    width: '90%',
    maxWidth: 400,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#007bff',
    textAlign: 'center',
    marginBottom: 16,
  },
  phoneContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
    flexWrap: 'wrap',
  },
  phoneText: {
    fontSize: 14,
    color: '#6c757d',
    textAlign: 'center',
  },
  phoneBold: {
    fontWeight: 'bold',
    color: '#212529',
  },
  editIcon: {
    marginLeft: 8,
    padding: 4,
  },
  editIconText: {
    fontSize: 16,
    color: '#007bff',
  },
  formGroup: {
    marginBottom: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ced4da',
    borderRadius: 4,
    padding: 12,
    fontSize: 20,
    backgroundColor: '#fff',
    letterSpacing: 8,
  },
  errorText: {
    color: '#dc3545',
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 12,
  },
  resendContainer: {
    alignItems: 'center',
    marginBottom: 16,
  },
  resendButton: {
    padding: 8,
  },
  resendText: {
    color: '#007bff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  resendTextDisabled: {
    color: '#6c757d',
  },
  button: {
    backgroundColor: '#007bff',
    padding: 14,
    borderRadius: 4,
    alignItems: 'center',
  },
  buttonDisabled: {
    backgroundColor: '#6c757d',
    opacity: 0.6,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
