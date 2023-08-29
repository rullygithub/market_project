import { StyleSheet, Text, View , TouchableOpacity} from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/AntDesign'
import SearchBar from './searchBar'
import { useNavigation } from '@react-navigation/native'

const HeaderAll = () => {
    const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity onPress={() => navigation.goBack()}>
        <Icon name="arrowleft" size={20}/>
        </TouchableOpacity>
      </View>
      {/* <SearchBar/> */}
      <View>
        <Icon name="sharealt" size={20}/>
      </View>
    </View>
  )
}

export default HeaderAll

const styles = StyleSheet.create({
    container: {
        padding: 10,
        paddingHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    }
})