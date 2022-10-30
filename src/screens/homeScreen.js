import React from 'react';
import { StyleSheet } from 'react-native';
import { Layout, Text, Button } from '@ui-kitten/components';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const HomeScreen = () => {
  return (
    <Layout style={styles.container}>
      <Text category="h1">HOME</Text>
      <Text category="h2">HOME</Text>
      <Text category="h3">HOME</Text>
      <Button>Tet</Button>
      <Text category="h4">HOME</Text>
    </Layout>
  );
};

export default HomeScreen;
