import React from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../store/actions/cartAction";

import { colors } from "../assets/colors";

const ProductDetail = () => {
  const product = useSelector((state) => state.selectedProduct);

  const dispatch = useDispatch();
  const btnAddCartHandle = () => {
    dispatch(addToCart(product.id));
  };
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image style={styles.img} source={product.image} />
        <Text style={styles.name}>{product.name}</Text>
        <Text style={styles.price}>{product.price} TL</Text>
        <Text style={styles.description}>{product.description}</Text>
        <Button
          onPress={btnAddCartHandle}
          color={colors.navigation_active}
          title="Sepete Ekle"
        />
      </View>
    </View>
  );
};

export default ProductDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 16,
  },
  card: {
    width: "100%",
    alignItems: "center",
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 16,
  },
  img: {
    width: 300,
    height: 300,
  },
  description: {
    textAlign: "center",
    fontSize: 16,
    marginVertical: 16,
  },

  price: {
    marginTop: 16,
    fontSize: 16,
    fontWeight: "bold",
  },
});
