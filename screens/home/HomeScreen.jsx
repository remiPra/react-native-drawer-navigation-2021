import React, { Component } from 'react'
import { Text, TouchableOpacity, KeyboardAvoidingView, Button, Image, StyleSheet, ImageBackground, View } from 'react-native'
import { TextInput } from 'react-native-gesture-handler';
import {
    PlayfairDisplay_400Regular,
    PlayfairDisplay_500Medium,
    PlayfairDisplay_600SemiBold,
    PlayfairDisplay_700Bold,
    PlayfairDisplay_800ExtraBold,
    PlayfairDisplay_900Black,
    PlayfairDisplay_400Regular_Italic,
    PlayfairDisplay_500Medium_Italic,
    PlayfairDisplay_600SemiBold_Italic,
    PlayfairDisplay_700Bold_Italic,
    PlayfairDisplay_800ExtraBold_Italic,
    PlayfairDisplay_900Black_Italic
} from '@expo-google-fonts/playfair-display'
import { useFonts } from 'expo-font';
// const { width, height } = Dimensions.get('window');

function HomeScreen({ navigation }) {
    let [fontsloaded, error] = useFonts({
        PlayfairDisplay_400Regular,
        PlayfairDisplay_500Medium,
        PlayfairDisplay_600SemiBold,
        PlayfairDisplay_700Bold,
        PlayfairDisplay_800ExtraBold,
        PlayfairDisplay_900Black,
        PlayfairDisplay_400Regular_Italic,
        PlayfairDisplay_500Medium_Italic,
        PlayfairDisplay_600SemiBold_Italic,
        PlayfairDisplay_700Bold_Italic,
        PlayfairDisplay_800ExtraBold_Italic,
        PlayfairDisplay_900Black_Italic
    })
    return (

        <View style={styles.container}>
            {/* 
            <ImageBackground
            resizeMode='cover'
                source={require('../../../assets/budha.jpg')}
                imageStyle={styles.bimage}
            > */}
            <View style={{
                flex: 1,
                paddingVertical: 200,
                alignItems: 'center',
                justifyContent: 'center'
            }}>

                <Text
                    style={{
                        textAlign: 'center',
                        marginTop: 0,
                        marginBottom:80,
                        fontSize: 40,
                        fontFamily: 'PlayfairDisplay_400Regular',
                        width: 300,
                        //backgroundColor:'red'
                    }}
                >Planches Divinatoires</Text>

                <TextInput
                    placeholder="name"
                    mode='outlined'
                    label="Name*"
                    style={{
                        width: 300,

                        //fontFamily: 'Playfair Display',
                        borderBottomColor: 'black',
                        // borderBottomWidth: 1,
                        padding: 10,
                        marginBottom: 30,
                        backgroundColor: 'white',
                        borderRadius: 30
                    }} />
                <TextInput
                    placeholder="password"
                    mode="outlined"
                    label="Name"
                    style={{
                        width: 300,
                        borderBottomColor: 'black',
                        // borderBottomWidth: 1,
                        padding: 10,
                        marginBottom: 30,
                        backgroundColor: 'white',
                        borderRadius: 30,
                        //placeholderTextColor:"black"
                    }} />

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('Planches')}
                >
                    <Text style={{ color: 'white' }}>Sign in</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('Swipper')}
                >
                    <Text style={{ color: 'white' }}>Swipper</Text>
                </TouchableOpacity>
            </View>
            {/* </ImageBackground> */}
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    },
    bimage: {

        // width:'100%',
        // height:'100%',
        flex: 1,
        //resizeMode: 'cover',
        //alignItems: 'center',
        //justifyContent: 'center',

    },
    button: {
        backgroundColor: 'green',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 30,
        // width:100
    }
})


export default HomeScreen
