  import React from 'react';
  import {
    Image,
    View,
    TouchableOpacity,
    Dimensions,
    Platform,
    ScrollView,
    Text,
    StyleSheet,
    Button
  } from 'react-native';
  import {Card } from "react-native-elements";
  import Icon from 'react-native-vector-icons/Ionicons';
  import { withNavigation } from "react-navigation";

  let { width } = Dimensions.get('window');
  let { height } = Dimensions.get('window');

 
const Switch = ({navigation}) => (

      
          <View style={styles.container}>
           
              <Card containerStyle={styles.card}
               title='VENDOR'>
        <Text style={{marginBottom: 10}}>
          If you are a shop owner and contain one or more branch click here
        </Text>

         <Button onPress={() => navigation.navigate("VendorAppNavigator")}
    icon={<Icon name='code' color='#ffffff' />}
    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
    title='VIEW NOW' />

      </Card>
           

             <TouchableOpacity
              delayPressIn={70}
              activeOpacity={0.8}
            >
               <Card containerStyle={styles.card}
               title='WHOLESALER'>
        <Text style={{marginBottom: 10}}>
          If you are a shop owner and contain one or more branch click here
        </Text>

      </Card>   
            </TouchableOpacity>

          </View>

      );

   

  const styles = StyleSheet.create({
      container: {
          alignItems: 'center',
          justifyContent: 'center'
      },
      card: {
         width: ((Dimensions.get("window").width) - 50) , 
         height :((Dimensions.get("window").height/2) - 120),
         marginVertical:20
      },
       text: {
          textAlign:'center',
          color: '#000000', 
          fontSize : 15
      },
  });

  export default withNavigation(Switch);
