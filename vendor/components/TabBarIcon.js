import React from "react";
import Icon from 'react-native-vector-icons/Ionicons';

import Colors from "../../constants/Colors";

const TabBarIcon = ({ name, focused }) => (
  <Icon
    name={name}
    size={22}
    style={{ marginBottom: -3 }}
    color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
  />
);

export default TabBarIcon;
