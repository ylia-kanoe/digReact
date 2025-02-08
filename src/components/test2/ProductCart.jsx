import { useState, useEffect } from "react";

import {ProductList} from "./ProductList";
import {Basket} from "./Basket";
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

   /* function addLike(obj){
           
    }

    function removeLike(obj){
        
    }*/

    return (
        <>
            <Header basket={basket} sum={sum}/>
            <ProductList basket={basket} removeFromCart={removeFromCart} addToCart={addToCart}
            /* addLike={addLike} removeLike={removeLike}*//>
        </>
    )
}



    /*const [data, setData] = useState([basket, sum]);

    useEffect(() => {
        setData([basket, sum])
        localStorage.setItem('dataKey', JSON.stringify(data));
    }, [sum]);
    
    const [dataOpen, setDataOpen] = useState(() => {
    const saved = localStorage.getItem("dataKey");
    const initialValue = JSON.parse(saved);
    console.log(saved)
    return initialValue || "";
    });
*/

