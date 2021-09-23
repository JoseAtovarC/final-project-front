import { ThemeProvider } from "@material-ui/core";
import { useState } from "react";
import { theme, darktheme, ThemeContexts } from '../theme/theme'


function Wrapper({ children }) {
    const [modo, setModo] = useState(theme)
    const [logoColor,setLogo]=useState("#151948")

    const setTheme = () => {
        setModo((v) => v === theme ? darktheme : theme)
        setLogo(a=> a ==="#151948"?"#E95644":"#151948")
    }

    return <ThemeContexts.Provider value={[
        modo,
        setTheme,
        logoColor
    ]}>
        <ThemeProvider theme={modo}>
            {children}
        </ThemeProvider>
    </ThemeContexts.Provider>

}

export default Wrapper;