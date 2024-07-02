import { SafeAreaView, StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const Cart = () => {
  return (
    <SafeAreaView>
      <View>
        {/* cart header */}
        <View>
          <View>
            <Text>Open</Text>
            <Text>Fashion</Text>
          </View>
          <Image source={require("../assets/icons8-search.png")} />
        </View>

        <View>
          <Text>CHECKOUT</Text>
        </View>

        {/* cartItems */}
      </View>
    </SafeAreaView>
  );
};

export default Cart;

const styles = StyleSheet.create({});
