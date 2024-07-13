import { StyleSheet,Dimensions } from "react-native";


export default StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:"#64b5f6",
    },
    title:{
        fontSize:50,
        textAlign:"center",
        fontWeight:"bold",
        color:"white",
        marginTop:50,

    },
    logo:{
        height:Dimensions.get("window").height/4,
        width:Dimensions.get("window").width,
        resizeMode:"contain",
        alignSelf:"center",
        //tintColor:"white",
        marginTop:90,
    },
    logo_container: {
        justifyContent:"center",
        //flex:1,   //flex 1 leri ben yorum satırına aldım üst üste çakışıyordu diye
    },
    body_container: {
        //flex:1,
    },
    errorText: {
        color: 'red',
        fontSize: 14,
        marginBottom: 8,
      },
    
});