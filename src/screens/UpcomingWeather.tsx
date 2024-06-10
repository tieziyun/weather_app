import React from "react";
import { SafeAreaView, Text, FlatList, View } from "react-native";

import {styles} from "../styles";
import { DataItem, ListItem} from "../components/ListItem";

const DATA: DataItem[] = [
    { a: 1, b: 2, c: 3, id:"a"},
    { a: 4, b: 5, c: 6, id:"b"},
    { a: 7, b: 8, c: 9, id:"c"},
    //{a:null, b:null, c: null, id:"lala"},
    { a: 1, b: 2, c: 3, id:"d"},
    { a: 4, b: 5, c: 6, id:"e"},
    { a: 7, b: 8, c: 9, id:"f"},
    //{a:null, b:null, c: null, id:"lala"} ,   
    { a: 1, b: 2, c: 3, id:"h"},
    { a: 4, b: 5, c: 6, id:"i"},
    { a: 7, b: 8, c: 9, id:"j"},
    //{a:null, b:null, c: null, id:"lala"},
];




const Empty = () => (
    <View>
        <Text>Currently Empty!!!!!</Text>
    </View>
);

const UpcomingWeather: React.FC = () => {
    const renderItem = ({item}:{item: DataItem})=> (
    //const renderItem = ({item}: ListRenderItemInfo<DataItem>)=> (
   
        <ListItem
            a={item.a}
            b={item.b}
            c={item.c}
            id={item.id}
        />
    );
    return (
        <SafeAreaView style={styles.wrapper}>
            <View>
                <Text  style={styles.text}>hello upcoming weather</Text>
            </View>
            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                ItemSeparatorComponent={() => <View style={{backgroundColor:"red", height:2}} />} 
                ListEmptyComponent={<Empty />}
                />
                
        </SafeAreaView>
    );
};

export default UpcomingWeather;
