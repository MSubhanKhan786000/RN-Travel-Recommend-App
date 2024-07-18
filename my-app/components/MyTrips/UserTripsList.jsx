import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Colors } from "../../constants/Colors";
import moment from "moment";
import UserTripCard from "./UserTripCard";

const UserTripsList = ({ userTrips }) => {
  const LatestTrip = JSON.parse(userTrips[0]?.tripData);
  if (!userTrips) {
    return <Text>Loading...</Text>;
  }

  return (
    <View>
      <View style={{ marginTop: 20 }}>
        {LatestTrip?.locationInfo?.photoRef ? (
          <Image
            source={{uri:`https://maps.googleapis.com/maps/api/place/photo?maxwidth=500&photo_reference=${LatestTrip.locationInfo.photoRef}&key=${process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY}`}}
            style={{
              width: "100%",
              height: 300,
              borderRadius: 15,
              objectFit: "cover",
            }}
          />
        ) : (
          <Image
            source={require("../../assets/images/LoginImage.jpeg")}
            style={{
              width: "100%",
              height: 300,
              borderRadius: 15,
              objectFit: "cover",
            }}
          />
        )}
      </View>
      <View style={{ marginTop: 10 }}>
        <Text
          style={{
            fontFamily: "firaSans-medium",
            fontSize: 20,
            color: Colors.WHITE,
          }}
        >
          {userTrips[0]?.tripPlan?.destination}
        </Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 5,
          }}
        >
          <Text
            style={{
              fontFamily: "firaSans-regular",
              fontSize: 15,
              color: Colors.LIGHT_GRAY,
            }}
          >
            {moment(LatestTrip.startDate).format("DD MMM YYYY")}
          </Text>
          <Text
            style={{
              fontFamily: "firaSans-regular",
              fontSize: 15,
              color: Colors.LIGHT_GRAY,
            }}
          >
            {userTrips[0]?.tripPlan.tripName}
          </Text>
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: Colors.WHITE,
            padding: 15,
            marginTop: 15,
            borderRadius: 15,
          }}
        >
          <Text
            style={{
              fontFamily: "firaSans-medium",
              fontSize: 17,
              color: Colors.BASIC,
              textAlign: "center",
            }}
          >
            See your plan
          </Text>
        </TouchableOpacity>

        {userTrips.map((trip, index) => (
          <UserTripCard trip={trip} key={index} />
        ))}
      </View>
    </View>
  );
};

export default UserTripsList;

const styles = StyleSheet.create({});
