import React from "react";
import { Searchbar } from "react-native-paper";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
} from "react-native";
import { RestaurantsInfo } from "../components/restaurant-info.component";

export const RestaurantsScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight }}>
        <View style={styles.search}>
          <Searchbar placeholder="Search" />
        </View>
        <View style={styles.list}>
          <RestaurantsInfo />
        </View>
      </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    search: {
      padding: 16,
    },
    list: {
        backgroundColor: "blue",
        flex: 1,
        padding: 16,
        flexGrow: 1,
    },
  });
  