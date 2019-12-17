
import React, { Component } from 'react';
import {View , Text , ScrollView , Image , StyleSheet} from "react-native";
import styled from "styled-components";
// import { products } from "../../dummy";
import MasonryProducts from "../../components/MasonryProducts";

const Container = styled.View`
  background-color: white;
  flex: 1;
`;


const Divider = styled.View`
  width: 100%;
  height: 1px;
  background-color: rgba(151, 151, 151, 0.2);
  margin-bottom: 8px;
  margin-top: 2px;
`;

class HomeScreenPresenter extends Component {

    constructor(props) {
   super(props);
   this.state = {
     loading: true,
     products:[]
    };
  }

  componentDidMount(){

  fetch("http://192.168.2.20/localStores/sampleTst/Api/Products/all")
  .then(response => response.json())
  .then((responseJson)=> {
    this.setState({
     loading: false,
     products: responseJson
    })
    // alert(JSON.stringify(responseJson));
  })
  .catch(error=>console.log(error)) //to catch the errors if any
  }

  render(){
    return(
  <Container>
  <ScrollView>

  	<View style={{height :100}}>
  		<View style={{flex:1 , flexDirection:'row' , justifyContent:'space-between', alignItems:'center', paddingHorizontal:5 }}>
		  	<Text>Stories</Text>
		  	<Text>Show All </Text>
		</View>
		<View style={{flex:3 }}>
			 <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              >

               <Image
        source={{ uri: "https://luehangs.site/images/lue-hang2018-square.jpg" }}
        style={styles.image} />

         <Image
        source={{ uri: "https://luehangs.site/images/lue-hang2018-square.jpg" }}
        style={styles.image} />

         <Image
        source={{ uri: "https://luehangs.site/images/lue-hang2018-square.jpg" }}
        style={styles.image}/>

         <Image
        source={{ uri: "https://luehangs.site/images/lue-hang2018-square.jpg" }}
       style={styles.image} />

        <Image
        source={{ uri: "https://luehangs.site/images/lue-hang2018-square.jpg" }}
        style={styles.image} />

         <Image
        source={{ uri: "https://luehangs.site/images/lue-hang2018-square.jpg" }}
        style={styles.image} />

         <Image
        source={{ uri: "https://luehangs.site/images/lue-hang2018-square.jpg" }}
        style={styles.image}/>

         <Image
        source={{ uri: "https://luehangs.site/images/lue-hang2018-square.jpg" }}
       style={styles.image} />

              </ScrollView>

		</View>
  	</View>

  	<Divider/>

    <MasonryProducts products={this.state.products} />
    </ScrollView>
  </Container>
  );
  }
}

export default HomeScreenPresenter;

const styles = StyleSheet.create({
	image:{
		height:60,
        width: 60,
        borderRadius: 30,
        marginBottom:3,
        marginHorizontal:5
	}

});