import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Eduardo Rodriguez 191045</Text>
      <Text>Universidad Tecnologica de Aguascalientes</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0099CC',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
