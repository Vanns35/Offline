import React from "react";
import { Platform } from "react-native";
import {
  createBottomTabNavigator
} from "react-navigation-tabs";
import { createStackNavigator } from 'react-navigation-stack';
import Icon from 'react-native-vector-icons/Ionicons';
import TabBarIcon from "../components/TabBarIcon";
import HomeScreen from "../screens/HomeScreen";
import SearchScreen from "../screens/Explore";
import Colors from "../constants/Colors";
import Setting from "../screens/Setting";
import Notifications from "../screens/Notifications";
import Search from "../screens/Search";
import Switch from "../screens/Switch";


const StackNavOptions = {
  headerStyle: { borderBottomColor: Colors.tabBarBorderTop, height: 70 },
  headerTitleStyle: { fontSize: 14, color: Colors.blackColor }
};

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen
  },
  {
    navigationOptions: { ...StackNavOptions }
  }
);

HomeStack.navigationOptions = {

  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-home" : "md-home"}
    />
  )
};

const ExploreStack = createStackNavigator(
  {
    Explore: SearchScreen
  },
  {
    navigationOptions: {
      ...StackNavOptions
    }
  }
);

ExploreStack.navigationOptions = {
  tabBarLabel: 'Explore',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-rocket" : "md-rocket"}
    />
  )
};

const SearchStack = createStackNavigator(
  {
    Search: Search
  },
  {
    navigationOptions: {
      ...StackNavOptions
    }
  }
);

 SearchStack.navigationOptions = {
  tabBarLabel: 'Search',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-search" : "md-search"}
    />
  )
};

const NotificationStack = createStackNavigator(
  {
    Notifications: Notifications
  },
  {
    navigationOptions: { ...StackNavOptions }
  }
);

NotificationStack.navigationOptions = {
  tabBarLabel: 'Notifications',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-notifications" : "md-notifications"}
    />
  )
};

const ProfileStack = createStackNavigator(
  {
    Profile: Setting
  },
  {
    navigationOptions: { ...StackNavOptions }
  }
);

ProfileStack.navigationOptions = {
  tabBarLabel: 'Profile',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-person" : "md-person"}
    />
  )
};

const SettingStack = createStackNavigator(
  {
    Setting: Switch
  },
  {
    navigationOptions: { ...StackNavOptions }
  }
);

SettingStack.navigationOptions = {
  tabBarLabel: 'Setting',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-text" : "md-text"}
    />
  )
};

export default createBottomTabNavigator(
  {
    HomeStack,
    ExploreStack,
    SearchStack,
    NotificationStack,
    ProfileStack,
    SettingStack,
  },
  {
    initialRouteName: "HomeStack",
    headerMode: "none",
    tabBarOptions: {
      showLabel: true,
      style: {
        borderTopColor: Colors.tabBarBorderTop
      }
    }
  }
);
