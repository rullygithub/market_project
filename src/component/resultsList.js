import {StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';
import React from 'react';
import ResultsDetails from './resultsDetails';
import { useNavigation } from '@react-navigation/native';

const ResultsList = ({title, results}) => {
if(!results.length) {
  return null;
}
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.titleStyle}>{title}</Text>
      <FlatList
      showsHorizontalScrollIndicator={false}
        horizontal
        data={results}
        keyExtractor={result => result.id}
        renderItem={({item}) => {
          return (
            <TouchableOpacity onPress={() => navigation.navigate('ResultShow', {id: item.id})}>
              <ResultsDetails result={item}  />
            </TouchableOpacity>
            
          )
        }}
      />
    </View>
  );
};

export default ResultsList;

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    marginTop: 20,
  },
  titleStyle: {
    color: 'white',
    fontWeight: 'bold',
  },
});
