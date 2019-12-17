import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Image,
  Alert,
  TouchableOpacity
} from 'react-native';

export default class SignUpScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: false, 
      disabled: false,
      fullName: null,
      email   : null,
      phone_no:null,
      password: null,
      confirm_password:null,
    }
  }

  onClickListener = (viewId) => {
    Alert.alert("Alert", "Button pressed "+viewId);
  }

  saveData = () =>
      {
        alert(this.state.email);
          this.setState({ loading: true, disabled: true }, () =>
          {

              let details = {
        'fullName': this.state.fullName,
        'email': this.state.email,
        'phone_no':this.state.phone_no,
        'password': this.state.password,
    };

    let formBody = [];
    for (let property in details) {
        let encodedKey = encodeURIComponent(property);
        let encodedValue = encodeURIComponent(details[property]);
        formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");

              fetch('http://geogreenapps.com/offline/Api/Login/register',
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
                    this.props.navigation.navigate('Home');

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
    return (
      
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/male-user/ultraviolet/50/3498db'}}/>
          <TextInput style={styles.inputs}
              placeholder="Full name"
              keyboardType="email-address"
              underlineColorAndroid='transparent'
              onChangeText={(fullName) => this.setState({fullName})}/>
        </View>

        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/message/ultraviolet/50/3498db'}}/>
          <TextInput style={styles.inputs}
              placeholder="Email"
              keyboardType="email-address"
              underlineColorAndroid='transparent'
              onChangeText={(email) => this.setState({email})}/>
        </View>

         <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/message/ultraviolet/50/3498db'}}/>
          <TextInput style={styles.inputs}
              placeholder="Mobile Number"
              keyboardType={'phone-pad'}
              underlineColorAndroid='transparent'
              onChangeText={(phone_no) => this.setState({phone_no})}/>
        </View>
        
        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/key-2/ultraviolet/50/3498db'}}/>
          <TextInput style={styles.inputs}
              placeholder="Password"
              secureTextEntry={true}
              underlineColorAndroid='transparent'
              onChangeText={(password) => this.setState({password})}/>
        </View>

         <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/key-2/ultraviolet/50/3498db'}}/>
          <TextInput style={styles.inputs}
              placeholder="Confirm Password"
              secureTextEntry={true}
              underlineColorAndroid='transparent'
              onChangeText={(confirm_password) => this.setState({confirm_password})}/>
        </View>

        <TouchableHighlight style={[styles.buttonContainer, styles.signupButton]} onPress={() => this.saveData()}>
          <Text style={styles.signUpText}>Sign up</Text>
        </TouchableHighlight>

         <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')}
         style={styles.buttonContainer}>
            <Text>Already a User ??? Login </Text>
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
      marginBottom:20,
      flexDirection: 'row',
      alignItems:'center'
  },
  inputs:{
      height:45,
      marginLeft:16,
      borderBottomColor: '#FFFFFF',
      flex:1,
  },
  inputIcon:{
    width:30,
    height:30,
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
  signupButton: {
    backgroundColor: "#3498db",
  },
  signUpText: {
    color: 'white',
  }
});