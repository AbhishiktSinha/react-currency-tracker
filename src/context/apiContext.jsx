import { createContext, useContext } from "react";

const apiContext = createContext({
    loading: true,
    data: [],
    error: ""
})

export default apiContext;