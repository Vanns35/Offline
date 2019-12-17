import React from 'react';
import { Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import Store_Overview from '../Store_Overview';
import About_Store from '../About_Store';


class Overview extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
           <Store_Overview/>
      </View>
    );
  }
}

class About extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
       <About_Store/>
      </View>
    );
  }
}

const TabNavigator = createMaterialTopTabNavigator({
  Products: Overview,
  About: About,
 
},
{
  initialRouteName: "Products",
  tabBarOptions: {
  style: {
    backgroundColor: 'grey',
  },
}
}
);

export default createAppContainer(TabNavigator);