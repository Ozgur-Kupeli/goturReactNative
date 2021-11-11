import React, { useState, useEffect } from "react";
import { StyleSheet, View, FlatList, Button, Text, Alert } from "react-native";
import TableHeader from "../components/TableHeader";
import TableBody from "../components/TableBody";
import { useDispatch, useSelector } from "react-redux";
import { products } from "../utils/products";
import { addCompletedOrder } from "../store/actions/completedOrdersAction";
import { useNavigation } from "@react-navigation/native";
import { emptyTheCart } from "../store/actions/cartAction";
import { colors } from "../assets/colors";

const OrderConfirmation = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const [productsArr, setProductsArr] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const getOccurrence = (array, value) => {
    return array.filter((v) => v === value).length;
  };

  useEffect(() => {
    const cartArr = [];
    const priceArr = [];
    products.map((i) => {
      if (cart.includes(i.id)) {
        const count = getOccurrence(cart, i.id);
        cartArr.push({
          id: i.id,
          name: i.name,
          price: i.price,
          count,
        });
        priceArr.push(i.price * count);
      }
    });
    setProductsArr(cartArr);
    const x = priceArr.reduce((a, b) => a + b, 0);
    setTotalPrice(x);
  }, [cart]);

  const buyHandler = () => {
    if (productsArr.length === 0) {
      Alert.alert(
        "",
        "Sepetinizde sıfır( 0 ) ürün bulunmamaktadır. Lütfen ürün ekleyiniz!",
        [{ text: "OK" }]
      );
    }
    const tarih =
      new Date().toLocaleDateString("tr-TR") +
      " - " +
      new Date().toLocaleTimeString("tr-TR");

    dispatch(
      addCompletedOrder({
        id: Date.now(),
        productsArr,
        totalPrice,
        tarih,
      })
    );

    Alert.alert(
      "",
      "Ürünleriniz en kısa sürede kapınıza teslim edilecektir.Götür ailesi olarak HAYIRLI GÜNLER dileriz!",
      [
        {
          text: "OK",
          onPress: () => {
            navigation.navigate("StackNavigatorSiparişlerim");
            setTimeout(() => {
              dispatch(emptyTheCart());
            }, 1000);
          },
        },
      ]
    );
  };

  return (
    <View style={styles.container}>
      {cart.length === 0 ? (
        <Text style={styles.yazi}>Sepetinizde hiç ürün bulunmamaktadır</Text>
      ) : (
        <>
          <TableHeader />
          <FlatList
            style={styles.flatListContainer}
            data={productsArr}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <TableBody
                name={item.name}
                numberOfProducts={item.count}
                price={item.price}
                id={item.id}
              />
            )}
          />
          <Text style={styles.yazi}>Toplam : {totalPrice} TL</Text>
          <Button
            onPress={buyHandler}
            color={colors.navigation_active}
            title="ALIŞVERİŞİ TAMAMLA"
            titleColor={colors.navigation_bg}
          />
        </>
      )}
    </View>
  );
};

export default OrderConfirmation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 16,
    paddingBottom: 48,
  },
  flatListContainer: {
    width: "100%",
  },
  yazi: {
    fontSize: 18,
    fontWeight: "700",
    marginVertical: 16,
    color: colors.navigation_active,
  },
});
