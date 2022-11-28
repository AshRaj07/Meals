import { View, Text, Image, StyleSheet, Pressable } from "react-native";

const MealItem = ({ title, duration, complexity, affordability, imageUrl, onPress}) => {
  return (
    <Pressable  style={({pressed}) => (pressed ? styles.btnPressed : null)} onPress={onPress}>
      <View style={styles.mealItemContainer}>
        <Image
          source={{ uri: imageUrl }}
          style={styles.img}
          resizeMode={"cover"}
        />
        <View style={styles.txtContainer}>
          <Text style={styles.title}>{title}</Text>
          <View style={styles.innerTxtContainer}>
            <Text style={styles.innertxt}>{duration}m</Text>
            <Text style={styles.innertxt}>{complexity.toUpperCase()}</Text>
            <Text style={styles.innertxt}>{affordability.toUpperCase()}</Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  mealItemContainer: {
    flex: 1,
    borderRadius: 10,
    marginVertical: 20,
    // width: 350,
    overflow: "hidden",
  },btnPressed:{
    opacity:0.8,
  },
  img: {
    width: "100%",
    height: 175,
    overflow:'hidden'
  },
  txtContainer: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
    padding: 10,
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

export default MealItem;
