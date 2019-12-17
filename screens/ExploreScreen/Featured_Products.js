import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  FlatList,
} from 'react-native';

export default class Featured_Products extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [
        {id:1, title: "Product 1",  count:4, image:"https://lorempixel.com/400/200/nature/6/"},
        {id:2, title: "Product 2",  count:4, image:"https://lorempixel.com/400/200/nature/5/"} ,
        {id:3, title: "Product 3",  count:4, image:"https://lorempixel.com/400/200/nature/5/"} ,
        {id:1, title: "Product 1",  count:4, image:"https://lorempixel.com/400/200/nature/6/"},
        {id:2, title: "Product 2",  count:4, image:"https://lorempixel.com/400/200/nature/5/"} ,
        {id:3, title: "Product 3",  count:4, image:"https://lorempixel.com/400/200/nature/5/"} ,
      ]
    };
  }

  addProductToCart = () => {
    Alert.alert('Success', 'The product has been added to your cart')
  }

  render() {
    return (
      <View style={styles.container}>
      <Text style={styles.title}> Featured Products </Text>
        <FlatList style={styles.list}
          contentContainerStyle={styles.listContainer}
          data={this.state.data}
          horizontal
          
          keyExtractor= {(item) => {
            return item.id;
          }}
          ItemSeparatorComponent={() => {
            return (
              <View style={styles.separator}/>
            )
          }}
          renderItem={(post) => {
            const item = post.item;
            return (
              <View style={styles.card}>
                <View style={styles.imageContainer}>
                  <Image style={styles.cardImage} source={{uri:item.image}}/>
                </View>
               
              </View>
            )
          }}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop:20,
  },
  list: {
    paddingHorizontal: 10,
  },
  listContainer:{
    alignItems:'center'
  },
  separator: {
    marginTop: 10,
  },
  /******** card **************/
  card:{
    marginVertical: 8,
    backgroundColor:"white",
    flexBasis: '30%',
    marginHorizontal: 5,
  },
  cardContent: {
    paddingVertical: 5,
    justifyContent: 'space-between',
  },
  cardImage:{
    flex: 1,
    height: 90,
    width: null,
  },
  imageContainer:{
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,
  },
  /******** card components **************/
  title:{
    fontSize:16,
    flex:1,
    color:"#778899"
  },
  count:{
    fontSize:18,
    flex:1,
    color:"#B0C4DE"
  },
});  