import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CategoriesScreen from "./screens/CategoriesScreen";
import MealsOverView from "./screens/MealsOverView";
import MealDetailScreen from "./screens/MealDetailScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import FavoriteScreen from "./screens/FavoriteScreen";
import {Ionicons} from '@expo/vector-icons'

export default function App() {
  const Stack = createNativeStackNavigator();
  const Drawer = createDrawerNavigator();
  const DrawerNavigation = () => {
    return (
      <Drawer.Navigator>
        <Drawer.Screen
          name="Categories"
          component={CategoriesScreen}
          options={{
            title: "All Categories",
            drawerIcon:({color,size}) => <Ionicons name='list' color={color} size={size} />
          }}
        />
        <Drawer.Screen name="Favorites" component={FavoriteScreen}
          options={{
            drawerIcon:({color,size}) => <Ionicons name='star' color={color} size={size} />
          }}
        />
      </Drawer.Navigator>
    );
  };
  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: "white" },
            headerTintColor: "black",
            contentStyle: { backgroundColor: "#f1faee" },
          }}
        >
          <Stack.Screen
            name="Meals App"
            component={DrawerNavigation}
            options={{headerShown:false}}
          />
          <Stack.Screen
            name="Meals Overview"
            component={MealsOverView}
            options={({ route }) => {
              const catName = route.params.categoryTitle;
              return {
                title: catName,
              };
            }}
          />
          <Stack.Screen name="Meal Detail" component={MealDetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    marginTop: "8%",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
