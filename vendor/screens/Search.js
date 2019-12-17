import React from 'react';
import { Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import Search_Stores from './Search_Stores';
import Search_Products from './Search_Products';


class Search_Product extends React.Component {
     static navigationOptions = { header: null };

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
       <Search_Products/>
      </View>
    );
  }
}

class Search_Store extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
       <Search_Stores/>
      </View>
    );
  }
}

const TabNavigator = createMaterialTopTabNavigator({
  Search_Product: Search_Product,
  Search_Store: Search_Store,
},
{
  initialRouteName: "Search_Product",
  tabBarOptions: {
  style: {
    backgroundColor: 'grey',
  },
}
}
);

export default createAppContainer(TabNavigator);