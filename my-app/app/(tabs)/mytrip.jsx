import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Colors } from "../../constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import StartNewTripCard from "../../components/MyTrips/StartNewTripCard";

const MyTrip = () => {
  const [userTrip, setUserTrip] = useState([]);

  return (
    <View
      style={{
        padding: 25,
        paddingTop: 50,
        backgroundColor: Colors.BASIC,
        height: "100%",
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text
          style={{
            fontFamily: "firaSans-bold",
            fontSize: 35,
            color: Colors.WHITE,
          }}
        >
          MyTrips
        </Text>
        <Ionicons name="add-circle-sharp" size={50} color={Colors.WHITE} />
      </View>
      {userTrip.length == 0 ? <StartNewTripCard /> : null}
    </View>
  );
};

export default MyTrip;

const styles = StyleSheet.create({});
