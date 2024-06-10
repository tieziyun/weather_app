import React from "react";
import {View, Text, StyleSheet } from "react-native";
import { styles } from "../styles";
export interface RowText {
    HighTemp: number,
    LowTemp: number,
}

export const RowText:React.FC<RowText> = ({HighTemp, LowTemp}) => {
    return (
        <View style = {styles.highLowWrapper}>
            <Text style = {styles.highLow}>High: {HighTemp}</Text>
            <Text style = {styles.highLow}>Low: {LowTemp}</Text>
        </View>

    );
};