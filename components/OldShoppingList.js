import React from "react";
import { StyleSheet, Text, FlatList } from "react-native";
import OldShoppingProductList from "./OldShoppingProductList";

const OldShoppingList = ({ data }) => {
  return (
    <FlatList
      style={styles.flatListContainer}
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <>
          <Text style={styles.tarih}>{item.tarih}</Text>

          <OldShoppingProductList data={item.productsArr} />
          <Text style={styles.totalPrice}>
            Toplam Tutar : {item.totalPrice} TL
          </Text>
        </>
      )}
    />
  );
};

export default OldShoppingList;

const styles = StyleSheet.create({
  flatListContainer: {
    width: "100%",
    padding: 16,
  },
  tarih: {
    fontSize: 18,
    fontWeight: "700",
    marginVertical: 16,
    //borderTopWidth: 2,
    borderBottomWidth: 1,
    borderBottomColor: "#DCDCDC",
  },
  totalPrice: {
    fontSize: 14,
    fontWeight: "700",
    textAlign: "right",
    marginBottom: 32,
    borderBottomWidth: 3,
    borderTopWidth: 1,
    borderTopColor: "#DCDCDC",
  },
});
