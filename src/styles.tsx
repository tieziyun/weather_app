
import { StatusBar, StyleSheet, Dimensions } from "react-native";


export const styles = StyleSheet.create({
    container: {

        flex: 1,
        justifyContent: "center",
        alignItems: "center",


    },
    Item:{
        padding:20,
        margin:20,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        borderWidth:5,
        borderColor:"blue",
        backgroundColor:"red",
    },
    wrapper:{
        flex:1,

        //marginTop: StatusBar.currentHeight || 0,
        //borderWidth:10
 
    },
    temp:{
        color: "black",
        fontSize: 22,
    },
    feels:{
        color: "black",
        fontSize: 22,  
    },
    highLow:{
        color: "black",
        fontSize: 22,
    },
    highLowWrapper:{

        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        borderWidth:10,

    },
    bodyWrapper:{
        justifyContent: "flex-end",
        alignItems:"center",
        padding:25,
    },
    description:{
        color: "black",
        fontSize: 22,
    },
    message:{
        color: "black",
        fontSize: 22,
    },
    messageWrapper:{
        justifyContent: "flex-end",
        
  
    },
    text:{
        //width: "100%",
        textAlign:"center",
    },
    imagelayout:{
        flex:1,
 
        resizeMode:"cover",
        width: "100%",
        height: "100%"
    },
    topicWrapper:{
        alignItems:"center",
        padding:20,
        borderWidth:5,
        borderColor: "red",

    },
    topicText:{
        color: "white",
        fontSize: 40

    },
    populationWrapper:{
        alignItems:"center",
        flexDirection: "column"
    },
});