import React from 'react';
import { SafeViewArea, View, StyleSheet } from 'react-native';
import {
  ApplicationProvider,
  Layout,
  Text,
  Button,
} from '@ui-kitten/components';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const SettingScreen = () => {
  return (
    <Layout style={styles.container}>
      <Text category="h1">Setting</Text>
      <Text category="h2">Seting</Text>
      <Text category="h3">Setting</Text>
      <Button>Tet</Button>
      <Text category="h4">HOME</Text>
    </Layout>
  );
};

export default SettingScreen;
