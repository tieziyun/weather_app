import { Text, View} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import { styles } from "../styles";
import { Feather } from "@expo/vector-icons"; 


export default function CurrentWeather() { 
const myString = "Hello, TypeScript!";
return (
    <SafeAreaView style = {styles.wrapper}>
        <View style = {styles.container}>
            <Feather name ="sun" size = {100} color = "black" />
            <Text>{myString}</Text>
            <Text>current weather</Text>
            <Text style = {styles.temp}>6</Text>
            <Text style = {styles.feels}>Feels like 5</Text>
            <View style = {styles.highLowWrapper}>
                <Text style = {styles.highLow}>High: 8 </Text>
                <Text style = {styles.highLow}>low: 6 </Text>
            </View>
        </View>

            
            <View style = {styles.bodyWrapper}>
                <Text style = {styles.description}>It&#39;s sunny</Text>
                <Text style = {styles.message}>It&#39;s perfect t-shirt time</Text>
            </View>


   
    </SafeAreaView>
  );
}
