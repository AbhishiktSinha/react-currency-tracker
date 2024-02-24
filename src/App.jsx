import { useState, useContext, useEffect } from 'react'
import './App.css'
import apiContext from './context/apiContext'
import makeApiCall from './api';
import CurrencyDetailsRow from './components/CurrencyDetailsRow';


function App() {  

  const {apiState, setApiState} = useContext(apiContext);

  useEffect(()=>{

    (async function () {
      const response = await makeApiCall();

      setApiState({...apiState, loading: false, ...response})
    })()
  }, [])

  
  return (
    <div id="main">

      {
        apiState.loading && (
          <div className="loading-container">
            <h2>Loading...</h2>
          </div>
        )        
      }

      {
        apiState.error && (
          <div className="error-container">
            <h2>Whoops! Something went wrong</h2>
          </div>
        )
      }

      {
        apiState.data && (
          <div className="data-container">

            <table className="currency-details-table">
              <tbody>
              {                
                apiState.data.map( (item)=> {

                  const {
                    id, 
                    image, 
                    name, 
                    symbol, 
                    current_price, 
                    fully_diluted_valuation, 
                    price_change, 
                    market_cap} = item;

                  return (
                    <CurrencyDetailsRow 
                      key={item.id}
                      item={item}
                    />
                  )

                })
              }
              </tbody>
            </table>
          </div>
        )
      }

    </div>
  )
}

export default App
