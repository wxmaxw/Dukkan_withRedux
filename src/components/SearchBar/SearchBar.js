import React, {useState} from 'react';
import { SafeAreaView, TextInput, View } from 'react-native';
import styles from "./SearchBar.style"
import useFetch from '../../hooks/useFetch';

const SearchBar = props => {
   const apiUrl = process.env.EXPO_PUBLIC_API_URL;
   const {list, loading, data, error} = useFetch(apiUrl)
   
    

    return(
       <View style={styles.searchBar}>
          <TextInput 
          style={styles.input}
          placeholder = "Search item..."
          onChangeText={props.onSearch}
          value= {list}
          />
       </View> 
    );

};
export default SearchBar;