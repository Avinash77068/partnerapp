import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { User, ArrowLeft } from 'lucide-react-native';

export default function Navbar({
  title,
  isDashboard,
  onBackPress,
  onLogout,
}: {
  title: string;
  isDashboard?: boolean;
  onBackPress?: () => void;
  onLogout?: () => void;
}) {
  return (
    <View style={styles.header}>
      <View style={styles.headerLeft}>
        {!isDashboard && (
          <TouchableOpacity onPress={onBackPress} style={styles.backButton}>
            <ArrowLeft size={24} color="#ffffff" />
          </TouchableOpacity>
        )}
        <View
          style={isDashboard ? styles.logoContainer : styles.titleContainer}
        >
          {isDashboard ? (
            <>
              <Text style={styles.logoText}>revv</Text>
              <Text style={styles.subLogoText}>BY CarDekho GROUP</Text>
            </>
          ) : (
            <Text style={styles.titleText}>{title}</Text>
          )}
        </View>
      </View>
      <TouchableOpacity style={styles.profileButton} onPress={onLogout}>
        <User size={24} color="#0891b2" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#0891b2',
    paddingTop: 30,
    paddingBottom: 20,
    paddingHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  backButton: {
    marginRight: 16,
  },
  logoContainer: {
    alignItems: 'flex-start',
  },
  titleContainer: {
    flex: 1,
  },
  logoText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  titleText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#ffffff',
    marginLeft: 8,
  },
  subLogoText: {
    fontSize: 10,
    color: '#ffffff',
    marginTop: 2,
  },
  profileButton: {
    backgroundColor: '#ffffff',
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 16,
  },
});
