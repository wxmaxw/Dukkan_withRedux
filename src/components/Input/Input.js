import React from "react";
import { View, TextInput } from "react-native";
import styles from "./Input.style";
import Icon from '@expo/vector-icons/MaterialCommunityIcons';

const Input = ({placeholder, onType, value, secureTextEntry, iconName}) => { // onType onChangeText'e göndermek için verdiği herhangi bir isimlendirme 
    return(                                      // sen onChangeText diye isimlendirsen daha iyi bence 
        <View style={styles.container}>
            <TextInput style={styles.input}placeholder={placeholder} onChangeText={onType} value={value} secureTextEntry={secureTextEntry}/> 
            <Icon name={iconName} size={25} color="grey"/>
        </View>
    );
};
 
export default Input;

//Bu value kısmına {"Merve"} yazsaydın placeholder değerlerine sen default olarak Merve'yi ataöış olacaktın. 
//Ama biz gelen value'ya göre değişsin kaydedilsin istediğimiz için value atadık.
