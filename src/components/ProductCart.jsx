import { useState } from "react";

import {ProductList} from "./ProductList";
import {Basket} from "./Basket";

export function ProductCart() {
    const [basket, setBasket] = useState([])

    function removeFromCart(obj){
        setBasket((prev) => {
            return prev.filter((item) => item.name !== obj.name)
        })
    }
    function addToCart(obj){
        setBasket((prev) => {
            return [...prev, obj]
        })
    }

    return (
        <>
            <ProductList basket={basket} removeFromCart={removeFromCart} addToCart={addToCart} />
            <Basket basket={basket}/>
        </>
    )
}
