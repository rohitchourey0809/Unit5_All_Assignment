import { CartContext } from "../Context/CartContext"
// import { cartContext } from "../Context/CartContext"
import { useContext } from "react"

export const NAVBAR = () => {
    const { cart } = useContext(CartContext)
    return (
        <navbar
            style={{
                display: "flex",
                justifyContent: "end",
                padding: "15px",
                border: "1px solid red",
                margin: "5px",
                fontSize: "20px"
            }}>
            Cart : {cart}
        </navbar>
    )
}