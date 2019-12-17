import React from "react";
import { TouchableWithoutFeedback , Image, View} from "react-native";
import AutoHeightImage from "react-native-auto-height-image";
import { withNavigation } from "react-navigation";
import PropTypes from "prop-types";
import styled from "styled-components";
import Layout from "../../constants/Layout";
import Colors from "../../constants/Colors";

const Container = styled.View`
  margin-bottom: 10px;
`;

const ImageContainer = styled.View`
  box-shadow: 0px 10px 15px rgba(60, 60, 60, 0.4);
  width: ${Layout.window.width / 2 - 30};
 
  elevation: 4;
  margin-bottom: 5px;
  min-height: 150px;
`;

const StoreName = styled.Text`
  color: ${Colors.blackColor};
  margin-left: 10px;
  margin-bottom: 5px;
  font-weight: 600;
`;

const Name = styled.Text`
  color: ${Colors.greyColor};
  margin-left: 10px;
  margin-bottom: 5px;
`;

const Price = styled.Text`
  font-weight: 600;
  margin-left: 10px;
  color: ${Colors.greyColor};
`;


const Divider = styled.View`
  width: 100%;
  height: 1px;
  background-color: rgba(151, 151, 151, 0.2);
  margin-bottom: 10px;
  margin-top: 10px;
`;


const ProductCard = ({ imgSrc, name, price, navigation , storename}) => (
  <TouchableWithoutFeedback onPress={() => navigation.navigate("Product")}>
    <Container>
    <View style={{flexDirection: 'row'}}>
     <Image
        source={{ uri: "https://luehangs.site/images/lue-hang2018-square.jpg" }}
        style={{ height:25,
        width: 25,
        borderRadius: 12,
        marginRight: 10,
        marginBottom:3,}} />
    <StoreName>{storename}</StoreName>
    </View>
      <ImageContainer>
        <AutoHeightImage
          width={Layout.window.width / 2 - 30}
          source={{ uri: imgSrc }}
          style={{
            borderRadius: 15
          }}
        />
      </ImageContainer>
      <Name>{name}</Name>
      <Price>{'Rs.'}{price}</Price>
      <Divider/>
    </Container>
  </TouchableWithoutFeedback>
);

ProductCard.propTypes = {
  storename:PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired
};

export default withNavigation(ProductCard);
