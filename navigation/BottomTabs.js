import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  HomeStackNavigator,
  MyOrdersStackNavigator,
  OrderConfirmationStackNavigator,
} from "./StackNavigator";
import { colors } from "../assets/colors";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false, unmountOnBlur: true }}
      initialRouteName="StackNavigatorAnaSayfa"
    >
      <Tab.Screen
        name="StackNavigatorAnaSayfa"
        component={HomeStackNavigator}
        options={{
          tabBarLabel: "Ana Sayfa",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
          tabBarInactiveTintColor: colors.navigation_inactive,
          tabBarInactiveBackgroundColor: colors.navigation_bg,
          tabBarActiveTintColor: colors.navigation_active,
          tabBarActiveBackgroundColor: colors.navigation_bg,
        }}
      />
      <Tab.Screen
        name="StackNavigatorSiparişOnay"
        component={OrderConfirmationStackNavigator}
        options={{
          tabBarLabel: "Sipariş Onay",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="details" color={color} size={size} />
          ),
          tabBarInactiveTintColor: colors.navigation_inactive,
          tabBarInactiveBackgroundColor: colors.navigation_bg,
          tabBarActiveTintColor: colors.navigation_active,
          tabBarActiveBackgroundColor: colors.navigation_bg,
        }}
      />

      <Tab.Screen
        name="StackNavigatorSiparişlerim"
        component={MyOrdersStackNavigator}
        options={{
          tabBarLabel: "Siparişlerim",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="format-indent-increase"
              color={color}
              size={size}
            />
          ),
          tabBarInactiveTintColor: colors.navigation_inactive,
          tabBarInactiveBackgroundColor: colors.navigation_bg,
          tabBarActiveTintColor: colors.navigation_active,
          tabBarActiveBackgroundColor: colors.navigation_bg,
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
