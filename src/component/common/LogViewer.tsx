import React, { useEffect, useState } from 'react';
import { ScrollView, Text, StyleSheet, View, Button } from 'react-native';
import logger from '../../utils/logger';

const logColors: Record<string, string> = {
  log: '#000',
  warn: '#f39c12',
  error: '#e74c3c',
  info: '#3498db',
};

const LogViewer = () => {
  const [logs, setLogs] = useState(logger.getLogs());

  useEffect(() => {
    const interval = setInterval(() => {
      setLogs(logger.getLogs());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleClear = () => {
    logger.clearLogs();
    setLogs([]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Logs</Text>
        <Button title="Clear" onPress={handleClear} />
      </View>
      <ScrollView style={styles.scrollView}>
        {logs.map((log, index) => (
          <Text
            key={index}
            style={[styles.logText, { color: logColors[log.type] || '#000' }]}
          >
            [{log.timestamp.toLocaleTimeString()}] {log.type.toUpperCase()}: {log.message}
          </Text>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: '#f0f0f0',
    borderTopWidth: 1,
    borderColor: '#ccc',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 15,
    backgroundColor: '#ddd',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  scrollView: {
    paddingHorizontal: 10,
  },
  logText: {
    fontSize: 12,
    marginVertical: 2,
  },
});

export default LogViewer;
