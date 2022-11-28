import React from "react";
import { Pressable, View, Text, StyleSheet } from "react-native";

const CategoryGridTitle = ({ title, color, onPress }) => {
  const col = { backgroundColor: color };
  return (
    <View style={[styles.categoryContainer, col]}>
      <Pressable
        android_ripple={{ color: "red" }}
        style={styles.button}
        onPress={onPress}
      >
        <View style={styles.textview}>
          <Text style={styles.text}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  categoryContainer: {
    // flex:1,
    color: "white",
    // padding:50,
    borderRadius: 10,
    width: 175,
    height: 175,
    margin: 10,
    elevation: 5,
    borderWidth: 5,
  },
  button: {
    flex: 1,
  },
  textview: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "white",
    fontWeight: "600",
    fontSize: 20,
    textShadowColor: "black",
    textShadowRadius: 4,
  },
});

export default CategoryGridTitle;
