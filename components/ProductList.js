import React from "react";
import { StyleSheet, FlatList } from "react-native";
import ProductListItem from "./ProductListItem";

const ProductList = ({ products }) => {
  return (
    <>
      <FlatList
        style={styles.container}
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ProductListItem name={item.name} image={item.image} id={item.id} />
        )}
      />
    </>
  );
};

export default ProductList;

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
});
