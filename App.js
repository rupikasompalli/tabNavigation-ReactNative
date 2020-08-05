import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


// 0. Import any of the necessary screens
import BlueScreen from "./BlueScreen"
import YellowScreen from "./YellowScreen"
import PinkScreen from "./PinkScreen"

// 1. import navigation libraries (components)
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//for icons 
import { EvilIcons } from '@expo/vector-icons';
// 2. Create a stack navigator
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
       <Tab.Navigator
       screenOptions = {
              ({route}) =>({
                  tabBarIcon:({focused,color,size}) =>{
                    //icon cde
                    if(route.name === "Screen1"){
                        return <EvilIcons name="bell" size={size} color={color} />
                    }
                    else if(route.name === "Screen2"){
                        return <EvilIcons name="cart" size={30} color="pink" />
                    }
                    else if(route.name === "Screen3"){
                        return <EvilIcons name="comment" size={30} color="gold" />
                    }
                  }
              })
       }
       tabBarOptions = {
         {
           activeTintColor:"red",
           inactiveTintColor:"gray"
         }
       }

       >
       <Tab.Screen name="Screen1" component={ BlueScreen } />
       <Tab.Screen name="Screen2" component={ YellowScreen } initialParams = {{personName:"ella",personAge:"50"}}/>
       <Tab.Screen name="Screen3" component={ PinkScreen } initialParams = {{personName:"steella",personAge:"10"}}/>

     </Tab.Navigator>

    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
