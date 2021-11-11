import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import ProductList from "../components/ProductList";
import { products } from "../utils/products";

const Home = () => {
  const [productList, setProductList] = useState();

  useEffect(() => {
    setProductList(
      products.map((item) => ({
        id: item.id,
        name: item.name,
        image: item.image,
      }))
    );
  }, []);
  return (
    <View style={styles.container}>
      <ProductList products={productList} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingVertical: 16,
    width: "100%",
  },
});
