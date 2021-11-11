import React from "react";
import { StyleSheet, Text, FlatList, View } from "react-native";

const OldShoppingProductList = ({ data }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.columnOne}>Ürün Adı</Text>
        <Text style={styles.columnTwo}>Adeti</Text>
        <Text style={styles.columnThree}>Adet Fiyatı</Text>
      </View>
      <FlatList
        style={styles.flatListContainer}
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.row}>
            <Text style={styles.columnOne}>{item.name}</Text>
            <Text style={styles.columnTwo}>{item.count}</Text>
            <Text style={styles.columnThree}>{item.price} TL</Text>
          </View>
        )}
      />
    </View>
  );
};

export default OldShoppingProductList;

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  flatListContainer: {
    width: "100%",
  },
  row: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 8,
    backgroundColor: "#DCDCDC",
  },
  header: {
    flexDirection: "row",
  },
  columnOne: {
    width: "60%",
  },
  columnTwo: { width: "20%", textAlign: "center" },
  columnThree: { width: "20%", textAlign: "center" },
});
