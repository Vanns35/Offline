import React from 'react';
import { Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import Message_Stores from './MessagesScreen/Message_Stores';
import Message_Friends from './MessagesScreen/Message_Friends';

class Message_Friend extends React.Component {
 
   static navigationOptions = { header: null };
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
       <Message_Friends/>
      </View>
    );
  }
}

class Message_Store extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
       <Message_Stores/>
      </View>
    );
  }
}

const TabNavigator = createMaterialTopTabNavigator({
  Message_Friend: Message_Friend,
  Message_Store: Message_Store,
  
},
{
  initialRouteName: "Message_Friend",
  tabBarOptions: {
  style: {
    backgroundColor: 'grey',
  },
}
}
);

export default createAppContainer(TabNavigator);