import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import ProductDetail from "../screens/ProductDetail";
import MyOrders from "../screens/MyOrders";
import OrderConfirmation from "../screens/OrderConfirmation";
import { TouchableOpacity, StyleSheet, Image, Text, View } from "react-native";
import { colors } from "../assets/colors";

import Ionicons from "react-native-vector-icons/Ionicons";
import { useSelector } from "react-redux";

const Stack = createStackNavigator();

function LogoTitle() {
  return (
    <Image
      style={styles.logo}
      source={require("../assets/gotur-logo-145x97.png")}
    />
  );
}

const forFade = ({ current, next }) => {
  const opacity = Animated.add(
    current.progress,
    next ? next.progress : 0
  ).interpolate({
    inputRange: [0, 1, 2],
    outputRange: [0, 1, 0],
  });

  return {
    leftButtonStyle: { opacity },
    rightButtonStyle: { opacity },
    titleStyle: { opacity },
    backgroundStyle: { opacity },
  };
};

const HomeStackNavigator = ({ navigation }) => {
  const cart = useSelector((state) => state.cart);
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Ana Sayfa"
        component={Home}
        options={{
          headerLeft: (props) => <LogoTitle {...props} />,
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontSize: 16,
            color: colors.navigation_inactive,
          },
          headerStyle: {
            backgroundColor: colors.navigation_bg,
          },
          headerTintColor: colors.navigation_active,
          headerRight: () => (
            <TouchableOpacity
              style={styles.cart}
              onPress={() => navigation.navigate("Sipariş Onay")}
            >
              <Ionicons
                name="cart"
                color={colors.navigation_active}
                size={30}
              />
              <View
                style={{
                  opacity: cart.length === 0 ? 0 : 0.8,
                  position: "absolute",
                  right: -10,
                  top: -10,
                  width: 22,
                  height: 22,
                  backgroundColor: "red",
                  borderRadius: 11,
                  zIndex: 2,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text style={styles.badgeText}>{cart.length}</Text>
              </View>
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="Sipariş Onay"
        component={OrderConfirmation}
        options={{
          headerTitleAlign: "center",
          headerStyleInterpolator: forFade,
          headerTitleStyle: {
            fontSize: 16,
            color: colors.navigation_inactive,
          },
          headerStyle: {
            backgroundColor: colors.navigation_bg,
          },
          headerTintColor: colors.navigation_active,
        }}
      />
      <Stack.Screen
        name="Ürün Detay"
        component={ProductDetail}
        options={{
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontSize: 16,
            color: colors.navigation_inactive,
          },
          headerStyle: {
            backgroundColor: colors.navigation_bg,
          },

          headerTintColor: colors.navigation_active,
          headerRight: () => (
            <TouchableOpacity
              style={styles.cart}
              onPress={() => navigation.navigate("Sipariş Onay")}
            >
              <Ionicons
                name="cart"
                color={colors.navigation_active}
                size={30}
              />
              <View
                style={{
                  opacity: cart.length === 0 ? 0 : 0.8,
                  position: "absolute",
                  right: -10,
                  top: -10,
                  width: 22,
                  height: 22,
                  backgroundColor: "red",
                  borderRadius: 11,
                  zIndex: 2,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text style={styles.badgeText}>{cart.length}</Text>
              </View>
            </TouchableOpacity>
          ),
        }}
      />
    </Stack.Navigator>
  );
};
export { HomeStackNavigator };

const MyOrdersStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Siparişlerim"
        component={MyOrders}
        options={{
          headerLeft: (props) => <LogoTitle {...props} />,
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontSize: 16,
            color: colors.navigation_inactive,
          },
          headerStyle: {
            backgroundColor: colors.navigation_bg,
          },
          headerTintColor: colors.navigation_active,
        }}
      />
    </Stack.Navigator>
  );
};
export { MyOrdersStackNavigator };

const OrderConfirmationStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Sipariş Onay"
        component={OrderConfirmation}
        options={{
          headerLeft: (props) => <LogoTitle {...props} />,
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontSize: 16,
            color: colors.navigation_inactive,
          },
          headerStyle: {
            backgroundColor: colors.navigation_bg,
          },
          headerTintColor: colors.navigation_active,
        }}
      />
    </Stack.Navigator>
  );
};
export { OrderConfirmationStackNavigator };

const styles = StyleSheet.create({
  cart: {
    marginRight: 16,
    position: "relative",
  },
  logo: {
    width: 45,
    height: 30,
    marginLeft: 16,
  },
  badgeText: {
    textAlign: "center",
    color: "white",
  },
});
