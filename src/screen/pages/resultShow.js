import {FlatList, StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import yelp from '../../api/yelp';
import HeaderAll from '../../component/headerAll';
import Icon from 'react-native-vector-icons/AntDesign';
import Footer from '../../component/footer';

const ResultShow = ({route}) => {
  const [result, setResult] = useState(null);
  const id = route.params.id;

  const getResult = async id => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };
  useEffect(() => {
    getResult(id);
  }, []);

  if (!result) {
    return null;
  }

  return (
    
    <View style={styles.container}>
      <HeaderAll />

      <ScrollView>

      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={result.photos}
        keyExtractor={photos => photos}
        renderItem={({item}) => {
          return (
            <View style={styles.containerImg}>
              <Image source={{uri: item}} style={styles.images} />
              <Icon style={{position:'absolute', top: 40, right: 30}} name="hearto" size={30} color="#F31559"/>
            </View>
          );
        }}
      />
      <View style={styles.bodyName}>
        <Text style={styles.txtName}>{result.name}</Text>
        <Text style={styles.txtPrice}>{result.price}</Text>
        <View>
          <Text>{result.transactions}</Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Icon name="star" color="#FD8D14" />
          <Text style={{marginLeft: 5, fontWeight: 'bold'}}>
            {result.rating}
          </Text>
          <Text style={{marginLeft: 5, color: '#068FFF', fontSize: 13}}>
            ({result.review_count})
          </Text>
        </View>
      </View>
      </ScrollView>
      {/* <Footer/> */}
    </View>
  );
};

export default ResultShow;

const styles = StyleSheet.create({
  container: {
    position: 'relative'
  },
  containerImg: {
    backgroundColor: 'white',
    paddingVertical: 15,
  },
  images: {
    width: 390,
    height: 400,
    objectFit: 'contain',
  },
  bodyName: {
    paddingHorizontal: 15,
    paddingTop: 20,
  },
  txtName: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  txtPrice: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#F6635C',
  },
  // footer: {
  //   position: 'absolute',
  //   bottom: 0,
  //   backgroundColor: 'red'
  // }
});
