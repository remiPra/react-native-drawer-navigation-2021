import React, { Component,useEffect} from 'react';
import { Text, View } from 'react-native'
//import {projectFirestore} from '../../firebase/firebase';

export function firebaseExample() {
    
    
    useEffect(() => {
        console.log('hello')
      }, [])

    
        return (
            <View>
                <Text> textInComponent </Text>
            </View>
        )
    
}
