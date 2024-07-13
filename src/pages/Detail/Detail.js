import React, { useEffect } from "react";
import { View, Text, Image } from "react-native";
import styles from "./Detail.style";
import useFetch from "../../hooks/useFetch";
import Loading from "../../components/Loading/Loading";
import Error from "../../components/Error/Error";


const Detail = ({route}) => {
    const {id} = route.params
    const apiUrl = process.env.EXPO_PUBLIC_API_PRODUCT_URL;
    const {loading, error, data} = useFetch(apiUrl + "/" + id);


    if(error){
      return <Error />;
    }
          
    if(loading){
      return <Loading />
    }

    return(
        <View style={styles.container}>
            <Image source={{uri: data.image}} style={styles.image}/>
            <Text style={styles.title}>{data.title}</Text>
            <Text style={styles.desc}>{data.description}</Text>
            <Text style={styles.price}>{data.price} TL</Text>
        </View>
    );
};

export default Detail;