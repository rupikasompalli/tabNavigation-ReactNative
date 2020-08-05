import React,{useState} from "react";
import {StyleSheet, SafeAreaView, View, Text, Button,TextInput} from "react-native";

function BlueScreen({navigation}) {
    const [name,nameChanged] = useState("");
    const [age,ageChanged] = useState("");

    const nextScreenPressed = () => {
        navigation.navigate("Screen3",{personName:name,personAge:age});
        //sending data to next screen

        nameChanged("");
        ageChanged("");
    }

    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.h1}>This screen is blue</Text> 
            <TextInput style = {{height : 40, borderColor:"gray",borderWidth:1,width:"70%",backgroundColor:"white"}} 
            onChangeText = {text => nameChanged(text)}
            value = {name}>
            </TextInput>
            <TextInput style = {{height : 40, borderColor:"gray",borderWidth:1,width:"70%",backgroundColor:"white"}} 
            onChangeText = {text => ageChanged(text)}
            value = {age}>
            </TextInput>
            <Button 
                title="Go to next screen"
                onPress={ nextScreenPressed }
            />
        </SafeAreaView>
    );
}

export default BlueScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#07d7f2',
      alignItems: 'center',
      justifyContent: 'center',
    },
    h1: {
        fontSize:40,
    }
});