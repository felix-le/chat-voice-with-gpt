import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View className="flex-1 bg-white items-center justify-center">
      <Text className="text-red-500">hello world223!</Text>
      <StatusBar style="auto" />
    </View>
  );
}
