import {TouchableOpacity, Text, View ,StyleSheet,Image} from 'react-native';
import React, { Component } from 'react';
//import AppLoading from 'expo-app-loading';

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
import {useFonts} from 'expo-font';

function HomeEnter({navigation}) {
    let [fontsLoaded] = useFonts({
      PlayfairDisplay_500Medium_Italic,
      PlayfairDisplay_400Regular,
  PlayfairDisplay_500Medium,
  PlayfairDisplay_600SemiBold,
  PlayfairDisplay_700Bold,
  PlayfairDisplay_800ExtraBold,
  PlayfairDisplay_900Black,
  PlayfairDisplay_400Regular_Italic,
    });
  


    if (!fontsLoaded) {
      return <Text>merde</Text>
      // return <AppLoading />;
    } else {
    return (
      <View style={{zIndex:2, flex:1, justifyContent:'center',alignItems:'center'}}>
       <Text style={styles.text1}>Mes Planches de Pendules</Text>
        <Text style={styles.text2}>Apprendre les bases de la reflexologie</Text>
        <Image
          style={styles.button}
          source={require('../../assets/budha.jpg')}
        />
        <View style={{position:'absolute',top:0,left:0,opacity:0.,
      height:'100%',width:'100%',backgroundColor:'pink',zIndex:1}}></View>
        <TouchableOpacity style={{zIndex:20}} onPress={() => navigation.navigate('Planches')} >
          <Text style={styles.textButton}>Commencer</Text>
        </TouchableOpacity> 
      </View>
    );}
  
}
const styles = StyleSheet.create({
    text1: {
        color: 'white',
        textAlign:'center',
        fontSize: 30,
        paddingBottom: 5,
        fontFamily:  'PlayfairDisplay_500Medium',
        zIndex:10,
        width:'90%',
        marginLeft:'auto',
        marginRight:'auto',
      },
      text2: {
        zIndex:20,
        width:"95%",
        textAlign:'center',
        marginLeft:'auto',
        marginRight:'auto',
        color: 'white',
        fontSize: 20,
        paddingBottom: 20,
        fontFamily: 'PlayfairDisplay_400Regular',
    
      },
      button: {
        
        position: 'absolute',
        zIndex: -1,
        height: '100%',
        width: '100%',
      },
      textButton: {
        color: 'white',
        zIndex:20,
        fontSize: 20,
        backgroundColor: 'navy',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 30
      },
     
    
})
export default HomeEnter;
