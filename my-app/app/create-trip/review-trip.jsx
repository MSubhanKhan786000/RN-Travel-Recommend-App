import { StyleSheet, Text, View } from "react-native";
import React, { useContext, useEffect } from "react";
import { Colors } from "../../constants/Colors";
import { useNavigation, useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { CreateTripContext } from "../../Context/MyTripContext";
import moment from "moment";
import { TouchableOpacity } from "react-native";

const ReviewTrip = () => {
  const navigation = useNavigation();
  const router = useRouter();
  //   All data is stored inside the context so we have to utilize this context to display all the data that is selected previously
  const { tripData, setTripData } = useContext(CreateTripContext);
  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: "",
    });
  });
  return (
    <View
      style={{
        backgroundColor: Colors.WHITE,
        padding: 25,
        paddingTop: 75,
        height: "100%",
      }}
    >
      <Text
        style={{ fontFamily: "firaSans-bold", fontSize: 35, marginTop: 20 }}
      >
        Review Trip Details
      </Text>
      <View style={{ marginTop: 20 }}>
        <Text style={{ fontFamily: "firaSans-bold", fontSize: 20 }}>
          Before Generating your trip. Please review trip details
        </Text>
        {/* Destination */}
        <View
          style={{
            marginTop: 40,
            display: "flex",
            flexDirection: "row",
            gap: 20,
          }}
        >
          <Text
            style={{
              fontSize: 30,
            }}
          >
            📍
          </Text>
          <View>
            <Text
              style={{
                fontFamily: "firaSans-regular",
                fontSize: 20,
                color: Colors.GRAY,
              }}
            >
              Destination
            </Text>
            <Text
              style={{
                fontFamily: "firaSans-medium",
                fontSize: 20,
              }}
            >
              {tripData?.locationInfo?.name}
            </Text>
          </View>
        </View>
        {/* Date Selection */}
        <View
          style={{
            marginTop: 30,
            display: "flex",
            flexDirection: "row",
            gap: 20,
          }}
        >
          <Text
            style={{
              fontSize: 30,
            }}
          >
            📅
          </Text>
          <View>
            <Text
              style={{
                fontFamily: "firaSans-regular",
                fontSize: 20,
                color: Colors.GRAY,
              }}
            >
              Travel Date
            </Text>
            <Text
              style={{
                fontFamily: "firaSans-medium",
                fontSize: 20,
              }}
            >
              {moment(tripData?.startDate).format("DD MMM") +
                " To " +
                moment(tripData?.endDate).format("DD MMM") +
                "  "}
              ({tripData?.totalNoOFDays} days)
            </Text>
          </View>
        </View>

        {/* Solo , Family trip type */}
        <View
          style={{
            marginTop: 30,
            display: "flex",
            flexDirection: "row",
            gap: 20,
          }}
        >
          <Text
            style={{
              fontSize: 30,
            }}
          >
            🚌
          </Text>
          <View>
            <Text
              style={{
                fontFamily: "firaSans-regular",
                fontSize: 20,
                color: Colors.GRAY,
              }}
            >
              Who is Traveling?
            </Text>
            <Text
              style={{
                fontFamily: "firaSans-medium",
                fontSize: 20,
              }}
            >
              {tripData?.travelerCount.title}
            </Text>
          </View>
        </View>

        {/* Budget Selection  */}
        <View
          style={{
            marginTop: 30,
            display: "flex",
            flexDirection: "row",
            gap: 20,
          }}
        >
          <Text
            style={{
              fontSize: 30,
            }}
          >
            💰
          </Text>
          <View>
            <Text
              style={{
                fontFamily: "firaSans-regular",
                fontSize: 20,
                color: Colors.GRAY,
              }}
            >
              Budget
            </Text>
            <Text
              style={{
                fontFamily: "firaSans-medium",
                fontSize: 20,
              }}
            >
              {tripData?.budget}
            </Text>
          </View>
        </View>
        {/* Ends here */}

        {/* Continue Button */}
        <TouchableOpacity
          onPress={() => router.replace("/create-trip/generate-trip")}
          style={{
            padding: 15,
            backgroundColor: Colors.BASIC,
            borderRadius: 15,
            marginTop: 40,
          }}
        >
          <Text
            style={{
              color: Colors.WHITE,
              textAlign: "center",
              fontFamily: "firaSans-medium",
              fontSize: 20,
            }}
          >
            Build my Trip
          </Text>
        </TouchableOpacity>
        {/* End here button */}
      </View>
    </View>
  );
};

export default ReviewTrip;

const styles = StyleSheet.create({});
