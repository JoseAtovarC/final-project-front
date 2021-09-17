import { createContext} from "react";

let token = sessionStorage.getItem('token')


export const UserContext= createContext(token)
export function UserProvider({ children, value }) {
 
    return <UserContext.Provider value={token}>{children}</UserContext.Provider>
  }