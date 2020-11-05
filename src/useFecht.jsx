import React, {useEffect, useState} from 'react';

//this is a personalize hook
export const useFecth=(url)=>{

const [prueba, setPrueba] = useState("");
const [Data, setData] = useState({data: null, loading: null});

    useEffect(async() => {
        setData(Data => ({data: Data.data, loading:null})) ;
       fetch(url).then(x => x.text()).then(y=>{
           setData({data: y , loading: false})
              })
        // console.log(fetch)
    }, [url, setData]);

    return Data; 
};