import React from 'react';
import { View, StyleSheet } from 'react-native';
import Navbar from './Navbar';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
  title: string;
  isDashboard?: boolean;
  onBackPress?: () => void;
  onLogout?: () => void;
}

const Layout: React.FC<LayoutProps> = ({
  children,
  title,
  isDashboard = false,
  onBackPress = () => {},
  onLogout = () => {},
}) => {
  return (
    <View style={styles.container}>
      <Navbar
        title={title}
        isDashboard={isDashboard}
        onBackPress={onBackPress}
        onLogout={onLogout}
      />
      <View style={styles.content}>{children}</View>
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    paddingTop: 30,
    paddingBottom: 20,
    paddingHorizontal: 16,
  },
});

export default Layout;
