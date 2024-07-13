import { useState,useEffect } from "react";
import axios from "axios";

function useFetch(apiUrl){
    
    const [list, setList] = useState([]);
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        try{
            const {data: responseData} = await axios.get(apiUrl)  //productData şeklinde data olarak parçaladığım datayı değiştirdim
            setData(responseData);
            setLoading(false);
            setList(responseData);
        }
        catch(err){
            setLoading(false);
            setError(err.message);
        }
    };

    useEffect(() => {
        fetchData();
    },[apiUrl]);

    return{error, loading, data, list, setList};  //list'i ekledim ama silebilirim
}

export default useFetch;