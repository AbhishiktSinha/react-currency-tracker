import React from 'react'
import ReactDOM from 'react-dom/client'
import ApiContextProvider from './context/ApiContextProvider'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ApiContextProvider>
    <App /> 
  </ApiContextProvider>,
)
