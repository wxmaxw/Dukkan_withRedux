import React from "react";
import { SafeAreaView, Text, View, Image, Alert, ScrollView } from "react-native";
import { useDispatch } from "react-redux";
import { Formik } from "formik";
import * as Yup from 'yup';
import AsyncStorage from '@react-native-async-storage/async-storage';

import styles from "./Login.style";
import Input from "../../components/Input";
import Button from "../../components/Button/Button";
import usePost from "../../hooks/usePost";




const Login = ({navigation}) => {

  const dispatch = useDispatch();
  
  const {data, loading, error,post} = usePost();

  const apiUrl = process.env.EXPO_PUBLIC_API_AUTH_URL;

  function handleLogin(values) {
    console.log(values);
    post(apiUrl + "/login", values);
  }

  if(error){
    Alert.alert("Dükkan", "Bir hata oluştu!");
  }
  
  if(data){
    if(data.status == "Error"){
      Alert.alert("Dükkan", "Kullanıcı bulunamadı!");
    }
    else{
      dispatch({type: "SET_USER", payload: {user}});
      
      
    }
    console.log(data);
  }

  const SignupSchema = Yup.object().shape({
    username: Yup.string()
      .min(2, 'Too Short!')
      .max(25, 'Too Long!')
      .required('Required'),
    password: Yup.string()
      .min(2, 'Too Short!')
      .max(25, 'Too Long!')
      .required('Required'),
  });

  //AsyncStorage.setItem("@user", "ASSaD") içeriye veri kaydediyor
  //AsyncStorage.getItem("@user") değerleri getiriyor

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logo_container}>
        <Image style={styles.logo} 
        source={require("../../assets/logo_icon.png")} 
        />
        <Text style={styles.title}>Dükkan</Text>
      </View>
      <Formik 
        initialValues={{ username: "", password: "" }} 
        onSubmit={handleLogin} 
        validationSchema={SignupSchema}
      >
        {({ handleSubmit, handleChange, values, errors, touched }) => (
          <View style={styles.body_container}>
            <Input
              placeholder="Kullanıcı adını giriniz..."
              value={values.username}
              onType={handleChange("username")}
              iconName="account"
            />
            {errors.username && touched.username ? (
              <Text style={styles.errorText}>{errors.username}</Text>
            ) : null}
            <Input
              placeholder="Şifrenizi giriniz..."
              value={values.password}
              onType={handleChange("password")}
              secureTextEntry // Parola alanı için secureTextEntry özelliği ekleniyor
              iconName="key"
            />
            {errors.password && touched.password ? (
              <Text style={styles.errorText}>{errors.password}</Text>
            ) : null}
            <Button text="Giriş Yap" onPress={handleSubmit} loading={loading}/>
          </View>
        )}
      </Formik>
    </SafeAreaView>

  );
};

export default Login;

const user =  {
  id:1,
  email:'John@gmail.com',
  username:'johnd',
  password:'m38rmF$',
  name:{
      firstname:'John',
      lastname:'Doe'
  },
  address:{
      city:'kilcoole',
      street:'7835 new road',
      number:3,
      zipcode:'12926-3874',
      geolocation:{
          lat:'-37.3159',
          long:'81.1496'
      }
  },
  phone:'1-570-236-7033'
};