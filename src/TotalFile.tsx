import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Modal } from 'react-native';
import AppNavigator from './navigation/AppNavigator';
import LogViewer from './component/common/LogViewer';

export default function TotalFile() {
  const [showLogs, setShowLogs] = useState(false);

  const toggleLogs = () => {
    setShowLogs((prev) => !prev);
  };

  return (
    <View style={{ flex: 1 }}>
      <AppNavigator />

      <TouchableOpacity style={styles.logButton} onPress={toggleLogs}>
        <Text style={styles.buttonText}>{showLogs ? 'Close Logs' : 'Show Logs'}</Text>
      </TouchableOpacity>

      <Modal
        visible={showLogs}
        animationType="slide"
        transparent={true}
        onRequestClose={toggleLogs} // Android back button
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <TouchableOpacity style={styles.closeButton} onPress={toggleLogs}>
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
            <LogViewer />
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  logButton: {
    position: 'absolute',
    top: 60,
    right: 20,
    backgroundColor: '#007bff',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 5,
    elevation: 10,
    zIndex: 1000,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
  },
  modalBackground: {
    flex: 1,
    // backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '100%',
    maxHeight: '100%',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 10,
    elevation: 20,
  },
  closeButton: {
    alignSelf: 'flex-end',
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginBottom: 10,
    backgroundColor: '#007bff',
    borderRadius: 5,
  },
  closeButtonText: {
    color: '#fff',
    fontWeight: '600',
  },
});
