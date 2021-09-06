import { useState } from "react";
import {theme,darktheme,ThemeContexts} from '../theme/theme'

function Wrapper ({children}){
const [modo, setModo]= useState(theme.palette.primary)

   const setTheme=()=>{
       setModo((v)=> v===darktheme.palette.primary ? theme.palette.primary : darktheme.palette.primary)
   }

   return <ThemeContexts.Provider value={[
      modo,
      setTheme
  ]}>
  {children}
  </ThemeContexts.Provider>
   
}

export default Wrapper;