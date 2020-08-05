
import React from "react";
import {StyleSheet, SafeAreaView, View, Text, Button} from "react-native";

function PinkScreen({route,navigation}) {
    const nextScreenPressed = () => {
        navigation.navigate("Screen2");
    }

    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.h1}>This screen is pink</Text> 
             <Text style={styles.h1}>{route.params.personName}</Text> 
             <Text style={styles.h1}>{route.params.personAge}</Text> 

            <Button 
                title="Go to next screen"
                onPress={ nextScreenPressed }
            />
        </SafeAreaView>
    );
    
}

export default PinkScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fa9bed',
      alignItems: 'center',
      justifyContent: 'center',
    },
    h1: {
        fontSize:40,
    }
});