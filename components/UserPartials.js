import React from "react";
import {TouchableOpacity} from 'react-native';
import PropTypes from "prop-types";
import styled from "styled-components";
import Avatar from "./Avatar";
import Colors from "../constants/Colors";
import SmallButton from "./SmallButton";
import { withNavigation } from "react-navigation";

const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Column = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const DataContainer = styled.View`
  margin-left: 10px;
`;

const Name = styled.Text`
  font-weight: 500;
  font-size: 16px;
`;

const Rating = styled.Text`
  color: ${Colors.greyColor};
`;

const FirstButtonContainer = styled.View`
  margin-right: 2.5%;
`;

const UserPartials = ({ avatarUrl, rating, name , navigation }) => (
  <Container>
    <Column>
      <Avatar source={avatarUrl} />
      <TouchableOpacity onPress={() => navigation.navigate("Visit_Store")}>
      <DataContainer>
        <Name>{name}</Name>
        <Rating>{`⭑ ${rating}`}</Rating>
      </DataContainer>
      </TouchableOpacity>
    </Column>
    <Column>
      <FirstButtonContainer>
        <SmallButton text="Message" />
      </FirstButtonContainer>
    </Column>
  </Container>
);

UserPartials.propTypes = {
  avatarUrl: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
  rating: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired
};

export default withNavigation(UserPartials);
