import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect } from "react";
import { Colors } from "../../constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import StartNewTripCard from "../../components/MyTrips/StartNewTripCard";
import { collection, getDocs, query, where } from "firebase/firestore";
import { auth, db } from "../../configs/FirebaseConfiguration";
import UserTripsList from "../../components/MyTrips/UserTripsList";
import { useRouter } from "expo-router";

const MyTrip = () => {
  const router = useRouter();
  const [userTrip, setUserTrip] = useState([]);
  const [loading, setLoading] = useState(false);
  const user = auth.currentUser;

  useEffect(() => {
    user && GetMyTrips();
  }, [user]);

  const GetMyTrips = async () => {
    setLoading(true);
    setUserTrip([]);
    const q = query(
      collection(db, "UserTrips"),
      where("userEmail", "==", user?.email)
    );
    const querySnapShot = await getDocs(q);
    querySnapShot.forEach(doc => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
      setUserTrip(prev => [...prev, doc.data()]);
    });
    setLoading(false);
  };

  return (
    <View style={{ flex: 1, backgroundColor: Colors.BASIC }}>
      <ScrollView contentContainerStyle={{ padding: 25, paddingTop: 50 }}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text
            style={{
              fontFamily: "firaSans-bold",
              fontSize: 35,
              color: Colors.WHITE,
            }}
          >
            MyTrips
          </Text>
          <Ionicons
            name="add-circle-sharp"
            size={50}
            color={Colors.WHITE}
            onPress={() => router.push("/create-trip/search-place")}
          />
        </View>
        {loading && <ActivityIndicator size={"large"} color={Colors.WHITE} />}

        {userTrip.length === 0 ? (
          <StartNewTripCard />
        ) : (
          <UserTripsList userTrips={userTrip} />
        )}
      </ScrollView>
    </View>
  );
};

export default MyTrip;

const styles = StyleSheet.create({});
