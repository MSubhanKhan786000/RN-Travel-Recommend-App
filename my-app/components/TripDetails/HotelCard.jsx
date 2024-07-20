import { Image, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Colors } from "../../constants/Colors";
import { GetPhotoRef } from "../../services/GooglePlaceApi";

const HotelCard = ({ item }) => {
  const [photoRef, setPhotoRef] = useState(null);

  useEffect(() => {
    GetGooglePhotoRef();
  }, []);

  const GetGooglePhotoRef = async () => {
    try {
      const result = await GetPhotoRef(item.hotelName);
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
        marginRight: 20,
        width: 180,
        borderWidth: 1,
        borderRadius: 15,
        borderColor: Colors.LIGHT_GRAY,
      }}
    >
      {photoRef && (
        <Image
          source={{
            uri: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=500&photo_reference=${photoRef}&key=${process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY}`,
          }}
          style={{
            width: 180,
            height: 120,
            borderTopLeftRadius: 15,
            borderTopRightRadius: 15,
          }}
        />
      )}
      <View style={{ padding: 5 }}>
        <Text style={{ fontFamily: "firaSans-medium", fontSize: 17 }}>
          {item.hotelName}
        </Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontFamily: "firaSans-regular" }}>{item.price}</Text>
          <Text style={{ fontFamily: "firaSans-regular" }}>
            ⭐ {item.rating}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default HotelCard;

const styles = StyleSheet.create({});
