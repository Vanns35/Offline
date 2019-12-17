import React, { Component } from 'react';

import { StyleSheet, ScrollView, Text, View, PixelRatio,
 TouchableOpacity, Image, TextInput, Alert } from 'react-native';

import ImagePicker from 'react-native-image-picker';

//import RNFetchBlob from 'rn-fetch-blob';

export default class Main extends Component
 {
    constructor(props)
    {
        super(props);
        this.state= {
        name :'',
        type :'',
        address: '',
        description :'',
        avatarSource: null,
        image:null,
        path:null
    }
  }

  selectPhotoTapped() {
    const options = {
      quality: 1.0,
      maxWidth: 500,
      maxHeight: 500,
      storageOptions: {
        skipBackup: true
      }
    };

    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled photo picker');
      }
      else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      }
      else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      }
      else {
        let source = { uri: response.uri };

        this.setState({

            avatarSource: source,
          image: response.data,
          path:response.path
        });
      }
    });
  }


  uploadImageToServer = () => {

    RNFetchBlob.fetch('POST', 'http://192.168.2.20/', {
      Authorization: "Bearer access-token",
      otherHeader: "foo",
      'Content-Type': 'multipart/form-data',
    }, [
        { name: 'image', filename: 'image.png', type: 'image/png', data: this.state.image },
        { name: 'category', data: this.state.category },
        { name: 'name', data: this.state.name },
        { name: 'price', data: this.state.price },
        { name: 'description', data: this.state.description },
        { name: 'oldprice', data:this.state.oldprice},

      ]).then((resp) => {

        var tempMSG = resp.data;

        tempMSG = tempMSG.replace(/^"|"$/g, '');

        Alert.alert(tempMSG);

      }).catch((err) => {
        // ...
      })

  }


  render() {
    const { image } = this.state

    return(

      <ScrollView style = {styles.container}>
        <View>
             <Text style = {styles.text}> Product Name </Text>
            <TextInput 
               
               placeholder = "Product Name"
               
               underlineColorAndroid="black"
               style={styles.textInput}
               onChangeText = {(data) => this.setState({ name: data })}
               
               />

                <TouchableOpacity style={{backgroundColor:'gray',margin:10,padding:10}}
                onPress={this.selectPhotoTapped.bind(this)}>
                  <Text style={styles.text}>Add Product</Text>
                </TouchableOpacity>

                  {image && (

                    <Image source={this.state.avatarSource}
                    style={{
                    height:100,
                    width:100,
                    margin:10,
                    borderWidth:2,
                    borderColor:'black',
                    alignSelf:'center'}}/>

                    )}

                
            
             <Text style = {styles.text}>Category  </Text>
            <TextInput 
               
               placeholder = "Category"
               
               underlineColorAndroid="black"
               style={styles.textInput}
               onChangeText = {(data) => this.setState({ type: data })}
              
               />

                <Text style = {styles.text}> Price</Text>

               <TextInput 
               
               placeholder = "Price"
               
               underlineColorAndroid="black"
               style={styles.textInput}
               onChangeText = {(data) => this.setState({ address: data })}
              
               />

               <Text style = {styles.text}> Old Price</Text>

               <TextInput 
               
               placeholder = "Old Price"
               
               underlineColorAndroid="black"
               style={styles.textInput}
               onChangeText = {(data) => this.setState({ address: data })}
              
               />

              
              <Text style = {styles.text}> Description </Text>
               <TextInput 
               
               placeholder = "Description"
               
               underlineColorAndroid="black"
               style={styles.textInput}
               onChangeText = {(data) => this.setState({ description: data })}
               
               />

              
            <TouchableOpacity style={styles.button}
             // onPress={this.uploadImageToServer} 
             >
             <Text style={styles.buttonText}>Add</Text>
           </TouchableOpacity>
           
        </View>

         </ScrollView>
      );
  }
}

const styles = StyleSheet.create({
  container : {
    backgroundColor:'#ffffff',
    flex: 1,
    margin : 20,

  },
  
  
   textInput:{
    height:40,
    fontSize : 18,
    paddingLeft :20,
    marginVertical: 15,

   },
   button: {
    width:150,
    backgroundColor:'#cdcdcd',
     borderRadius: 5,
    marginVertical: 10,
      paddingVertical: 13,alignSelf:'center'
  },
  buttonText: {
    fontSize:16,
    fontWeight:'500',
    color:'#ffffff',
    textAlign:'center',
    alignSelf:'center'
  },
   title:{
    backgroundColor:'#02edd5',
    fontSize:20,
    textAlign:'center',
    padding:18
  },
  text:{
   color: '#404d5b',
    fontSize: 18,
    fontWeight: 'bold',
    opacity: 0.8,
    
  },
   icon: {
    fontSize: 50,
    color: '#000000',
    marginTop :0 , 
    alignSelf:'center',
    alignItems:'center'
  },
});
