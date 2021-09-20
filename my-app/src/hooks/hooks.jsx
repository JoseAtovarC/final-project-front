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
    const [dataMessageClient,setDataMessageClient]=useState(null)
 
     useEffect(() => {
         const fetchData = async () => {
            
             try {
                 const resp= await fetch(url, options);
                 const data = await resp.json();
                 const arrayHelper=data.data
                 const arrayClient=data.data
                 setDataMessage(arrayHelper.filter((v) => {
                    return v.message !=="leido" && v.message !=="clienteLeido"
                  }))
                  setDataMessageClient(arrayHelper.filter((v) => {
                    return v.message==="leido"
                  }))

                 let contador=0
                 let contadorClient=0
                 arrayHelper.forEach((v)=>{
                     if( v.type==="pending") contador++
                     })
                     arrayClient.forEach((v)=>{
                        if( v.type==="accepted" && v.message ==="leido") contadorClient++
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
     
     return { counter,dataMessage,counterClient,dataMessageClient}

}

////////reservas----------
export  function useReservasFecth(url,options){ 
    
    
    const [data,setData]=useState(null)
        
    const [dataDone,setDataDone]=useState(null)
 
     useEffect(() => {
         const fetchData = async () => {
            
             try {
                 const resp= await fetch(url, options);
                 const data = await resp.json();
                 const array=data.data
                 const arrayDones=data.data
                 const info=array.filter((v) => {
                    return v.type==="accepted"
                  })
                  const infoDones=arrayDones.filter((v) => {
                    return v.type==="done"
                  })
                  setData(info)
                  setDataDone(infoDones)
              ;
             } catch (e) {
                setData(null);
                 
             }       
         }
         fetchData();
     },[]);
     
     return { data,dataDone}

}



export  function useFetchData(){ 
    
    
    const [dataArray,setDataArray]=useState(null)
    
 
     useEffect(() => {
         const fetchData = async () => {
            
             try {
                 const resp= await fetch(`http://localhost:4000/data`);
                 const data = await resp.json();
                 setDataArray(data);
                 
              ;
             } catch (e) {
                setDataArray(null);
                 
             }       
         }
         fetchData();
     },[]);
     
     return { dataArray}

}
