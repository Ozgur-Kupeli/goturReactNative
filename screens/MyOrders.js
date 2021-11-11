import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { useSelector } from "react-redux";
import { colors } from "../assets/colors";
import OldShoppingList from "../components/OldShoppingList";

const MyOrders = () => {
  const orders = useSelector((state) => state.completedOrders);
  //orders.productsArr[0]
  //orders.tarih
  //orders.totalPrice

  return (
    <View style={styles.container}>
      {orders.length === 0 ? (
        <Text style={styles.yazi}>Henüz bir sipariş vermediniz</Text>
      ) : (
        <OldShoppingList data={orders} />
      )}
    </View>
  );
};

export default MyOrders;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 16,
  },
  yazi: {
    fontSize: 18,
    fontWeight: "700",
    marginVertical: 16,
    color: colors.navigation_active,
  },
});
