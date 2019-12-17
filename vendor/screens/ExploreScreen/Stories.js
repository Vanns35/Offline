import React, { Component } from 'react';
import Story from 'react-native-story';
import {TextInput} from 'react-native';


const stories = [
  {
    id: "4",
    source: require("../../../assets/stories/4.jpg"),
    user: "Ugur Erdal",
    avatar: require("../../../assets/avatars/ugurerdal.png")
  },
  {
    id: "2",
    source: require("../../../assets/stories/2.jpg"),
    user: "Mustafa",
    avatar: require("../../../assets/avatars/mustafa.png")
  },
  {
    id: "5",
    source: require("../../../assets/stories/5.jpg"),
    user: "Emre Yilmaz",
    avatar: require("../../../assets/avatars/emre.png")
  },
  {
    id: "3",
    source: require("../../../assets/stories/3.jpg"),
    user: "Cenk Gun",
    avatar: require("../../../assets/avatars/cenk.png")
  },
];

export default class Stories extend Component{
 
 render() {
    return (
        <Story
            unPressedBorderColor="#e95950"
            pressedBorderColor="#ebebeb"
            stories={stories}
            footerComponent={
                <TextInput
                    placeholder="Send message"
                    placeholderTextColor="white"
                    style={styles.footerInput
                />
            }
        />
      ); 
 }
 
 }