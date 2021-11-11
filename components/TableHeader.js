import React from "react";
import { Text, View } from "react-native";
import { colors } from "../assets/colors";
import { tableStyle } from "../assets/tableStyle";

const TableHeader = () => {
  return (
    <View
      style={[
        tableStyle.tableRow,
        { borderBottomWidth: 3, borderBottomColor: colors.navigation_active },
      ]}
    >
      <View style={tableStyle.tableColOne}>
        <Text style={tableStyle.tableText}>Ürün Adı</Text>
      </View>
      <View style={tableStyle.tableColTwo}>
        <Text style={tableStyle.tableText}>Adet</Text>
      </View>
      <View style={tableStyle.tableColThree}>
        <Text style={tableStyle.tableText}>Adet Fiyatı</Text>
      </View>
      <View style={tableStyle.tableColFour}></View>
    </View>
  );
};

export default TableHeader;
