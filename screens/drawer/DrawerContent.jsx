
import * as React from 'react';
import { useState } from 'react';
import { View, Text,Button, StyleSheet, Image } from 'react-native';
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

            <View style={styles.drawerContainer}>
                
                <Avatar
                size="xlarge"
                    rounded
                    source={require('../../assets/budha.jpg')}
                />


            </View>
            <View>
                {items.map(
                    (object) => {
                        return (
                            <View key={object.id}>
                                <Button
                                    onPress={() => navigation.navigate(object.link)}
                                    title={object.name}
                                />
                            </View>
                        )
                    }
                )}
            </View>
        </SafeAreaView>
    )

}


const styles = StyleSheet.create({
    text: {
        color: 'black',
    },
    safeContainer:{
        flexDirection:'column',
        // alignItems:'center',
        // justifyContent:'center',
        width:'100%'
    },
    drawerContainer: {
        padding: 30,
        alignItems:'center',
        position: 'relative'
    }
})
export default DrawerContent