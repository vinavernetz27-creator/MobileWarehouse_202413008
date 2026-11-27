import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Alert,
} from 'react-native';

export default function App() {
  const handlePress = () => {
    Alert.alert(
      'Halo, Selamat Datang!',
      'Project berhasil dijalankan!'
    );
  };

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <View style={styles.logo}>
          <Text style={{ fontSize: 32 }}>📦</Text>
        </View>
        <Text style={styles.label}>WAREHOUSE MANAGEMENT</Text>
        <Text style={styles.title}>Mobile Warehouse</Text>
        <Text style={styles.subtitle}>Management System</Text>
      </View>

      {/* WELCOME */}
      <View style={styles.welcomeCard}>
        <Text style={styles.welcomeLabel}>HELLO, WAREHOUSE!</Text>
        <Text style={styles.welcomeTitle}>
          Manage your stock{'\n'}with ease 
        </Text>
        <Text style={styles.welcomeDesc}>
          Kelola stok barang lebih mudah dan teratur.
        </Text>
      </View>

      {/* STATISTICS */}
      <View style={styles.statCard}>
        <Text style={styles.statIcon}>📋</Text>
        <View style={{ flex: 1 }}>
          <Text style={styles.statNumber}>120</Text>
          <Text style={styles.statLabel}>Barang Aktif</Text>
        </View>
        <Text style={styles.active}>● ACTIVE</Text>
      </View>

      {/* WAREHOUSE */}
      <View style={styles.warehouseCard}>
        <Text style={styles.smallLabel}>📍 WAREHOUSE</Text>
        <Text style={styles.warehouseName}>Gudang Lovedbypd</Text>
        <Text style={styles.location}>Kalimantan</Text>
      </View>

      {/* STUDENT */}
      <View style={styles.identityCard}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>S</Text>
        </View>
        <View style={{ flex: 1 }}>
          <Text style={styles.name}>Siti Nuraeni Muffidah</Text>
          <Text style={styles.role}>Mahasiswa Sistem Informasi</Text>
          <Text style={styles.nim}>202413008</Text>
        </View>
      </View>

      {/* BUTTON */}
      <Pressable
        style={({ pressed }) => [
          styles.button,
          pressed && { opacity: 0.8 },
        ]}
        onPress={handlePress}
      >
        <Text style={styles.buttonText}>Mulai Aplikasi  →</Text>
      </Pressable>

      <Text style={styles.footer}>MODUL 1 • PROJECT INITIALIZATION </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F5FC',
    paddingHorizontal: 22,
    paddingTop: 35,
    paddingBottom: 20,
    justifyContent: 'center',
  },

  header: {
    alignItems: 'center',
    marginBottom: 20,
  },

  logo: {
    width: 60,
    height: 60,
    borderRadius: 20,
    backgroundColor: '#EDE2FA',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },

  label: {
    fontSize: 9,
    fontWeight: '800',
    letterSpacing: 2.5,
    color: '#A17AB8',
  },

  title: {
    fontSize: 26,
    fontWeight: '900',
    color: '#503761',
    marginTop: 5,
  },

  subtitle: {
    fontSize: 12,
    color: '#A185B5',
    marginTop: 3,
  },

  welcomeCard: {
    backgroundColor: '#79608F',
    borderRadius: 22,
    padding: 20,
    marginBottom: 15,
  },

  welcomeLabel: {
    color: '#E9DDF7',
    fontSize: 9,
    fontWeight: '800',
    letterSpacing: 2,
  },

  welcomeTitle: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: '900',
    marginTop: 8,
    lineHeight: 28,
  },

  welcomeDesc: {
    color: '#F0E8F6',
    fontSize: 11,
    marginTop: 8,
  },

  statCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#F0E9F5',
  },

  statIcon: {
    fontSize: 25,
    marginRight: 13,
  },

  statNumber: {
    fontSize: 23,
    fontWeight: '900',
    color: '#654C83',
  },

  statLabel: {
    fontSize: 11,
    color: '#77638E',
  },

  active: {
    fontSize: 9,
    fontWeight: '800',
    color: '#61916C',
    backgroundColor: '#E9F5EB',
    overflow: 'hidden',
    borderRadius: 12,
    padding: 7,
  },

  warehouseCard: {
    backgroundColor: '#F0E8F8',
    borderRadius: 18,
    padding: 16,
    marginBottom: 12,
  },

  smallLabel: {
    fontSize: 9,
    fontWeight: '800',
    color: '#A18AB9',
    letterSpacing: 1.5,
  },

  warehouseName: {
    fontSize: 16,
    fontWeight: '900',
    color: '#5C4277',
    marginTop: 5,
  },

  location: {
    fontSize: 10,
    color: '#9078A9',
    marginTop: 3,
  },

  identityCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 17,
    borderWidth: 1,
    borderColor: '#F0E9F5',
  },

  avatar: {
    width: 48,
    height: 48,
    borderRadius: 16,
    backgroundColor: '#E8DDF5',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },

  avatarText: {
    fontSize: 22,
    fontWeight: '900',
    color: '#76558E',
  },

  name: {
    fontSize: 12,
    fontWeight: '900',
    color: '#59416F',
  },

  role: {
    fontSize: 10,
    color: '#A28BB8',
    marginTop: 4,
  },

  nim: {
    fontSize: 10,
    fontWeight: '700',
    color: '#6D5486',
    marginTop: 4,
  },

  button: {
    height: 48,
    backgroundColor: '#C184B8',
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
  },

  buttonText: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '900',
  },

  footer: {
    textAlign: 'center',
    fontSize: 8,
    color: '#B49AC5',
    letterSpacing: 1.3,
    marginTop: 15,
  },
});