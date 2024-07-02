import { SafeAreaView, StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const Cart = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.subContainer}>
        <View />
        {/* cart header */}
        <View style={styles.header}>
          <View style={styles.headerTextContainer}>
            <Text>Open</Text>
            <Text>Fashion</Text>
          </View>
          <Image
            style={styles.icon}
            source={require("../assets/icons8-search.png")}
          />
        </View>

        <View style={styles.checkoutText}>
          <Text>CHECKOUT</Text>
        </View>

        {/* cartItems */}
      </View>
    </SafeAreaView>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  subContainer: {
    padding: 10,
    gap: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "flex-end",
    gap: 150,
  },
  headerTextContainer: {
    flexDirection: "column",
    alignItems: "center",
  },
  icon: {
    width: 26,
    height: 26,
  },
  checkoutText: {
    flexDirection: "row",
    justifyContent: "center",
  },
});
