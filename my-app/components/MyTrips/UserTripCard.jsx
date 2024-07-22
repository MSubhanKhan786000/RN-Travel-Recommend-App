import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import moment from "moment";
import { Colors } from "../../constants/Colors";
import { useRouter } from "expo-router";

const UserTripCard = ({ trip }) => {
  const router = useRouter();

  const formatData = data => {
    try {
      return JSON.parse(data);
    } catch (error) {
      console.error("Failed to parse JSON:", error);
      return null;
    }
  };

  const tripData = formatData(trip?.tripData);

  if (!tripData) {
    return null; // or return a placeholder component if the data is invalid
  }

  const handleNavigation = () => {
    router.push({
      pathname: "/trip-details",
      params: {
        trip: JSON.stringify(trip),
      },
    });
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
      <TouchableOpacity onPress={handleNavigation}>
        <Image
          source={{
            uri: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=500&photo_reference=${tripData.locationInfo.photoRef}&key=${process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY}`,
          }}
          style={{
            height: 100,
            width: 100,
            borderRadius: 10,
          }}
        />
      </TouchableOpacity>
      <View>
        <TouchableOpacity onPress={handleNavigation}>
          <Text
            style={{
              fontFamily: "firaSans-medium",
              fontSize: 18,
              color: Colors.WHITE,
            }}
          >
            Destination: {trip.tripPlan?.destination}
          </Text>
        </TouchableOpacity>
        <Text
          style={{ fontFamily: "firaSans-medium", color: Colors.LIGHT_GRAY }}
        >
          Date: {moment(tripData.startDate).format("DD MMM YYYY")}
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
