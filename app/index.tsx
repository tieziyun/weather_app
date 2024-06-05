import React from "react";
import {View, StyleSheet} from "react-native";
import CurrentWeather from "../src/screens/CurrentWeather";
import UpcomingWeather from "../src/screens/UpcomingWeather";
const App = () => {
    return(
        <View style = {TopStyles.container}>
            {/* <CurrentWeather /> */}
            <UpcomingWeather />
        </View>

        
    );
};


const TopStyles = StyleSheet.create({
    container:{
        flex: 1
    }
});



export default App;