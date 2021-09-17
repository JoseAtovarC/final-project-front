import { ThemeProvider } from "@material-ui/core";
import { useState } from "react";
import { theme, darktheme, ThemeContexts } from '../theme/theme'

function Wrapper({ children }) {
    const [modo, setModo] = useState(theme)

    const setTheme = () => {
        setModo((v) => v === theme ? darktheme : theme)
    }

    return <ThemeContexts.Provider value={[
        modo,
        setTheme
    ]}>
        <ThemeProvider theme={modo}>
            {children}
        </ThemeProvider>
    </ThemeContexts.Provider>

}

export default Wrapper;