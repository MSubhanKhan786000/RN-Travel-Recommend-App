import { StyleSheet, Text, View, TextInput, TouchableOpacity, ToastAndroid } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRouter } from 'expo-router';
import { Colors } from '../../../constants/Colors';
import { AntDesign } from '@expo/vector-icons';
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../../configs/FirebaseConfiguration'


const SignUpScreen = () => {
    const router = useRouter();
    const navigation = useNavigation();
    useEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
    }, [])

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [fullName, setFullName] = useState();


    const onCreateAccount = () => {

        if (!email && !password && !fullName) {
            ToastAndroid.show('Please enter all details', ToastAndroid.LONG)
            return;
        }
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                router.push('/auth/sign-in')
                // console.log(user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // console.log(errorCode, errorMessage);
                // ..
            });
    }
    return (
        <View style={{
            padding: 25,
            paddingTop: 40,
            backgroundColor: Colors.WHITE,
            height: "100%"
        }}>
            <TouchableOpacity onPress={() => router.back()} >
                <AntDesign name="back" size={24} color="black" />
            </TouchableOpacity>

            <Text style={{
                fontFamily: "firaSans-bold",
                fontSize: 30
            }}>Create New Account</Text>
            {/* Full Name */}
            <View style={{
                marginTop: 20
            }}>
                <Text style={{
                    fontFamily: "firaSans-regular"
                }}>
                    Full Name
                </Text>
                <TextInput onChangeText={(val) => setFullName(val)}
                    style={styles.input} placeholder='Enter Full Name'></TextInput>
            </View>
            {/* Email */}
            <View style={{
                marginTop: 20
            }}>
                <Text style={{
                    fontFamily: "firaSans-regular"
                }}>
                    Email
                </Text>
                <TextInput
                    onChangeText={(val) => setEmail(val)}
                    style={styles.input} placeholder='Enter Email'></TextInput>
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
                <TextInput
                    onChangeText={(val) => setPassword(val)}
                    secureTextEntry={true} style={styles.input} placeholder='Enter Password'></TextInput>
            </View>

            {/* Sign-Up button */}
            <TouchableOpacity onPress={onCreateAccount} style={{
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
                }}>Sign-Up</Text>
            </TouchableOpacity>

            {/* Sign-In button */}
            <TouchableOpacity
                onPress={() => router.push('auth/sign-in')}
                style={{
                    padding: 20,
                    borderRadius: 20,
                }}>
                <Text style={{
                    color: Colors.BASIC,
                    textAlign: "center",
                    fontFamily: "firaSans-regular",
                    fontSize: 17
                }}>Already have an Account? Sign-In</Text>
            </TouchableOpacity>
        </View>
    )
}

export default SignUpScreen

const styles = StyleSheet.create({
    input: {
        padding: 15,
        borderWidth: 1,
        borderColor: Colors.GRAY,
        borderRadius: 15,
        fontFamily: "firaSans-regular"
    }
})