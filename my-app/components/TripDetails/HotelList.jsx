import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { Colors } from "../../constants/Colors";
import { GetPhotoRef } from "../../services/GooglePlaceApi";
import HotelCard from "./HotelCard";

const HotelList = ({ hotelList }) => {
  return (
    <View style={{ marginTop: 20 }}>
      <Text style={{ fontFamily: "firaSans-bold", fontSize: 20 }}>
        Hotel Recommended
      </Text>
      <FlatList
        data={hotelList}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={{ marginTop: 8 }}
        renderItem={({ item, index }) => <HotelCard item={item} />}
      />
    </View>
  );
};

export default HotelList;

const styles = StyleSheet.create({});
