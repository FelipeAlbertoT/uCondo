import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function AddChartAccountScreen() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    color: '#FFF',
    fontWeight: '700',
    fontSize: 22
  },
});