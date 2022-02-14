
import * as React from 'react';
import { useState } from 'react';
import { View, Text,Button, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Avatar } from 'react-native-elements';



function DrawerContent({navigation}) {
    const [items, setItems] = useState([
        {id: 1, name: 'Accueil',link:'HomeEnter'}, 
        {id: 2, name: 'les bases',link:'Planches'}, 
              {id: 3, name: 'Swipper',link:"Swipper"},
        //{id: 4, name: 'Plotly',link:"Ploty1"},
      
])
    return (
        <SafeAreaView style={styles.safeContainer}>

            <View  style={styles.drawerContainer}>
                <Text style={styles.h1}>Mes Planches Divinatoires</Text>
                <Avatar
                size="xlarge"
                    rounded
                    source={require('../../assets/budha.jpg')}
                />


            </View>
            <View style={{height:500}}>
                {items.map(
                    (object) => {
                        return (
                            <View    style={{color:'navy',paddingTop:10}} key={object.id}>
                                <TouchableOpacity style={styles.button}
                                    onPress={() => navigation.navigate(object.link)}
                                >
                                    <Text>{object.name} </Text>

                                </TouchableOpacity>
                                    
                            
                            </View>
                        )
                    }
                )}
            </View>
        </SafeAreaView>
    )

}


const styles = StyleSheet.create({
    h1:{textAlign:'center',
        marginTop:10,
        marginBottom:20,
        color:'white',
        fontSize:20,
        fontWeight:'bold'
    },
    text: {
        color: 'white',
    },
    safeContainer:{
        flexDirection:'column',
        // alignItems:'center',
        // justifyContent:'center',
        width:'100%',
        //backgroundColor:"navy",
        borderBottomColor:"white",
        borderBottomWidth:5
    },
    drawerContainer: {
    
        padding: 30,
        alignItems:'center',
        position: 'relative',
        backgroundColor:"navy"
    },
    button:{
        backgroundColor:'white',padding:20,borderRadius:20,fontSize:20,fontWeight:'bold'
    }
})
export default DrawerContent