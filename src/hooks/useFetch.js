import { useEffect } from "react";
const { useState } = require("react");

function useFetch(url){
    const [data,setData] = useState(null);
    const [loading,setLoading] =useState(false);

    useEffect(()=>{
        setLoading(true);
        fetch(url)
        .then((res) =>res.json())
        .then((value)=>{
            setData(value);
            setLoading(false);
        })
        .catch(err=>{
            window.alert("Ocorreu um erro ao buscar os dados");
            console.error(err);
        })
        .finally(()=>setLoading(false));
    },[url]);

    return[data,loading];
}
export default useFetch;