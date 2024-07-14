import { StyleSheet, View, Image, Dimensions, Text } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";

const { width, height } = Dimensions.get("window");

const Login = () => {
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
            fontFamily: "firSans-bold",
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

        <View style={styles.button}>
          <Text
            style={{
              fontFamily: "firaSans-regular",
              textAlign: "center",
              color: Colors.WHITE,
              fontSize: 17,
            }}
          >
            Sign-In with Google
          </Text>
        </View>
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
    cursor: "pointer",
  },
});
