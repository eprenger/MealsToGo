import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";

export default function App() {
  return (
    <>
      <SafeAreaView style={{ flex: 1 }}>
        <View
          style={{
            padding: 16,
            backgroundColor: "green",
          }}
        >
          <Text>search</Text>
        </View>
        <View
          style={{
            backgroundColor: "blue",
            flex: 1,
            padding: 16,
            flexGrow: 1,
          }}
        >
          <Text>list</Text>
        </View>
      </SafeAreaView>
      <StatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({});
