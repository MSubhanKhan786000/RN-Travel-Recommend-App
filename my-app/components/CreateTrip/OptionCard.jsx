import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Colors } from "../../constants/Colors";

const OptionCard = ({ option, selectedOption }) => {
  return (
    <View
      style={[
        {
          padding: 25,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          backgroundColor: Colors.LIGHT_GRAY,
          borderRadius: 15,
        },
        selectedOption?.id == option?.id && {
          borderColor: Colors.BASIC,
          borderWidth: 3,
        },
      ]}
    >
      <View>
        <Text
          style={{
            fontSize: 20,
            fontFamily: "firaSans-bold",
          }}
        >
          {option?.title}
        </Text>
        <Text
          style={{
            fontSize: 14,
            fontFamily: "firaSans-regular",
            color: Colors.GRAY,
          }}
        >
          {option?.Description}
        </Text>
      </View>
      <Text
        style={{
          fontSize: 35,
        }}
      >
        {option.icon}
      </Text>
    </View>
  );
};

export default OptionCard;

const styles = StyleSheet.create({});
