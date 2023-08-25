import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import SearchBar from '../component/searchBar';
import yelp from '../api/yelp';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [results, setResults] = useState([]);
  const [errorMsg, setErrorMsg] = useState('');

  const searchApi = async (searchTerm) => {
    try {
      const response = await yelp.get('/search', {
        params: {
          limit: 50,
          term: searchTerm,
          location: 'san jose',
        },
      });
      setResults(response.data.businesses);
    } catch (e) {
      setErrorMsg('Something went wrong')
    }
  };
  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmitted={() => searchApi(term)}
      />
      {errorMsg ?<Text style={{color: 'white'}}>{errorMsg}</Text> : null }
      <View>
        <Text style={{color: 'white'}}>Found {results.length} Results</Text>
      </View>
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({});
