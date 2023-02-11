import React from "react";
import { Image, StyleSheet, Text, View, Platform } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Animated } from "react-native";

const Header: React.FC = () => {
    console.log(Platform);
    
  return (
    <>
      <View style={styles.headerComponent}>
        <Image  style={styles.image} source={require("../assets/Frame-2.png")} />
      </View>
    </>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerComponent: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop:Platform["OS"]=="ios"?34:20,
    height:Platform["OS"]=="ios"?70:75
  },
  image:{
    flex:1,
    width: "100%",
  }
});
