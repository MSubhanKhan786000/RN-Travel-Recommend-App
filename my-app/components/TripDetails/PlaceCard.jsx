import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Colors } from "../../constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { GetPhotoRef } from "../../services/GooglePlaceApi";

const PlaceCard = ({ item }) => {
  const [photoRef, setPhotoRef] = useState(null);

  useEffect(() => {
    GetGooglePhotoRef();
  }, []);

  const GetGooglePhotoRef = async () => {
    try {
      const result = await GetPhotoRef(item.placeName);
      if (result?.results[0]?.photos[0]?.photo_reference) {
        setPhotoRef(result.results[0].photos[0].photo_reference);
        console.log(
          "This is result from Hotel List",
          result.results[0].photos[0].photo_reference
        );
      }
    } catch (error) {
      console.error("Error fetching photo reference:", error);
    }
  };
  return (
    <View
      style={{
        padding: 10,
        margin: 5,
        borderWidth: 1,
        borderRadius: 15,
        borderColor: Colors.LIGHT_BASIC,
        backgroundColor: Colors.LIGHT_BASIC,
      }}
    >
      <Image
        style={{
          width: "100%",
          height: 120,
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
        }}
        source={{
          uri: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=500&photo_reference=${photoRef}&key=${process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY}`,
        }}
      />
      <View
        style={{
          padding: 5,
          marginTop: 5,
        }}
      >
        <Text
          style={{
            fontFamily: "firaSans-medium",
            fontSize: 17,
          }}
        >
          {item.placeName}
        </Text>
        <Text
          style={{
            fontFamily: "firaSans-regular",
            fontSize: 10,
            color: Colors.GRAY,
          }}
        >
          {item.placeDetails}
        </Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View>
            <Text style={{ fontFamily: "firaSans-regular", fontSize: 12 }}>
              {item.ticketPricing}
            </Text>
            <Text style={{ fontFamily: "firaSans-regular", fontSize: 12 }}>
              <Text style={{ fontWeight: "900" }}>Time to Travel:{"\n"}</Text>
              {item.timeToTravel}
            </Text>
          </View>
          <TouchableOpacity
            style={{
              backgroundColor: Colors.BASIC,
              padding: 8,
              borderRadius: 7,
            }}
          >
            <Ionicons
              name="navigate-circle-sharp"
              size={20}
              color={Colors.WHITE}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default PlaceCard;

const styles = StyleSheet.create({});
