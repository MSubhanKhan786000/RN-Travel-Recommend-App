import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import moment from "moment";
import { Colors } from "../../constants/Colors";

const UserTripCard = ({ trip }) => {
  const formatData = data => {
    return JSON.parse(data);
  };
  return (
    <View
      style={{
        marginTop: 10,
        display: "flex",
        flexDirection: "row",
        gap: 15,
        alignItems: "center",
      }}
    >
      {/* <Image
        style={{ height: 100, width: 100, borderRadius: 10 }}
        source={require("../../assets/images/trip.jpeg")}
      /> */}

<Image
            source={{uri:`https://maps.googleapis.com/maps/api/place/photo?maxwidth=500&photo_reference=${formatData(trip?.tripData).locationInfo.photoRef}&key=${process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY}`}}
            style={{
              height: 100, width: 100, borderRadius: 10
            }}
          />
      <View>
        <Text
          style={{
            fontFamily: "firaSans-medium",
            fontSize: 18,
            color: Colors.WHITE,
          }}
        >
          Destination: {trip.tripPlan?.destination}
        </Text>
        <Text
          style={{ fontFamily: "firaSans-medium", color: Colors.LIGHT_GRAY }}
        >
          Date:{" "}
          {moment(formatData(trip.tripData).startDate).format("DD MMM YYYY")}
        </Text>
        <Text
          style={{ fontFamily: "firaSans-medium", color: Colors.LIGHT_GRAY }}
        >
          Traveling: {trip.tripPlan.tripName}
        </Text>
      </View>
    </View>
  );
};

export default UserTripCard;

const styles = StyleSheet.create({});
