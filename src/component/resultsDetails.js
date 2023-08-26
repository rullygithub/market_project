import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const ResultsDetails = ({result}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: result.image_url}} />
      <Text style={{color: 'white'}}>{result.name}</Text>
      <Text style={{color: 'white', fontSize: 12}}>{result.transactions}</Text>
      <View style={styles.bodyResult}>
      <Text style={{color: 'white', fontWeight: 'bold', fontSize: 20}}>
        {result.price}
      </Text>
      <Text style={{color: 'white', fontSize: 12}}>{result.review_count} Review</Text>
      </View>
    </View>
  );
};

export default ResultsDetails;

const styles = StyleSheet.create({
    container: {
        marginRight: 10
    },
  image: {
    width: 200,
    height: 150,
    objectFit: 'contain',
    borderRadius: 5,
    margin: 3,
  },
  bodyResult: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  }
});
