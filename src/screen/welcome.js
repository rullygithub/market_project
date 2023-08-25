import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import { Button } from 'react-native-paper';
import Animated, {Easing} from 'react-native-reanimated';

const Welcome = ({navigation}) => {

    // const opacity = new Animated.Value(0);
    // Animated.timing({
    //     toValue: 1,
    //     duration: 1000,
    //     easing: Easing.ease,
    // }).start();
  return (
    <Animated.View style={styles.container}>
      
      <View style={styles.textHeading}>
      <Text style={styles.textH}>Selamat Datang di Aplikasi Kami</Text>
      </View>

      <View>
        <Button
          mode="contained"
          onPress={() => navigation.navigate('Feature')}>
          Selanjutnya
        </Button>
      </View>
    </Animated.View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  textHeading: {
    marginBottom: 30,
    marginHorizontal: 20
  },
  textH: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'purple',
    textAlign: 'center',

  }
});
