import React, { Component } from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createStackNavigator} from 'react-navigation-stack';
import Icon from 'react-native-vector-icons/Ionicons';
import ProfileScreen from '../ProfileScreen';
import Screen1 from './Screen1';
import AddPhoto from '../AddPhoto';
import Message from "../Message";
import Screen3 from './Screen3';
import Screen4 from './Screen4';
import Switch from '../Switch';
import Screen6 from './Screen6';
import VendorAppNavigator from "../../vendor/navigation/VendorAppNavigator";

class NavigationDrawerStructure extends Component {
  //Structure for the navigatin Drawer
  toggleDrawer = () => {
    //Props to open/close the drawer
    this.props.navigationProps.toggleDrawer();
  };
  render() {
    return (
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
          {/*Donute Button Image */}
          <Icon
            name={Platform.OS === "ios" ? "ios-menu" : "md-menu"}
            size={28}
            style={{ marginRight : 15}}
            color='#ffffff'
          />
        </TouchableOpacity>
      </View>
    );
  }
}

export const SwitchNavigators = createStackNavigator({
    'Switch': { screen: Switch },
    'VendorAppNavigator': { screen: VendorAppNavigator },
},{initialRoute: 'Switch'});

const FirstActivity_StackNavigator = createStackNavigator({
  //All the screen from the Screen1 will be indexed here
  First: {
    screen: ProfileScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Profile',
      headerRight: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        alignSeft:'center',
        backgroundColor: '#FF9800',
      },
      headerTintColor: '#fff',
    }),
  },
});
 
const Screen2_StackNavigator = createStackNavigator({
  //All the screen from the Screen2 will be indexed here
  Second: {
    screen: AddPhoto,
    navigationOptions: ({ navigation }) => ({
      title: 'Demo Screen 2',
      //headerRight: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#FF9800',
      },
      headerTintColor: '#fff',
    }),
  },
});
 
const Screen3_StackNavigator = createStackNavigator({
  //All the screen from the Screen3 will be indexed here
  Third: {
    screen: Screen3,
    navigationOptions: ({ navigation }) => ({
      title: 'Demo Screen 3',
      //headerRight: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#FF9800',
      },
      headerTintColor: '#fff',
    }),
  },
});


const Screen4_StackNavigator = createStackNavigator({
  //All the screen from the Screen2 will be indexed here
  Forth: {
    screen: Screen4,
    navigationOptions: ({ navigation }) => ({
      title: 'Demo Screen 4',
      //headerRight: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#FF9800',
      },
      headerTintColor: '#fff',
    }),
  },
});

const Screen5_StackNavigator = createStackNavigator({
  //All the screen from the Screen2 will be indexed here
  Second: {
    screen: SwitchNavigators,
    navigationOptions: ({ navigation }) => ({
      title: 'Business Account',
      //headerRight: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#FF9800',
      },
      headerTintColor: '#fff',
    }),
  },
});

const Screen6_StackNavigator = createStackNavigator({
  //All the screen from the Screen2 will be indexed here
  Second: {
    screen: Screen6,
    navigationOptions: ({ navigation }) => ({
      title: 'Demo Screen 6',
      //headerRight: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#FF9800',
      },
      headerTintColor: '#fff',
    }),
  },
});

const Screen7_StackNavigator = createStackNavigator({
  //All the screen from the Screen2 will be indexed here
  Seven: {
    screen: Message,
    navigationOptions: ({ navigation }) => ({
      title: 'Messages',
      //headerRight: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#FF9800',
        
      },
      headerTintColor: '#fff',
    }),
  },
});
 
const DrawerNavigator = createDrawerNavigator(
{
  //Drawer Optons and indexing
  ProfileScreen: {
    //Title
    screen: FirstActivity_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Profile',
    },
  },
  Screen2: {
    //Title
    screen: Screen2_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Upload Photo',
    },
  },
  Screen3: {
    //Title
    screen: Screen3_StackNavigator,
    navigationOptions: {
      drawerLabel: 'About',
    },
  },
  Screen4: {
    //Title
    screen: Screen4_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Friends',
    },
  },
  SwitchNavigators: {
    //Title
    screen: Screen5_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Switch to Business',
    },
  },
   Screen6: {
    //Title
    screen: Screen6_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Logout',
    },
  },
   Screen7: {
    //Title
    screen: Screen7_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Messages',
    },
  },

},

 {
    drawerPosition: 'right',
    headerMode:'none',
  },
);
 
export default createAppContainer(DrawerNavigator);