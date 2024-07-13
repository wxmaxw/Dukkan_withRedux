import React from "react";
import { Text,TouchableOpacity, ActivityIndicator } from "react-native";
import styles from "./Button.style";


const Button = ({text, onPress, loading}) => {
    return(
        <TouchableOpacity 
        style={styles.container} 
        onPress={onPress} 
        disabled={loading}>  
            {loading ? (
                <ActivityIndicator color="white"/>
            ): (
            <Text style={styles.title}>{text}</Text>
            )}
        </TouchableOpacity>
    );
};

export default Button;
//disabled loading true olduğunda yani loading yapılırken butona tekrar tekrar basmayı engelliyor