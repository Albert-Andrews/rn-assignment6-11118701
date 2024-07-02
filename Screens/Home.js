import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { items } from "../Mock/Items";
import { useState } from "react";

const Home = ({ navigation }) => {
  const [numColumns, setNumColumns] = useState(2);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.subContainer}>
        {/* header */}
        <View style={styles.header}>
          <Image style={styles.icon} source={require("../assets/Menu.png")} />
          <View style={styles.headerTextContainer}>
            <Text>Open</Text>
            <Text>Fashion</Text>
          </View>
          <View style={styles.iconContainer}>
            <TouchableOpacity onPress={() => navigation.navigate("Cart")}>
              <Image
                style={styles.icon}
                source={require("../assets/icons8-search.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Cart")}>
              <Image
                style={styles.icon}
                source={require("../assets/shopping-bag.png")}
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* story */}
        <View style={styles.story}>
          <Text style={styles.storyText}>OUR STORY</Text>
          <View style={styles.iconContainer}>
            <Image
              style={styles.icon}
              source={require("../assets/Listview.png")}
            />
            <Image
              style={styles.icon}
              source={require("../assets/Filter.png")}
            />
          </View>
        </View>

        {/* products */}
        <View style={styles.products}>
          <FlatList
            data={items}
            key={numColumns}
            renderItem={({ item }) => (
              <TouchableOpacity>
                <View style={styles.productContainer}>
                  <Image style={styles.productImage} source={item.image} />
                  <Text>{item.name}</Text>
                  <View>
                    <Text>{item.description}</Text>
                    <Text style={styles.itemPrice}>${item.price}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            )}
            columnWrapperStyle={styles.columnWrapper}
            keyExtractor={(item) => item.id}
            numColumns={numColumns}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;

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
    justifyContent: "space-between",
  },
  headerTextContainer: {
    flexDirection: "column",
    alignItems: "center",
  },
  story: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  storyText: {
    fontWeight: "bold",
  },
  iconContainer: {
    flexDirection: "row",
    gap: 20,
  },
  icon: {
    width: 26,
    height: 26,
  },
  columnWrapper: {
    justifyContent: 'space-between',
    marginBottom: 10, // Optional: to add space between rows
  },

  productContainer: {
    justifyContent: "center",
    gap: 10,
    flex: 1,
    marginBottom: 20,
  },
  productImage: {
    width: 200,
    height: 250,
  },
  itemPrice: {
    color: "red",
  },
  products: {
    height: 760,
  },
});
