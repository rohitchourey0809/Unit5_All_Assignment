
import { useEffect, useState } from "react"

import { createContext } from "react"

import {useState,useEffect } from "react"
export const CartContext = createContext()

//?Jsx
export const CartContextProvider = ({ children }) => {
    const { cart, setCart } = useState(0)

    const handlechange = (inc) => {
        setCart(cart + inc)
    }
    return <CartContext.Provider value={{ cart, handlechange
}}>{children}
        <App />
    </CartContext.Provider>
}