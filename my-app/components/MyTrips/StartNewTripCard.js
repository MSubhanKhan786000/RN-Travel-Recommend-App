import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { FontAwesome5 } from '@expo/vector-icons';
import { Colors } from '../../constants/Colors';
import { useRouter } from 'expo-router'

const StartNewTripCard = () => {
    const router = useRouter();
    return (
        <View style={{
            padding: 20,
            marginTop: 50,
            display: "flex",
            alignItems: "center",
            gap: 20
        }}>
            <FontAwesome5 name="location-arrow" size={30} color={Colors.WHITE} />
            <Text style={{
                fontSize: 25,
                fontFamily: "firaSans-bold",
            }}>
                No trips planned yet
            </Text>
            <Text style={{
                fontSize: 20,
                fontFamily: "firaSans-regular",
                textAlign: "center",
                color: Colors.WHITE
            }}>
                Looks like its time to plan a new travel experience! Get Started Below
            </Text>
            {/* Start a New Trip button */}
            <TouchableOpacity onPress={() => router.push('/create-trip/search-place')} style={{
                padding: 15,
                backgroundColor: Colors.WHITE,
                borderRadius: 15,
                paddingHorizontal: 30,
                marginTop: 20,
            }}>
                <Text style={{ color: Colors.BASIC, fontFamily: "firaSans-medium", fontSize: 17 }}>Start a New Trip</Text>
            </TouchableOpacity>
        </View>
    )
}

export default StartNewTripCard

const styles = StyleSheet.create({})