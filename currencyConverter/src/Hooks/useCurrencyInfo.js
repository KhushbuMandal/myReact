import { useState , useEffect } from "react";

// THis hook will return the data but what data 
function useCurrencyInfo (currency) {

    const [data , setData] = useState({});

    useEffect(() => {
        fetch(
            `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
        )
        .then((response) => response.json())
        .then((response)=>setData(response[currency]));

        console.log(data);
    } , [currency]);
    console.log(data);
    return data;

}


export default useCurrencyInfo;

// https://github.com/fawazahmed0/exchange-api