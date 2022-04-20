import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

// impor
// import { CartContextProvider } from "./Context/CartContext"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <CartContextProvider> */}
      <App />
    {/* </CartContextProvider> */}
  </React.StrictMode>
)
