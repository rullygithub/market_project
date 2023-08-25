/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Navigator from './src/component/navigator';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Welcome from './src/screen/welcome';
import FeatureScreen from './src/screen/feature';
import FeatureSecond from './src/screen/featureSecond';
import FeatureThree from './src/screen/featurThree';
import Homescreen from './src/screen/pages/homescreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="welcome" component={Welcome} options={{headerShown: false}}></Stack.Screen>
        <Stack.Screen name="Feature" component={FeatureScreen} options={{headerShown: false}}></Stack.Screen>
        <Stack.Screen name='FeaturSecond' component={FeatureSecond} options={{headerShown: false}}></Stack.Screen>
        <Stack.Screen name='FeaturThree' component={FeatureThree} options={{headerShown: false}}></Stack.Screen>
        <Stack.Screen name='Homescreen' component={Homescreen} options={{headerShown: false}}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});

export default App;
