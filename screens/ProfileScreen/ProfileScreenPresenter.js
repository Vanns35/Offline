import React from "react";
import { Platform , Dimensions , ScrollView} from "react-native";
import styled from "styled-components";
import Avatar from "../../components/Avatar";
import Colors from "../../constants/Colors";

import Icon from 'react-native-vector-icons/Ionicons';
import Tabs from './Tabs';

const Container = styled.View`
  background-color: white;
  flex: 1;
`;

const ProfileHeader = styled.View`
  box-shadow: 0px 5px 5px rgba(60, 60, 60, 0.1);
  elevation: 4;
  background-color: white;
  padding: 30px 20px;
  padding-top: 35px;
  align-items: center;
  width: 100%;
`;

const AvatarContainer = styled.View`
  margin-bottom: 20px;
`;

const Name = styled.Text`
  font-weight: 600;
  color: ${Colors.blackColor};
  font-size: 24px;
  margin-bottom: 5px;
`;

const Bio = styled.Text`
  margin-bottom: 10px;
  color: ${Colors.greyColor};
`;

const Divider = styled.View`
  width: 100%;
  height: 1px;
  background-color: rgba(151, 151, 151, 0.2);
  margin-bottom: 30px;
`;

const DataContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 90%;
`;

const DataPointContainer = styled.View`
  align-items: center;
  width: 33%;
  justify-content: center;
`;

const DataPointNumber = styled.Text`
  color: ${Colors.blackColor};
  margin-bottom: 3.5px;
  align-items: center;
`;

const DataPointName = styled.Text`
  color: ${Colors.greyColor};
  font-size: 12px;
`;

const LinksList = styled.ScrollView``;

const ProfileScreenPresenter = () => (
  
  <Container>
    <ScrollView>
    <ProfileHeader>
      <AvatarContainer>
        <Avatar
          size="lg"
          source={require("../../assets/images/lgAvatar.png")}
        />
      </AvatarContainer>
      <Name>User Name</Name>
      <Bio>emailid123@gmail.com</Bio>
     
    </ProfileHeader>

    <Tabs style={{position: 'absolute', top: 0 }} />
    </ScrollView>
  
  </Container>

);

export default ProfileScreenPresenter;
