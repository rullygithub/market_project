import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import {Button} from 'react-native-paper'

const FeatureSecond = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.imgHeading} source={require('./../../assets/images/2.png')}/>
      
      <View style={styles.textBody}>
      <Text style={{color: 'white', fontWeight: 'bold'}}>Fitur Unggulan Aplikasi Kami</Text>
      <Text style={{color: 'white', fontWeight: 'bold'}}>Temukan berbagai fitur menarik dalam aplikasi kami.</Text>
      </View>

      <Button mode='contained' onPress={() => navigation.navigate('FeaturThree')}>Lanjutkan</Button>
    </View>
  )
}

export default FeatureSecond

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imgHeading: {
        width: 150,
        height: 300,
        objectFit: 'contain'
    },
    textBody: {
        marginBottom: 20,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    }
})