
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  Image,
  ActivityIndicator
} from 'react-native';

export default class LoginScreen extends Component {

  constructor(props){
    super(props);
    this.state={
      loading: false, 
      disabled: false,
      email : null,
      password : null 
    }
  }


  saveData = () =>
      {
        alert(this.state.email);
          this.setState({ loading: true, disabled: true }, () =>
          {

              let details = {
        'email': this.state.email,
        'password': this.state.password
    };

    let formBody = [];
    for (let property in details) {
        let encodedKey = encodeURIComponent(property);
        let encodedValue = encodeURIComponent(details[property]);
        formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");

              fetch('http://geogreenapps.com/offline/Api/Login/login',
              {
                  method: 'POST',
        headers: {
            'Authorization': 'Bearer token',
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: formBody
   
              }).then((response) => response.json()).then((responseJson) =>
              {
                  if(responseJson.message == "ok")
                  {
                    // AsyncStorage.setItem('user','name');
                    this.props.navigation.navigate('Main');

                    alert(responseJson.message);
                    this.setState({ loading: false, disabled: false });
                  }
                  
                  else
                  {
                    alert(responseJson.message);
                    //Actions.Index();
                    this.setState({ loading: false, disabled: false });
                  }
              }).catch((error) =>
              {
                  console.error(error);
                  this.setState({ loading: false, disabled: false });
              });
          });
      }

  render() {

    if(this.state.loading == true){
      return(
      <ActivityIndicator/>
      );
    }

    return (
      <View style={styles.container}>
       
        <TouchableOpacity style={[styles.buttonContainer, styles.fabookButton]}>
          <View style={styles.socialButtonContent}>
            <Image style={styles.icon} source={{uri: 'https://png.icons8.com/facebook/androidL/40/FFFFFF'}}/>
            <Text style={styles.loginText}>Continue with facebook</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.buttonContainer, styles.googleButton]}>
          <View style={styles.socialButtonContent}>
            <Image style={styles.icon} source={{uri: 'https://png.icons8.com/google/androidL/40/FFFFFF'}}/>
            <Text style={styles.loginText}>Sign in with google</Text>
          </View>
        </TouchableOpacity>

         <View style={styles.inputContainer}>
          <Image style={[styles.icon, styles.inputIcon]} source={{uri: 'https://png.icons8.com/password/androidL/40/3498db'}}/>
          <TextInput style={styles.inputs}
              placeholder="Email"
              keyboardType="email-address"
              underlineColorAndroid='transparent'
              onChangeText = {(text) => this.setState({ email: text })}
              />
        </View>
        
        <View style={styles.inputContainer}>
          <Image style={[styles.icon, styles.inputIcon]} source={{uri: 'https://png.icons8.com/envelope/androidL/40/3498db'}}/>
          <TextInput style={styles.inputs}
              placeholder="Password"
              secureTextEntry={true}
              underlineColorAndroid='transparent'
              onChangeText = {(text) => this.setState({ password: text })}
              />
        </View>
     
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Profile')}
        style={styles.restoreButtonContainer}>
            <Text>Forgot?</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => this.props.navigation.navigate('Main')}
        style={[styles.buttonContainer, styles.loginButton]}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => this.props.navigation.navigate('Signup')}
        style={styles.buttonContainer}>
            <Text>Register</Text>
        </TouchableOpacity>

          <TouchableOpacity onPress={() => this.props.navigation.navigate('VendorAppNavigator')}
        >
            <Text>Vendor</Text>
        </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ebedf0',
  },
  inputContainer: {
      borderBottomColor: '#F5FCFF',
      backgroundColor: '#FFFFFF',
      borderRadius:30,
      borderBottomWidth: 1,
      width:250,
      height:45,
      marginBottom:15,
      flexDirection: 'row',
      alignItems:'center'
  },
  inputs:{
      height:45,
      marginLeft:16,
      borderBottomColor: '#FFFFFF',
      flex:1,
  },
  icon:{
    width:30,
    height:30,
  },
  inputIcon:{
    marginLeft:15,
    justifyContent: 'center'
  },
  buttonContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
  },
  loginButton: {
    backgroundColor: '#3498db',
  },
  fabookButton: {
    backgroundColor: "#3b5998",
  },
  googleButton: {
    backgroundColor: "#ff0000",
  },
  loginText: {
    color: 'white',
  },
  restoreButtonContainer:{
    width:250,
    marginBottom:15,
    alignItems: 'flex-end'
  },
  socialButtonContent:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center', 
  },
  socialIcon:{
    color: "#FFFFFF",
    marginRight:5
  }
});