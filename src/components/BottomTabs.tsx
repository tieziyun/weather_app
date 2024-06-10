import React from "react";
import { View, StyleSheet } from "react-native";
import CurrentWeather from "../screens/CurrentWeather";
import UpcomingWeather from "../screens/UpcomingWeather";
import City from "../screens/City";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();
const ClearScreen: React.FC = () => <CurrentWeather type="Clear" />;
export const BottomTabs:React.FC = () => {
    return (
        <NavigationContainer independent={true}>
        <Tab.Navigator              
            initialRouteName="ClearScreen"
            screenOptions={{
                tabBarActiveTintColor:"tomato",
                tabBarInactiveTintColor:"black",
            }}
            

        >
        <Tab.Screen 
            name="ClearScreen"    
            component={ClearScreen } 
            options={{
            tabBarIcon:({ focused }) =>(
                <Feather 
                    name={"droplet"}
                size={25}
                    color={focused ? "tomato":"black" }
                
                />)
            }} 
        
        />
        <Tab.Screen 
            name="UpcomingWeather"
            component={UpcomingWeather} 
            options={{
            tabBarIcon:({ focused }) =>(
                <Feather 
                    name={"clock"}
                    size={25}
                    color={focused ? "tomato":"black" }
                
                />)
            }} 
        />
        <Tab.Screen 
            name="City" 
            component={City} 
            options={{
            tabBarIcon:({ focused }) =>(
                <Feather 
                    name={"home"}
                    size={25}
                    color={focused ? "tomato":"black" }
                
                />)
            }} 
        /> 
      </Tab.Navigator>
    </NavigationContainer>
    );
};