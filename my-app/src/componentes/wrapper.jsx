import { useState } from "react";
import {theme,darktheme,ThemeContexts} from '../theme/theme'

function Wrapper ({children}){
const [modo, setModo]= useState(theme.root)

   const setTheme=()=>{
       setModo((v)=> v===darktheme.root ? theme.root : darktheme.root)
   }

   return <ThemeContexts.Provider value={[
      modo,
      setTheme
  ]}>
  {children}
  </ThemeContexts.Provider>
   
}

export default Wrapper;