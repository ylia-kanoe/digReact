import { useState } from "react";
import {ProductList} from "./ProductList";
import { Header } from "./Header";

export function ProductCart() {
    const [basket, setBasket] = useState([])
    const [sum, setSum] = useState(0)

    function removeFromCart(obj){
        setBasket((prev) => {
            setSum(+sum - obj.price)
            return prev.filter((item) => item.name !== obj.name)
        })
    }

    function addToCart(obj){
        setBasket((prev) => {
            setSum(+sum + obj.price)
            return [...prev, obj]
        })
    }

    return (
        <>
            <Header basket={basket} sum={sum}/>
            <ProductList basket={basket} removeFromCart={removeFromCart} addToCart={addToCart}
            /* addLike={addLike} removeLike={removeLike}*//>
        </>
    )
}
