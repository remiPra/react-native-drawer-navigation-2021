// In App.js in a new project
import * as React from 'react';
import { Image, View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Button, Overlay, Icon } from 'react-native-elements';
//import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerContent from './screens/drawer/DrawerContent';
// import Home from './screens/home/HomeScreen';
import Swipper from './screens/swipper/Swipper'
import { abs, set } from 'react-native-reanimated';
import { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';
import db from './firebase/firebase';
import Ploty1 from './screens/plotly/Plotly1';
import Example from './screens/plotly/Example';
import BarchartSimple from './screens/component/barchart/BarchartSimple'
import { Card, Input } from 'react-native-elements';
import HomeEnter from './screens/home/HomeEnter';
import { useFonts } from 'expo-font';
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
import { firebaseExample } from './screens/firebaseExample/FirebaseExample';
import { LogBox } from 'react-native';

LogBox.ignoreLogs(['Setting a timer']);




function Planches({ navigation }) {
  const [tasks, setTasks] = useState([])
  const [visible, setVisible] = useState(false);
  //car on a une branche en ""
  const [search, setSearch] = useState("")
  const [buttonText, setButtonText] = useState('Search')

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

  const toggleOverlay = () => {
    if (search == "") {
      setVisible(!visible);
    }
    else {
      setSearch("")
      setButtonText('Search')
      setBlack('navy')
    }
  };
  useEffect(() => {

    db.collection('piechart')
      .get()
      .then(result => result.docs)
      .then(docs => docs.map(doc => ({
        id: doc.id,
        title: doc.data().title,
        imgData: doc.data().imgData,
        heightPlanche: doc.data().heightPlanche,
        widthPlanche: doc.data().widthPlanche / 1.5,
        heightPlanche: doc.data().heightPlanche / 1.5,
        border: doc.data().border,
        color: doc.data().color,
        name: doc.data().name,
        values: doc.data().values,
        fontSizeTextPie: doc.data().fontSizeTextPie / 1.5,
        fontSizeTitlePie: doc.data().fontSizeTitlePie,
        stylePlanche: doc.data().stylePlanche
      })))
      .then(tasks => setTasks(tasks))


  }, []);

  const [black,setBlack] = useState("navy")
  if (!fontsLoaded) {
    return <Text>merde</Text>
    // return <AppLoading />;
  } else {

  return (
    <View style={{ backgroundColor: "white", flex: 1, alignItems: 'center', justifyContent: 'center' }}>


      <TouchableOpacity onPress={toggleOverlay} style={ 
        {
        borderColor: black, borderRadius: 35, borderWidth: 2,
        display: 'flex', position: 'absolute', bottom: 50, right: 30, zIndex: 2222,
        justifyContent: 'center', alignItems: "center",
        width: 70,
        height: 70, backgroundColor:black,
      }}>
        <Text style={{ color: 'white' }}>
          {buttonText}
        </Text>
      </TouchableOpacity>



      <Overlay overlayStyle={{borderColor:'navy',borderWidth:5,width:'80%',
      borderRadius:50,borderStyle:'solid',justifyContent:'center',alignContent:'center'}} fullScreen={false} isVisible={visible} onBackdropPress={toggleOverlay}>
        <View style={styles.view}>
          <Text style={styles.textPrimary}>Rechercher Votre Planche</Text>
          <Input  mode=''  onChangeText={a => { setSearch(a); setButtonText('Reset'),setBlack('pink') }} 
          style={styles.textInput} placeholder='Rechercher dans titre....' style={{ color: "navy" }} />
          <Button
          buttonStyle={{borderRadius:40,marginLeft:'auto',marginRight:'auto',width:80,height:80,backgroundColor:'pink'}}
            icon={
              <Icon
                name="search"
                type="font-awesome"
                color="white"
                size={25}
                iconStyle={{ marginRight: 1}}
              />
            }
            onPress={() => { setVisible(false) }}
            style={{backgroundColor:'pink'}}

          />
        </View>
      </Overlay>
      <ScrollView minimumZoomScale={1} maximumZoomScale={5} style={{ width: '100%' }}>
        {(tasks != null) && (tasks?.map(task =>
        ((task.id != "" && (search == "" || task.title.toLowerCase().includes(search.toLowerCase()))) &&
          <View style={{
            position: 'relative', flex: 1,
            width: '100%', height: 300, marginTop: 50, textAlign: 'center',
            justifyContent: 'center'
          }} key={task.id}>
            <Text style={{
              marginTop: 50, fontSize: 20,
              color: 'navy',
              textAlign: 'center',
              fontFamily:'PlayfairDisplay_400Regular'
            }}>{task.title}</Text>
            <View style={{
              position: 'relative', marginLeft: 'auto',
              marginRight: 'auto',
              width: 360, overflow: 'hidden', justifyContent: 'center',
              height: 240
            }}>
              <View style={{
                transform: [{ scale: 1.1 }],
                width: 500,
                height: 500, marginTop: -130, marginLeft: -125

              }}>
                <BarchartSimple


                  title={task.title}
                  imgData={task.imgData}
                  heightPlanche={task.heightPlanche}
                  widthPlanche={task.widthPlanche}
                  heightPlanche={task.heightPlanche}
                  border={task.border}
                  color={task.color}
                  name={task.name}
                  values={task.values}
                  fontSizeTextPie={task.fontSizeTextPie}
                  fontSizeTitlePie={task.fontSizeTitlePie}

                />
              </View>
            </View>
            {/* <Image source={{uri:task.imgData}} style={{transform:[{scale:1.3}],justifyContent:'center',width:'100%',height:200}} /> */}
          </View>)
        )

        )}

        {(tasks?.length < 6) && (<View>
          <Text>Waiting</Text>
        </View>)}

      </ScrollView>

    </View>
  );}
}



// const Stack = createNativeStackNavigator();

// function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Home" component={HomeScreen} />
//         <Stack.Screen name="Planches" component={HomeScreen2} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }



const Drawer = createDrawerNavigator();

function App() {
  return (
    <NavigationContainer >
      <Drawer.Navigator
        screenOptions={{ headerTintColor: 'white', headerStyle: { backgroundColor: 'navy' } }}
        drawerContent={props => <DrawerContent{...props} />}
        initialRouteName="HomeEnter">
        {/* <Drawer.Text>hello</Drawer.Text> */}
        {/* <Drawer.Screen name="Home" component={Home} /> */}
        <Drawer.Screen name="HomeEnter" component={HomeEnter} />
        <Drawer.Screen name="Planches" component={Planches} />
        <Drawer.Screen name="Plotly1" component={Ploty1} />
        <Drawer.Screen name="Swipper" component={Swipper} />
        <Drawer.Screen name="Example" component={Example} />
        <Drawer.Screen name="FirebaseExample" component={firebaseExample} /> 
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  button: {
    marginTop: 20
  },
  view: {
    alignContent: 'center',
    height: 250,
    padding: 15,
    fontFamily:'PlayfairDisplay_400Regular'
  },
  textPrimary: {
    fontFamily:'PlayfairDisplay_400Regular',
    paddingVertical: 10,
    textAlign: 'center',
    fontSize: 20,
  },

  textInput: {
    marginBottom: 30,

  }
});



export default App;