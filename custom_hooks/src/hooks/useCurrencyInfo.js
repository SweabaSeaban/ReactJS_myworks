import React from 'react'
import { useQuery } from 'react-query'

const fetchCurrencyInfo=  async(currency)=>{
    const response = await fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
    if(!response.ok){
        throw new Error ('Failed to fetch currency info')
    }
    const data=await response.json()
    return data[currency]
}
const useCurrencyInfo = (currency) => {
    const {data,error}= useQuery({
        queryKey:['currencyInfo',currency],
        queryFn:()=>fetchCurrencyInfo(currency)
    }
    )
    if(!data){
        if(error){
            console.log('Error fetching data:',error)
        }
    }
    return data
}

export default useCurrencyInfo