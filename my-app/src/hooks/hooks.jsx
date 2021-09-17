import { useEffect, useState } from 'react'



export function useAuth() {
     return sessionStorage.getItem("token") !== "" && sessionStorage.getItem("token") !== null
}


//////------------------ fetch------------------

export function useFetch (url, options) {
     const [data, setData] = useState(null);
     const [error, setError] = useState(null); 
     useEffect(() => {
         const fetchData = async () => {
            
             try {
                 const resp= await fetch(url, options);
                 const data = await resp.json();
                 setData(data);
             } catch (e) {
                 setData(null);
                 setError(e);
             }       
         }
         fetchData();
     },[]);
     return { data, error, setData }
 } 

/////////////Geoloca------------------------

export function  useGeolocation  () {
    const [lat, setlat] = useState();
    const [lon, setlon] = useState();
  
    const geoback = (position) => {
        let { latitude, longitude } = position.coords;
        setlon(longitude);
        setlat(latitude);
     };
    navigator.geolocation.getCurrentPosition(geoback);
    return { lat,lon }
  };

  //////////BadgeCounter----------------ç

 export  function useBadgeCounter(url,options){ 
    const [counter, setCounter] = useState(0);
    const [counterClient, setCounterClient] = useState(0);
    const [dataMessage,setDataMessage]=useState(null)
 
     useEffect(() => {
         const fetchData = async () => {
            
             try {
                 const resp= await fetch(url, options);
                 const data = await resp.json();
                 const arrayHelper=data.data
                 const arrayClient=data.data
                 setDataMessage(arrayHelper)
                 let contador=0
                 let contadorClient=0
                 arrayHelper.forEach((v)=>{
                     if( v.type==="pending") contador++
                     })
                     arrayClient.forEach((v)=>{
                        if( v.type==="accepted") contadorClient++
                        })
                        setCounterClient(contadorClient)
                 setCounter(contador)
              ;
             } catch (e) {
                 setCounter(0);
                 
             }       
         }
         fetchData();
     },[]);
     
     return { counter,dataMessage,counterClient}

}

////////reservas----------
export  function useReservasFecth(url,options){ 
    
    
    const [data,setData]=useState(null)
 
     useEffect(() => {
         const fetchData = async () => {
            
             try {
                 const resp= await fetch(url, options);
                 const data = await resp.json();
                 const array=data.data
                 const info=array.filter((v) => {
                    return v.type==="accepted"
                  })
                  setData(info)
              ;
             } catch (e) {
                setData(null);
                 
             }       
         }
         fetchData();
     },[]);
     
     return { data}

}