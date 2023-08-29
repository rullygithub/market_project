import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import SearchScreen from '../searchScreen';
import Footer from '../../component/footer';


const Header = () => {
  return (
    <View style={styles.header}>
      <TouchableOpacity>
        <Image
          style={{width: 100, height: 80, objectFit: 'contain'}}
          source={require('./../../../assets/images/Untitled-2.png')}
        />
      </TouchableOpacity>
      <View style={styles.menuHeader}>
        
        <TouchableOpacity>
          <Image
            source={require('../../../assets/icons/heart.png')}
            style={{width: 23, height: 23}}
          />
          
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require('../../../assets/icons/cart.png')}
            style={{width: 30, height: 30, marginLeft: 20}}
          />
          <View style={styles.badges}>
            <Text style={{color: 'white'}}>0</Text>
          </View>
        </TouchableOpacity>
      </View>
      
    </View>
  );
};
const Homescreen = () => {
  return <View style={styles.container}>
    <Header/>
    <SearchScreen/>
    <Footer/>
  </View>;
};

export default Homescreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  menuHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  badges: {
    width: 22,
    height: 22,
    backgroundColor: 'red',
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    top:-15,
    left: 15
  }
});
