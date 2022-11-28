import { StyleSheet, Text, View, Image, ScrollView, Button } from "react-native";
import List from "../components/List";
import { LogBox } from 'react-native';
import {useEffect,useLayoutEffect} from 'react'
import BookmarkButton from "../components/BookmarkButton";
const MealDetailScreen = ({ route,navigation }) => {
  const {
    imageUrl,
    title,
    duration,
    complexity,
    affordability,
    ingredients,
    steps,
  } = route.params.mealDetails;

  const handleBtn = () => {
    console.log("handleBtn tapped");
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return <BookmarkButton icon={'star'} color={'yellow'} onPress={handleBtn} />
      }
    })
  })

  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);    
}, [])

  return (
    <ScrollView nestedScrollEnabled={true} style={styles.mealContainer}  >
      <Image style={styles.img} source={{ uri: imageUrl }} />
      <View style={styles.txtContainer}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.innerTxtContainer}>
          <Text style={styles.innertxt}>{duration}m</Text>
          <Text style={styles.innertxt}>{complexity.toUpperCase()}</Text>
          <Text style={styles.innertxt}>{affordability.toUpperCase()}</Text>
        </View>
      </View>
      <View style={{alignItems:'center'}}>
        <View style={{ width: "100%" }}>
          <List title={"Ingredients"} list={ingredients} />
          <List title={"Steps"} list={steps} />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mealContainer: {
    flex: 1,
    backgroundColor: "black",
  },
  txtContainer: {
    // backgroundColor: "red",
    width: "100%",
    height: 80,
    alignItems: "center",
    padding: 10,
  },
  img: {
    width: "100%",
    height: 250,
  },
  title: {
    fontSize: 22,
    fontWeight: "800",
    marginBottom: 10,
  },
  innerTxtContainer: {
    flex: 1,
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
  },
  innertxt: {
    fontWeight: "700",
    color: "gray",
    marginHorizontal: 5,
  },
});

export default MealDetailScreen;
