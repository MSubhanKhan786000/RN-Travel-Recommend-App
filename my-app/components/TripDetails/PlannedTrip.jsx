import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { Colors } from "../../constants/Colors";
import PlaceCard from "./PlaceCard";

const PlannedTrip = ({ details }) => {
  return (
    <View
      style={{
        marginTop: 20,
      }}
    >
      <Text
        style={{
          fontSize: 20,
          fontFamily: "firaSans-bold",
        }}
      >
        Recommended Places to Visit
      </Text>
      <FlatList
        data={details}
        style={{
          marginTop: 8,
        }}
        renderItem={({ item, index }) => <PlaceCard item={item} />}
      />
    </View>
  );
};

export default PlannedTrip;

const styles = StyleSheet.create({});
