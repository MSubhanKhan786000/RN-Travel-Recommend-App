import {
  StyleSheet,
  View,
  Image,
  Dimensions,
  Text,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import { useRouter } from "expo-router";

const { width, height } = Dimensions.get("window");

const Login = () => {
  const router = useRouter();
  return (
    <View>
      <Image
        source={require("../assets/images/LoginImage.jpeg")}
        style={styles.image}
      />
      <View style={styles.container}>
        <Text
          style={{
            fontSize: 30,
            fontFamily: "firaSans-bold",
            textAlign: "center",
            marginTop: 20,
            color: Colors.PRIMARY,
          }}
        >
          AI TRAVEL PLANNER
        </Text>
        <Text
          style={{
            fontFamily: "firaSans-regular",
            textAlign: "center",
            fontSize: 17,
            color: Colors.GRAY,
            marginTop: 8,
          }}
        >
          An AI Travel Planner simplifies trip planning with personalized
          recommendations for destinations, accommodations, flights, and
          activities, creating customized itineraries and optimizing routes for
          an efficient and enjoyable travel experience.
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push("/auth/sign-in")} // Ensure this path matches your routing setup
        >
          <Text
            style={{
              fontFamily: "firaSans-regular",
              textAlign: "center",
              color: Colors.WHITE,
              fontSize: 17,
            }}
          >
            Get Started
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: Colors.WHITE,
    marginTop: -30,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    padding: 15,
  },
  image: {
    width: width,
    height: height * 0.5,
  },
  button: {
    borderRadius: 99,
    padding: 15,
    backgroundColor: "#d57d5f",
    marginTop: "30%",
  },
});
