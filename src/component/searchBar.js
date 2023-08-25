import {StyleSheet, Text, View, TextInput} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';

const SearchBar = ({term, onTermChange, onTermSubmitted}) => {
  return (
    <View style={styles.searchContainer}>
      <Icon style={{marginLeft: 5}} name="search1" size={25} />
      <TextInput
      autoCapitalize='none'
      autoCorrect={false}
        style={{marginLeft: 5, flex: 1}}
        placeholder="Search"
        value={term}
        onChangeText={onTermChange}
        onEndEditing={onTermSubmitted}
      />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  searchContainer: {
    borderWidth: 1,
    borderColor: 'white',
    // padding: 10,
    borderRadius: 7,
    backgroundColor: '#fafafa',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
