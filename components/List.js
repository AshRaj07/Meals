import { StyleSheet,View,Text,FlatList } from 'react-native'
import ListItem from './ListItem'

const List = ({title,list}) => {
  return (
    <View style={styles.ingredients}>
    <Text style={styles.ingTitle}>{title}</Text>
    <FlatList
      data={list}
      renderItem={(itemData) => (
        <ListItem listitem={itemData.item} />
      )}
      showsVerticalScrollIndicator={false}
      nestedScrollEnabled={true}
    />
  </View>
  )
}

const styles = StyleSheet.create({
    ingredients: {
        width: "100%",
        alignItems: "center",
        height: 300,
        paddingBottom: 20,
        // backgroundColor: "purple",
      },
      ingTitle: {
        fontSize: 25,
        fontWeight: "600",
        marginVertical: 5,
      },
})

export default List