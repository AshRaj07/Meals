import React from "react";
import { FlatList } from "react-native";
import CategoryGridTitle from "../components/CategoryGridTitle";
import { CATEGORIES } from "../data/dummy-data";

const CategoriesScreen = ({ navigation }) => {
  return (
    <FlatList
      data={CATEGORIES}
      renderItem={(itemData) => {
        return (
          <CategoryGridTitle
            title={itemData.item.title}
            color={itemData.item.color}
            onPress={() => navigation.navigate("Meals Overview",{categoryId:itemData.item.id,categoryTitle:itemData.item.title})}
          />
        );
      }}
      keyExtractor={(item) => item.id}
      numColumns={2}
    />
  );
};

export default CategoriesScreen;
