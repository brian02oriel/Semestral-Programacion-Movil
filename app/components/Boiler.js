import React, { Component } from 'react';
import { AppRegistry, FlatList, StyleSheet, Text, View } from 'react-native';

export default class FlatListBasics extends Component {
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={[
            {key: 'Opción #1'},
            {key: 'Opción #2'},
            {key: 'Opción #3'},
            {key: 'Opción #4'},
            {key: 'Opción #5'},
            {key: 'Opción #6'},
            {key: 'Opción #7'},
            {key: 'Opción #8'},
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})

// skip this line if using Create React Native App
AppRegistry.registerComponent('Boiler', () => FlatListBasics);
