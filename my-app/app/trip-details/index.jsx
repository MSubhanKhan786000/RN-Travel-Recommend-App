import { Image, StyleSheet, Text, View, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { Colors } from "../../constants/Colors";
import moment from "moment";
import FlightInfo from "../../components/TripDetails/FlightInfo";
import HotelList from "../../components/TripDetails/HotelList";
import PlannedTrip from "../../components/TripDetails/PlannedTrip";

const TripDetails = () => {
  const navigation = useNavigation();
  const { trip } = useLocalSearchParams();
  const [tripDetails, setTripDetails] = useState(null);

  const formatData = data => {
    try {
      return JSON.parse(data);
    } catch (error) {
      console.error("Failed to parse JSON:", error);
      return null;
    }
  };

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTitle: "",
      headerTransparent: true,
    });
    const parsedTrip = formatData(trip);
    setTripDetails(parsedTrip);
  }, []);

  if (!tripDetails) {
    return <Text>Error: Invalid trip data</Text>;
  }

  return (
    <ScrollView>
      <Image
        source={{
          uri: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=500&photo_reference=${
            formatData(tripDetails?.tripData)?.locationInfo?.photoRef
          }&key=${process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY}`,
        }}
        style={{
          height: 330,
          width: "100%",
        }}
      />
      <View
        style={{
          padding: 15,
          backgroundColor: Colors.WHITE,
          height: "100%",
          marginTop: -30,
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
        }}
      >
        {/* Destination text */}
        <Text
          style={{
            fontSize: 25,
            fontFamily: "firaSans-bold",
          }}
        >
          {tripDetails?.tripPlan?.destination}
        </Text>

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 5,
            marginTop: 5,
          }}
        >
          <Text
            style={{
              fontFamily: "firaSans-regular",
              color: Colors.GRAY,
              fontSize: 18,
            }}
          >
            {moment(formatData(tripDetails.tripData).startDate).format(
              "DD MMM YYYY"
            )}
          </Text>
          <Text
            style={{
              fontFamily: "firaSans-regular",
              color: Colors.GRAY,
              fontSize: 18,
            }}
          >
            {" "}
            -{" "}
            {moment(formatData(tripDetails.tripData).endDate).format(
              "DD MMM YYYY"
            )}
          </Text>

          <Text
            style={{
              fontFamily: "firaSans-regular",
              color: Colors.GRAY,
              fontSize: 14,
              marginTop: 4,
            }}
          >
            ( {tripDetails?.tripPlan?.duration} )
          </Text>
        </View>
        <Text style={{ fontFamily: "firaSans-regular" }}>
          {tripDetails.tripPlan.tripName}
        </Text>
        {/* Flight Info */}
        <FlightInfo flightData={tripDetails.tripPlan.flightDetails[0]} />
        {/* Hotels List */}
        <HotelList hotelList={tripDetails?.tripPlan.hotels} />
        {/* Trip day planner */}
        <PlannedTrip details={tripDetails?.tripPlan.placesToVisit} />
      </View>
    </ScrollView>
  );
};

export default TripDetails;

const styles = StyleSheet.create({});
