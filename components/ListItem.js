import {View,Text, StyleSheet} from 'react-native'

const ListItem = ({listitem}) => {
  return (
    <View style={styles.container}>
        <Text style={styles.txt}>{listitem}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        width:'80%',
        backgroundColor:'gray',
        borderRadius:10,
        width:300,
        marginVertical:5,
        alignItems:'center',
        justifyContent:'center',
        padding:10
    },
    txt : {
        color:'white'
    }
})
export default ListItem