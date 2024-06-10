import React from "react";
import { ImageBackground, SafeAreaView, Text, FlatList, View, StyleSheet, ImageStyle} from "react-native";
import {styles} from "../styles";
import { DataItem, ListItem} from "../components/ListItem";

import { IconText } from "../components/IconText";
const City = () => {
    
    return (
        <SafeAreaView style= {styles.wrapper}>
            <ImageBackground  source={require("../../assets/images/image.webp")} 
           style={styles.imagelayout} >
            
                <View style={styles.topicWrapper}>
                    <Text style={styles.topicText}>city name</Text>
                    <Text style= {styles.topicText}>country</Text>
                </View>
                    <IconText IconName="user" IconColor="white" BodyText="pupulation number"/>
                <View style={styles.highLowWrapper}>
                    <IconText IconName="sunrise" IconColor="white" BodyText="arstarstars"/>
                    <IconText IconName="sunset" IconColor="white" BodyText="arstarstars"/>
                </View>

                    
                    
                
            </ImageBackground>


        </SafeAreaView>
    );
};
export default City;