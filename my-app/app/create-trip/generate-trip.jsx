import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import LottieView from "lottie-react-native";
import { Colors } from "../../constants/Colors";
import generation from "../../assets/images/generation.json";
import { CreateTripContext } from "../../Context/MyTripContext";
import { AI_PROMPT } from "../../constants/Options";
import { chatSession } from "../../configs/AiModal";
import { useRouter } from "expo-router";
import { doc, setDoc } from "firebase/firestore";
import { db, auth } from "../../configs/FirebaseConfiguration";

const GenerateTrip = () => {
  const { tripData, setTripData } = useContext(CreateTripContext);
  const [loading, setLoading] = useState();
  const router = useRouter();
  const user = auth.currentUser;

  useEffect(() => {
    tripData && GenerateAiTrip();
  }, []);

  const GenerateAiTrip = async () => {
    setLoading(true);
    const FINAL_PROMPT = AI_PROMPT.replace(
      "{location}",
      tripData?.locationInfo.name
    )
      .replace("{totalDays}", tripData?.totalNoOFDays)
      .replace("{totalNights}", tripData?.totalNoOFDays - 1)
      .replace("{traveler}", tripData?.travelerCount.title)
      .replace("{budget}", tripData?.budget)
      .replace("{totalDays}", tripData?.totalNoOFDays)
      .replace("{totalNights}", tripData?.totalNoOFDays - 1);
    const result = await chatSession.sendMessage(FINAL_PROMPT);
    console.log(result.response.text());
    const tripResponse = JSON.parse(result.response.text());
    setLoading(false);
    const docId = Date.now().toString();
    const result_ = await setDoc(doc(db, "UserTrips", docId), {
      userEmail: user.email,
      tripPlan: tripResponse, // AI Result
      tripData: JSON.stringify(tripData), //user Selection Data
      docId: docId,
    });

    router.push("/(tabs)/mytrip");
  };

  return (
    <View
      style={{
        backgroundColor: Colors.WHITE,
        height: "100%",
        padding: 25,
        paddingTop: 75,
      }}
    >
      <Text
        style={{
          fontFamily: "firaSans-bold",
          fontSize: 35,
          textAlign: "center",
        }}
      >
        Please wait....
      </Text>

      <Text
        style={{
          fontFamily: "firaSans-medium",
          fontSize: 25,
          textAlign: "center",
          color: Colors.GRAY,
          marginTop: 40,
        }}
      >
        AI is working on generating your Trip ......
      </Text>

      <LottieView
        source={generation}
        autoPlay
        loop
        style={{
          width: 400,
          height: 400,
          alignSelf: "center",
          marginTop: 10,
          left: 10,
        }}
      />

      <TouchableOpacity>
        <Text
          style={{
            fontFamily: "firaSans-regular",
            fontSize: 15,
            textAlign: "center",
            color: Colors.GRAY,
            marginTop: 50,
          }}
        >
          Do not go back
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default GenerateTrip;

const styles = StyleSheet.create({});
