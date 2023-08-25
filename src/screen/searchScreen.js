import {StyleSheet, Text, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import SearchBar from '../component/searchBar';
import yelp from '../api/yelp';
import useResults from '../hook/useResults';
import ResultsList from '../component/resultsList';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [searchApi, results, errorMsg] = useResults();

  const filterResult = (price) => {
    //filter berdasarkan harga === $ || $$ | $$$
    return results.filter(result => {
      return result.price === price
    })
  }
  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmitted={() => searchApi(term)}
      />
      {errorMsg ? <Text style={{color: 'white'}}>{errorMsg}</Text> : null}
      <View>
        <Text style={{color: 'white'}}>Found {results.length} Results</Text>
      </View>
      <ResultsList results={filterResult('$')} title="Cost Effective"/>
      <ResultsList results={filterResult('$$')} title="Bit Pricier"/>
      <ResultsList results={filterResult('$$$')} title="Big Spender"/>
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({});
