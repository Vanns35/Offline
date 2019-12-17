
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';
import HomeScreen from '../screens/HomeScreen';
import UserProfile from '../screens/UserProfile';


const MainNavigator = createStackNavigator(
  {
    Signup:SignUpScreen,
    Login:LoginScreen,
    Home:HomeScreen,
    Profile:UserProfile,
  },
  {
    initialRouteName: 'Login',
    // headerMode: 'float',
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


export default AppContainer = createAppContainer(MainNavigator);

console.disableYellowBox = true;