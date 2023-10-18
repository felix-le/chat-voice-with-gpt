import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NativeWindStyleSheet } from "nativewind";
import HelloWorld from "./src/components/HelloWorld";
import Heading from "./src/components/common/Heading";
export default function App() {
  return (
    <View className="flex-1 bg-white items-center justify-center">
      <Heading title="Hello world from component" customStyles="text-primary" />
    </View>
  );
}
