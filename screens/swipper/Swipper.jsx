import React, { useState } from "react";
import { Text, TouchableOpacity, View, Image, StyleSheet } from "react-native";
import Swiper from "react-native-web-swiper";



export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      swipperVertical: false,
      planches:[{
        text:"Planche de bohneur",
        image:require("../../assets/Blessure émotionnelle et datation (1).png"),
      },{
        text:"Planche de bohneur",
        image:require("../../assets/Blessure émotionnelle et datation (1).png"),
      }]
    };
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <Swiper
            from={1}
            minDistanceForAction={0.1}
            controlsProps={{
              dotsTouchable: true,
              prevPos: 'left',
              nextPos: 'right',
              nextTitle: '>',
              nextTitleStyle: { color: 'red', fontSize: 24, fontWeight: '500' },
              PrevComponent: ({ onPress }) => (
                
                <TouchableOpacity onPress={onPress}>
                  <Text style={{ color: 'white', fontSize: 24, fontWeight: '500' }}>
                    {'<'}
                  </Text>
                </TouchableOpacity>
              ),
            }}
          >
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: "rgba(20,20,200,0.3)" }}>
              
              <Image
                style={styles.button}
                
                //source={require('../../assets/Blessure émotionnelle et datation (1).png')}
               source={this.state.planches[0].image}
              />
            </View>
            <View style={{ flex: 1, alignItems: "center"}}>
              <Image
                style={styles.button}
                
                source={require('../../assets/Blessure émotionnelle et datation (1).png')}
               // source={this.state.planches.image[0]}
              />
              
              {/* <Text style={{ position: "absolute",bottom:'10px',fontSize: 20, padding: 20, flex: 1, alignItems: "center", justifyContent: "flex-end" }}>{this.state.text}</Text> */}

            </View>
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: "rgba(200,20,20,0.3)" }}>
              <Text>Slide 3</Text>
              
              <Text> C'est au autre texte</Text>
            </View>
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: "rgba(200,20,20,0.3)" }}>
              <Text>Slide 5</Text>
              <Text>Slide 5</Text>
              <Text>Slide 5</Text>
            </View>
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: "rgba(200,20,20,0.3)" }}>
              <Text onPress={()=>{console.log(this.state.planches[0].image)}}>Slide 6</Text>
            </View>
          </Swiper>
        </View>
        {(this.state.swipperVertical) ?
          <View style={{ flex: 1 }}>
            <Swiper
              vertical
              loop
              timeout={-2.5}
              controlsProps={{
                dotActiveStyle: { backgroundColor: 'red' },
                cellsContent: {
                  'bottom-left': (<Text>SOME LOGO</Text>),
                }
              }}
            >
              <View style={{ flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: "rgba(20,20,200,0.3)" }}>
                <Text>Slide 1</Text>
              </View>
              <View style={{ flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: "rgba(20,200,20,0.3)" }}>
                <Text>Slide 2</Text>
              </View>
              <View style={{ flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: "rgba(200,20,20,0.3)" }}>
                <Text>Slide 3</Text>
              </View>
            </Swiper>
          </View>
          : null}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    flex: 4,
    position: 'absolute',
    zIndex: -1,
    height: '90%',
    width: '90%',
    resizeMode: 'center'
  }
})