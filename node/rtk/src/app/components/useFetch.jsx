import axios from "axios";
import React, { useEffect, useState } from "react";

const useFetch = ()=>{
const [data , setData] = useState([]);
    const fetchData = async()=>{
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
            setData(response.data);
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        fetchData();
    },[]);
    return {data};
}


export default useFetch;