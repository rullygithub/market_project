import {StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react';
import ResultsDetails from './resultsDetails';

const ResultsList = ({title, results}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleStyle}>{title}</Text>
      <FlatList
      showsHorizontalScrollIndicator={false}
        horizontal
        data={results}
        keyExtractor={result => result.id}
        renderItem={({item}) => {
          return <ResultsDetails result={item} />
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
