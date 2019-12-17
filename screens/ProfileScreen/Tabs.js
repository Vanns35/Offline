import React from 'react';
import { Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import Saved_Stores from './Saved_Stores';
import MyUploads from './MyUploads';
import Saved_Products from './Saved_Products';

class StoreScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
       <Saved_Stores/>
      </View>
    );
  }
}

class SavedScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
       <Saved_Products/>
      </View>
    );
  }
}

class UploadScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
       <MyUploads/>
      </View>
    );
  }
}

const TabNavigator = createMaterialTopTabNavigator({
  Store: StoreScreen,
  Saved: SavedScreen,
  Upload: UploadScreen,
},
{
  initialRouteName: "Store",
  tabBarOptions: {
  style: {
    backgroundColor: 'grey',
  },
}
}
);

export default createAppContainer(TabNavigator);