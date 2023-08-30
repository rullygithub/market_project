import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

const TitleBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <TouchableOpacity>
          <Text style={styles.textBar}>Layanan</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.textBar}>Seller</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.textBar}>Pengiriman</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.textBar}>Ulasan</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default TitleBar;
const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
    marginTop: 20,
  },
  textBar: {
    marginRight: 10,
  },
});
