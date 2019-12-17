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

export default class Store_Overview extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [
        {id:1, title: "The Bombay Store",  count:4, image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpPqrkfxGjs5JUsPClOqkNJxLhAvIOx4_mDINIgDMxS2TDa2cr&s"},
        {id:2, title: "Store 2",  count:4, image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9FR4kl3UgCltRPe0x0a7CdV3ceBBgbD5Dx_JtiqzP7jlHbdIR&s"} ,
        {id:3, title: "Store 3",  count:4, image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjHcdkplbmsy6aHBvdqXDrtx_CJaKZHiSRPEy-9R4JbMFO9-dYlA&s"}, 
        {id:4, title: "Store 4",  count:4, image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8R6PnyhWYWAXG96ClQFlDe8RnOAcO6pWV__7cKJMQY7OJgGoT&s"}, 
        {id:5, title: "Store 5",  count:4, image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRPLRV0hdAsSYp6PDo46ENfm8-pl6UQwsNKViRx3SFFYoTxa7opA&s"}, 
        {id:6, title: "Store 6",  count:4, image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjHcdkplbmsy6aHBvdqXDrtx_CJaKZHiSRPEy-9R4JbMFO9-dYlA&s"}, 
        {id:7, title: "Store 7",  count:4, image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpPqrkfxGjs5JUsPClOqkNJxLhAvIOx4_mDINIgDMxS2TDa2cr&s"}, 
        {id:8, title: "Store 8",  count:4, image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRPLRV0hdAsSYp6PDo46ENfm8-pl6UQwsNKViRx3SFFYoTxa7opA&s"},
        {id:9, title: "Store 9",  count:4, image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8R6PnyhWYWAXG96ClQFlDe8RnOAcO6pWV__7cKJMQY7OJgGoT&s"},
        {id:9, title: "Store 10", count:4, image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjHcdkplbmsy6aHBvdqXDrtx_CJaKZHiSRPEy-9R4JbMFO9-dYlA&s"},
      ]
    };
  }

  addProductToCart = () => {
    Alert.alert('Success', 'The product has been added to your cart')
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList style={styles.list}
          contentContainerStyle={styles.listContainer}
          data={this.state.data}
          horizontal={false}
          numColumns={2}
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
    marginVertical: 2,
    backgroundColor:"white",
    flexBasis: '45%',
    marginHorizontal: 10,
  },
  cardContent: {
    paddingVertical: 5,
    justifyContent: 'space-between',
  },
  cardImage:{
    flex: 1,
    height: 150,
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
    fontSize:12,
    flex:1,
    color:"#778899"
  },
  count:{
    fontSize:18,
    flex:1,
    color:"#B0C4DE"
  },
});  