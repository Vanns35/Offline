import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer , withNavigation } from 'react-navigation';
import Colors from "../../constants/Colors";
import MainTabNavigator from "./MainTabNavigator";
import AuthNavigator from "./AuthNavigator";
import ThreadScreen from "../screens/ThreadScreen";
import ProductScreen from "../screens/ProductScreen";
import Visit_Store from "../screens/Visit_Store";

const MainNavigator = createStackNavigator(
  {
    Auth:AuthNavigator,
    Main:MainTabNavigator,
     Thread: {
      screen: ThreadScreen,
      navigationOptions: {
        headerStyle: {
          ...Platform.select({
            ios: {
              borderBottomWidth: "0px"
            }
          }),
          height: 70,
          elevation: 0
        },
        headerTintColor: Colors.blackColor,
        headerTitleStyle: { fontSize: 14, color: Colors.blackColor }
      }
    },

     Product: {
      screen: ProductScreen,
      navigationOptions: {
        headerTintColor: "white",
        headerTransparent: true
      }
    },

      Visit_Store1: {
      screen: Visit_Store,
      navigationOptions: {
        headerTintColor: "white",
        headerTransparent: true
      }
    },
    
  },
  
  {
    initialRouteName: 'Auth',
    headerMode: 'none',
    defaultNavigationOptions: ({ navigation }) => ({
      headerTitleStyle: {
        fontWeight: 'bold',
        textAlign: 'center',
        alignSelf: 'center',
        flex: 1,
        fontFamily: 'FallingSkyCond'
      }
    })
  }
);


export default VendorAppNavigator = createAppContainer(MainNavigator);

console.disableYellowBox = true;