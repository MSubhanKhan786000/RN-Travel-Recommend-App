import {
  StyleSheet,
  Text,
  ToastAndroid,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { useNavigation, useRouter } from "expo-router";
import { Colors } from "../../constants/Colors";
import CalendarPicker from "react-native-calendar-picker";
import moment from "moment";
import { CreateTripContext } from "../../Context/MyTripContext";

const SelectDates = () => {
  const navigation = useNavigation();
  const router = useRouter();

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const { tripData, setTripData } = useContext(CreateTripContext);

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: "",
    });
  }, []);

  const onDateChange = (date, type) => {
    console.log(date);
    console.log(type);

    if (type === "START_DATE") {
      setStartDate(moment(date));
    } else {
      setEndDate(moment(date));
    }
  };

  const onDateSelectionContinue = () => {
    if (!startDate || !endDate) {
      ToastAndroid.show(
        "Please provide both start and end dates",
        ToastAndroid.LONG
      );
      return;
    }
    const totalNoOFDays = endDate.diff(startDate, "days");
    console.log(totalNoOFDays + 1);

    setTripData({
      ...tripData,
      startDate: startDate,
      endDate: endDate,
      totalNoOFDays: totalNoOFDays + 1,
    });
    router.push("/create-trip/select-budget");
  };

  return (
    <View
      style={{
        padding: 20,
        paddingTop: 75,
        backgroundColor: Colors.WHITE,
        height: "100%",
      }}
    >
      <Text
        style={{
          fontFamily: "firaSans-bold",
          fontSize: 35,
          marginTop: 20,
        }}
      >
        Travel Date
      </Text>
      <View
        style={{
          marginTop: 30,
        }}
      >
        <CalendarPicker
          selectedDayStyle={styles.selectedDayStyle}
          onDateChange={onDateChange}
          allowRangeSelection={true}
          selectedRangeStyle={styles.selectedRangeStyle}
          minDate={new Date()}
          maxRangeDuration={5}
          selectedDayTextStyle={{
            color: Colors.WHITE,
          }}
        />
      </View>
      <TouchableOpacity
        onPress={onDateSelectionContinue}
        style={{
          padding: 15,
          backgroundColor: Colors.BASIC,
          borderRadius: 15,
          marginTop: 35,
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
          Continue
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SelectDates;

const styles = StyleSheet.create({
  selectedDayStyle: {
    backgroundColor: Colors.BASIC,
  },
  selectedRangeStyle: {
    backgroundColor: Colors.BASIC,
  },
});
