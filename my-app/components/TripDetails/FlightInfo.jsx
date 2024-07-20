import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Colors } from "../../constants/Colors";

const FlightInfo = ({ flightData }) => {
  return (
    <View
      style={{
        marginTop: 20,
        borderWidth: 1,
        borderColor: Colors.LIGHT_GRAY,
        padding: 10,
        borderRadius: 15,
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
            fontSize: 20,
          }}
        >
          Flights
        </Text>
        <TouchableOpacity
          style={{
            backgroundColor: Colors.BASIC,
            padding: 5,
            width: 100,
            borderRadius: 7,
            marginTop: 7,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              fontFamily: "firaSans-regular",
              color: Colors.WHITE,
            }}
          >
            Book Here
          </Text>
        </TouchableOpacity>
      </View>

      <Text
        style={{
          fontFamily: "firaSans-regular",
          fontSize: 17,
          marginTop: 7,
        }}
      >
        Airline: Delta
      </Text>
      <Text
        style={{
          fontFamily: "firaSans-regular",
          fontSize: 17,
        }}
      >
        Price: {flightData?.price}
      </Text>
    </View>
  );
};

export default FlightInfo;

const styles = StyleSheet.create({});
