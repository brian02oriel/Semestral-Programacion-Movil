/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

 //Boiler original
 
import React, { Component } from "react";
import { AppRegistry, FlatList, StyleSheet, Text, View} from 'react-native';

export default class FlatListBasics extends Component {
  constructor(props){
    super(props);
    this.state = {
     // loading: false,
      list:[]
    }
  }

async componentDidMount() {
    const response = await fetch(`http://192.168.2.122:3000/list`);
    const json = await response.json();
    //const str = JSON.stringify(json);
    //console.log(json);
    this.setState({ list: json });
    console.log(this.state.list);
    //this.makeRequest();
  }

  render() {
    return (
      <View style = {styles.container}>
        <FlatList style={styles.list}
        data ={this.state.list} 
        renderItem={(data) => <Text style={styles.item}>{data.optionName}</Text>}
        keyExtractor = {(data, index) => index.toString()}
        
        />
      </View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#e5e5e5"
  },
  list:{
    flex: 1,
    backgroundColor: 'red'
  },
  item: {
    fontSize: 18,
    fontFamily: 'Verdana',
    backgroundColor: 'blue'
  }
});
AppRegistry.registerComponent('Boiler', () => FlatListBasics);
