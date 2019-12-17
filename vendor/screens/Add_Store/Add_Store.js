import React, { Component } from 'react';
import { StyleSheet, View, Text , Button} from 'react-native';
 
export default class Add_Store extends Component {

   static navigationOptions = {
    headerRight : (navigation) => (
      <Button
        onPress={() =>navigation.navigate("Main")}
        title="Add"
        color="#fff"
      />
    ),
  };
 
  render() {
    return (
      <View style={styles.MainContainer}>
        <Text style={{ fontSize: 23 }}> Add stores here </Text>
      </View>
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