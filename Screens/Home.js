import { SafeAreaView, StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const Home = () => {
  return (
    <SafeAreaView>
      <View>
        {/* header */}
        <View style={styles.header}>
          <Image />
          <View>
            <Text>Open</Text>
            <Text>Fashion</Text>
          </View>
          <View>
            <Image source={require("../assets/icons8-search.png")} />
            <Image source={require("../assets/shopping-bag.png")} />
          </View>
        </View>

        {/* story */}
        <View style={styles.story}>
          <Text style={styles.storyText}>OUR STORY</Text>
          <View>
            <Image source={require("../assets/Listview.png")} />
            <Image source={require("../assets/Filter.png")} />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
