import React from "react";
import { Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import {styles} from "../styles";

export interface DataItem {
    a: number | null;
    b: number | null;
    c: number | null;
    id: string;
}

export const ListItem: React.FC<DataItem> = ({ a, b, c, id}) => {
    return (
        <View style ={styles.Item}>
            <Feather name="sun" size={50} color="white" />
            <Text>{a}</Text>
            <Text>{b}</Text>
            <Text>{c}</Text>
            <Text>{id}</Text>
        </View>
    );
};
//export default Item;