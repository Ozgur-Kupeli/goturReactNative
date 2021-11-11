import React, { useState, useEffect } from "react";
import { Text, View, Button } from "react-native";
import { useDispatch } from "react-redux";
import { colors } from "../assets/colors";
import { tableStyle } from "../assets/tableStyle";
import {
  incToCartItemCount,
  decToCartItemCount,
} from "../store/actions/cartAction";

const TableBody = ({ name, numberOfProducts, price, id }) => {
  const [productCount, setProductCount] = useState(numberOfProducts);
  const dispatch = useDispatch();

  const arttir = () => {
    dispatch(incToCartItemCount(id));
  };
  const azaltt = () => {
    if (numberOfProducts > 0) {
      dispatch(decToCartItemCount(id));
    }
  };
  return (
    <View style={tableStyle.tableRow}>
      <View style={tableStyle.tableColOne}>
        <Text style={tableStyle.tableText}>{name}</Text>
      </View>
      <View style={tableStyle.tableColTwo}>
        <Text style={tableStyle.tableText}>{numberOfProducts}</Text>
      </View>
      <View style={tableStyle.tableColThree}>
        <Text style={tableStyle.tableText}>{price}</Text>
      </View>
      <View style={tableStyle.tableColFour}>
        <Button color={colors.navigation_bg} onPress={azaltt} title=" - " />
        <Button
          color={colors.navigation_active}
          onPress={arttir}
          title="  +  "
        />
      </View>
    </View>
  );
};

export default TableBody;
