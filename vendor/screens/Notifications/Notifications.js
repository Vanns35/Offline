import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
 
export default class Notifications extends Component {
 
  render() {
    return (
      <View style={styles.MainContainer}>
        <Text style={{ fontSize: 23 ,     textAlign:'center'}}> Your Notifications will be displayed here </Text>
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    alignItems: 'center',
   
    justifyContent: 'center',
  },
});