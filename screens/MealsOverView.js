import { FlatList, StyleSheet, Text,View } from "react-native";
import MealItem from "../components/MealItem";
import { MEALS } from "../data/dummy-data";
const MealsOverView = ({ route,navigation }) => {
  const catId = route.params.categoryId;
  const mealItems = MEALS.filter(
    (mealItem) => mealItem.categoryIds.indexOf(catId) >= 0
  );
  return (
    <View style={styles.mealContainer}>
      <FlatList
        data={mealItems}
        renderItem={(itemData) => (
          <MealItem
            title={itemData.item.title}
            duration={itemData.item.duration}
            complexity={itemData.item.complexity}
            affordability={itemData.item.affordability}
            imageUrl={itemData.item.imageUrl}
            onPress={() => navigation.navigate("Meal Detail",{mealDetails:itemData.item})}
          />
        )}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mealContainer: {
    flex:1,
    alignItems:'center',
  }
})

export default MealsOverView;
