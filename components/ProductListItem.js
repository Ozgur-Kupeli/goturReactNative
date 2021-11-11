import React from "react";
import { StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import { colors } from "../assets/colors";
import { useNavigation } from "@react-navigation/native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { setSelectedProduct } from "../store/actions/selectedProductAction";
import { useDispatch } from "react-redux";

const ProductListItem = ({ name, image, id }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const selectProduct = async () => {
    dispatch(setSelectedProduct(id));
    navigation.navigate("Ürün Detay", { screen: "Ana Sayfa" });
  };

  return (
    <TouchableOpacity onPress={selectProduct} style={styles.container}>
      <Image style={styles.img} source={image} />
      <Text style={styles.name}>{name}</Text>
      <MaterialCommunityIcons
        name="cart-arrow-down"
        color={colors.navigation_active}
        size={30}
      />
    </TouchableOpacity>
  );
};

export default ProductListItem;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    borderWidth: 1,
    borderColor: colors.navigation_inactive,
    margin: 4,
    padding: 8,
  },
  name: {
    flex: 1,
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
    color: colors.navigation_bg,
  },
  img: { width: 60, height: 60 },
});
