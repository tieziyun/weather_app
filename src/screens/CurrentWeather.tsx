import { Text, View} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import { styles } from "../styles";
import { Feather } from "@expo/vector-icons"; 
import { RowText } from "../components/RowText";
import { WeatherType } from "../utilities/WeatherType"; 
type WeatherProps = {
    type: keyof typeof WeatherType;
};


 const CurrentWeather: React.FC<WeatherProps> = ({ type }) => { 
const myString = "Hello, TypeScript!";

const weather = WeatherType[type];

return (
    <SafeAreaView style = {styles.wrapper}>
        <View style = {[styles.container, { backgroundColor: weather.BackgroundColor }]}>
            <Feather name ="sun" size = {100} color = "black" />
            <Text>{myString}</Text>
            <Text>current weather</Text>
            <Text style = {styles.temp}>6</Text>
            <Text style = {styles.feels}>Feels like 5</Text>
            <RowText HighTemp={88}
                     LowTemp={77}                    
            />
        </View>

            
            <View style = {styles.bodyWrapper}>
                <Text style = {styles.description}>It&#39;s sunny</Text>
                <Text style = {styles.message}>{WeatherType["Clear"].message}</Text>
            </View>


   
    </SafeAreaView>
  );
};
export default CurrentWeather;