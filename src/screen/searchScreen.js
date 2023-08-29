import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import SearchBar from '../component/searchBar';
import yelp from '../api/yelp';
import useResults from '../hook/useResults';
import ResultsList from '../component/resultsList';

const SearchScreen = ({navigation}) => {

  const [term, setTerm] = useState('');
  const [searchApi, results, errorMsg] = useResults();

  const filterResult = (price) => {
    //filter berdasarkan harga === $ || $$ | $$$
    return results.filter(result => {
      return result.price === price
    })
  }
  return (
    <ScrollView>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmitted={() => searchApi(term)}
      />
      {errorMsg ? <Text style={{color: 'white'}}>{errorMsg}</Text> : null}
      {/* <View>
        <Text style={{color: 'white'}}>Found {results.length} Results</Text>
      </View> */}
      <ResultsList results={filterResult('$')}  title="Cost Effective" navigation={navigation}/>
      <ResultsList results={filterResult('$$')} title="Bit Pricier" navigation={navigation}/>
      <ResultsList results={filterResult('$$$')} title="Big Spender" navigation={navigation}/>
    </ScrollView>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({});
