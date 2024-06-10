import React from "react";
import {View, Text, TextProps} from "react-native";
import { IconProps, } from "@expo/vector-icons/build/createIconSet";
import { Feather } from "@expo/vector-icons";
import { styles } from "../styles";

//ignore this error!!! this is correct!
export interface IconItem{
    IconName: typeof Feather.name,
    IconColor: string,
    BodyText:string,
}

export const IconText:React.FC<IconItem> = ({IconName, IconColor, BodyText }) => {

    return(
        <View style={styles.topicWrapper}>
            
            <Feather name={IconName} size= {50} color={IconColor} />
            <Text style= {styles.topicText}>{BodyText}</Text>
                       
        </View>
    );
};


