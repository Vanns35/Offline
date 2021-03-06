import React from "react";
import { TouchableOpacity, View, Platform } from "react-native";
//import { Ionicons } from "@expo/vector-icons";
import Icon from 'react-native-vector-icons/Ionicons';
import ProductScreenPresenter from "./ProductScreenPresenter";

export default class extends React.Component {
  static navigationOptions = {
    headerTransparent: true,
    headerRight: (
      <TouchableOpacity>
        <View
          style={{
            ...Platform.select({ ios: { heigth: 45 } }),
            justifyContent: "center",
            paddingLeft: 20
          }}
        >
          <Icon
            name={Platform.OS === "ios" ? "ios-heart-empty" : "md-heart-empty"}
            size={Platform.OS === "ios" ? 26 : 20}
            color="white"
          />
        </View>
      </TouchableOpacity>
    ),
    headerRightContainerStyle: {
      ...Platform.select({
        ios: {
          paddingRight: 9,
          paddingVertical: 12
        },
        android: {
          paddingRight: 20,
          paddingVertical: 12
        }
      })
    }
  };

  render() {
    return <ProductScreenPresenter />;
  }
}
