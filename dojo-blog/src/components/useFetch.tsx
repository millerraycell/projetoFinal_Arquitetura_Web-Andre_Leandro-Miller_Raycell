import { useEffect, useState } from 'react';

interface data_interface{
    title:string,
    author:string,
    body:string,
    id:number
}

const useFetch = (url: string) => {
    const [data, setData] = useState<data_interface[]>([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState()

    useEffect(()=>{
        const abortControl = new AbortController();

        fetch(url, {signal: abortControl.signal})
            .then(
                (res) => {
                    console.log(url)
                    if(!res.ok){
                        throw Error("Could not fetch the data for that request")
                    }
                    return res.json()
                }
            )
            .then(
                (data) => {
                    setData(data)
                    setIsLoading(false)
                }
            )
            .catch(error => {
                if (error.name === "AbortError"){
                    console.log(error)
                }  
                else{
                    console.log(error)
                    setIsLoading(false)
                    setError(error.message)
                }
            })
        return() => abortControl.abort()
        
    },[url])

  return {data, isLoading, error};
}

export default useFetch;