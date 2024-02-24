import { useContext, useState } from "react";
import apiContext from "./apiContext";

const initialState = {
    loading: true,
    data: null, 
    error: ""
}

export default function ApiContextProvider({children}) {

    const [apiState, setApiState] = useState(initialState);

    return (
        < apiContext.Provider value={{apiState, setApiState}}>
            {children}
        </apiContext.Provider>
    )
}