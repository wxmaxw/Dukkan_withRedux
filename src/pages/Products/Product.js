import React, {useState, useEffect} from "react";
import { SafeAreaView, Text ,FlatList, ActivityIndicator} from "react-native";
import axios from "axios";

import ProductCard from "../../components/ProductCard"; //hepsinin pathini kısalttım
import useFetch from "../../hooks/useFetch";
import Loading from "../../components/Loading";
import Error from "../../components/Error";
import SearchBar from "../../components/SearchBar";
import { useDispatch, useSelector } from "react-redux";


const Products = ({navigation}) => {

  const apiUrl = process.env.EXPO_PUBLIC_API_PRODUCT_URL;

  const {loading,data,error,list, setList} = useFetch(apiUrl)  // istekleri atmak için kurduk
  const dispatch = useDispatch();
  const user = useSelector(s => s.user)

  const handleProductSelect = id => {
      navigation.navigate("DetailPage",{id});
  };

  const renderProduct = ({item}) => <ProductCard product={item} onSelect={() =>handleProductSelect(item.id)}/>;

  if(error){
    return <Error />;
  }

  if(loading){
    return <Loading />
  }

  const handleSearch = (text) =>{
    const searchText = text.toLowerCase();
    const filteredList = data.filter((item) =>{ 
      const currentTitle = item.title.toLowerCase();
      return currentTitle.indexOf(searchText) > -1;

    });
    setList(filteredList);
  };

  return (
    <SafeAreaView>
      <SearchBar  onSearch={handleSearch}/>
      <Text>Hello: {user.name.firstname}</Text>
      <FlatList data={list} renderItem={renderProduct}/>  
    </SafeAreaView>
  );
};

export default Products;

//list yerine dta yaz flatList içine