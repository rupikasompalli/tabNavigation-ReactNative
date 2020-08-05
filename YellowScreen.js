import React from "react";
import {StyleSheet, SafeAreaView, View, Text, Button} from "react-native";

function YellowScreen({route,navigation}) {

    // the navigation object can only move to screens
    // that were defined in the App.js

    // If you try to go to a scren that wasn't part of App.js,
    // then it won't do anything
    
    const segueToNextScreen = () => {
        console.log("Hello world!");
        navigation.navigate("Screen1")
    }

    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.h1}>This screen is yellow</Text> 
            <Text style={styles.h1}>{route.params.personName}</Text> 
             <Text style={styles.h1}>{route.params.personAge}</Text>
            <Button 
                title="Go to next page"
                onPress={segueToNextScreen}/>
            
        </SafeAreaView>
    );
}

export default YellowScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f2df07',
      alignItems: 'center',
      justifyContent: 'center',
    },
    h1: {
        fontSize:40,
    }
});