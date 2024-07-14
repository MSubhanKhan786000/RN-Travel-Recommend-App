import { View, Text, TextInput, StyleSheet, TouchableOpacity, ToastAndroid } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRouter } from 'expo-router';
import { Colors } from '../../../constants/Colors'
import { AntDesign } from '@expo/vector-icons';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../configs/FirebaseConfiguration'




export default function SignIn() {
    const navigation = useNavigation();
    const router = useRouter();

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    useEffect(() => {
        navigation.setOptions
            ({ headerShown: false })
    }, [])

    const onSignIn = () => {
        if (!email || !password) {
            ToastAndroid.show("Please enter all credentials", ToastAndroid.LONG)
            return;
        }
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                router.replace('/mytrip')
                // console.log(user);
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // console.log(errorMessage, errorCode);
                if (errorCode == 'auth/invalid-credential') {
                    ToastAndroid.show("Please enter Valid Credentials", ToastAndroid.LONG)
                }
            });
    }
    return (
        <View style={{
            padding: 25,
            backgroundColor: Colors.WHITE,
            height: "100%",
            paddingTop: 50
        }}>
            <TouchableOpacity onPress={() => router.back()} >
                <AntDesign name="back" size={24} color="black" />
            </TouchableOpacity>
            <Text style={{
                fontSize: 30,
                fontFamily: "firaSans-bold"
            }}>Let's Sign You In</Text>
            <Text style={{
                fontSize: 30,
                fontFamily: "firaSans-regular",
                color: Colors.GRAY,
                marginTop: 20
            }}>Welcome Back</Text>
            <Text style={{
                fontSize: 30,
                fontFamily: "firaSans-regular",
                color: Colors.GRAY,
                marginTop: 20
            }}>You have been missed</Text>

            {/* Email */}
            <View style={{
                marginTop: 20
            }}>
                <Text style={{
                    fontFamily: "firaSans-regular"
                }}>
                    Email
                </Text>
                <TextInput onChangeText={(val) => setEmail(val)} style={styles.input} placeholder='Enter Email'></TextInput>
            </View>

            {/* Password */}
            <View style={{
                marginTop: 10
            }}>
                <Text style={{
                    fontFamily: "firaSans-regular"
                }}>
                    Password
                </Text>
                <TextInput onChangeText={(val) => setPassword(val)} secureTextEntry={true} style={styles.input} placeholder='Enter Password'></TextInput>
            </View>


            {/* Sign-In button */}
            <TouchableOpacity onPress={onSignIn} style={{
                padding: 20,
                backgroundColor: Colors.BASIC,
                borderRadius: 20,
                marginTop: 50
            }}>
                <Text style={{
                    color: Colors.WHITE,
                    textAlign: "center",
                    fontFamily: "firaSans-bold",
                    fontSize: 17
                }}>Sign-In</Text>
            </TouchableOpacity>

            {/* Create Account button */}
            <TouchableOpacity
                onPress={() => router.replace('auth/sign-up')}
                style={{
                    padding: 20,
                    backgroundColor: Colors.WHITE,
                    borderRadius: 20,
                    marginTop: 20,
                    borderColor: Colors.BASIC,
                    borderWidth: 1
                }}>
                <Text style={{
                    color: Colors.BASIC,
                    textAlign: "center",
                    fontFamily: "firaSans-bold",
                    fontSize: 17
                }}>Create Account</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        padding: 15,
        borderWidth: 1,
        borderColor: Colors.GRAY,
        borderRadius: 15,
        fontFamily: "firaSans-regular"
    }
})