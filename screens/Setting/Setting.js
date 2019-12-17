import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import DrawerNavigator from '../Drawer/DrawerNavigator';
 
export default class Setting extends Component {
  static navigationOptions = { header: null };
 
  render() {
    return (
     <DrawerNavigator/>
    );
  }
}
 
const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    paddingTop: 20,
    alignItems: 'center',
    marginTop: 50,
    justifyContent: 'center',
  },
});