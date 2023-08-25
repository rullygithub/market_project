import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'

const ResultsList = ({title, results}) => {
  return (
    <View>
      <Text style={styles.titleStyle}>{title}</Text>
      <FlatList
        horizontal
        data={results}
        keyExtractor={(result) => result.id}
        renderItem={({item}) => {
            return <Text style={{color: 'white'}}>
                {item.name}
            </Text>
        }}
      />
    </View>
  )
}

export default ResultsList

const styles = StyleSheet.create({
    titleStyle: {
        color: 'white',
        fontWeight: 'bold',
    }
})