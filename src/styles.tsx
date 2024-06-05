
import { StatusBar, StyleSheet } from "react-native";


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
        backgroundColor:"pink",
        marginTop: StatusBar.currentHeight || 0,
        //justifyContent:"center",
        //alignItems: "stretch",
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
        justifyContent: "center",
        alignItems: "center",
    },
    bodyWrapper:{
        justifyContent: "flex-end",
        alignItems:"flex-start",
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
    }
});