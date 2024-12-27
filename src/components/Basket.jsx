import { useState } from "react";

export function Basket(props) {
    let classBasketIcon = props.basket.length !== 0 ? 'basket__iconNum' : 'close'
    const [basketClassName, setBasketClassName] = useState("basket__list")

    const handleMouseEnter = (e) => {
        props.basket.length !== 0 ? setBasketClassName("basket__list open") : setBasketClassName("basket__list") 
    }
         
    const handleMouseLeave = (e) => {
        setBasketClassName("basket__list")
    }

    function deleteProduct(obj){
        /*removeFromCart(obj)*/
      console.log(obj)
    }

    return (
        <div className="basket" 
        onMouseEnter={handleMouseEnter} 
        onMouseLeave={handleMouseLeave}>
            <div className="basket__icon">
                <img src={require('../img/basket.png')}/>
                <div className={classBasketIcon}>{props.basket.length}</div>
            </div>

            <div className={basketClassName}>
                {props.basket.map((item) => 
                    <div className="basket-item">
                        <p className="product-name">{item.name}</p>
                        <p className="product-price">{item.price}
                            <p className="product-delete" onClick={() => deleteProduct(item)}>❌</p>
                        </p>          
                    </div>
                )}
            <div className="basket__sum">Итого: {props.sum === 0 ? '' : props.sum}</div>
            </div>
        </div>
    )
}
