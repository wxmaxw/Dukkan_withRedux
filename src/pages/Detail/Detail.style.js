import { StyleSheet, Dimensions } from "react-native"; 
//telfonunn kendi bilgilerini getirir dimensions

const deviceSize = Dimensions.get("window");

export default StyleSheet.create({
    container: {
        flex:1
    },
    body_container:{padding:10},
    image: {
        width: deviceSize.width,
        height: deviceSize.height/3,
        resizeMode:'contain',
        backgroundColor:'white',
        
    },
    title: {fontWeight: 'bold', fontSize: 25},
    desc: {fontStyle: 'italic', marginVertical:5},
    price: {fontSize:22, fontWeight: 'bold', textAlign: 'right'},

});