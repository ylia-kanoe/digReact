export function Basket(props) {
    return (
        <div>
            <div className="basketIcon"></div>
            <div className="basket">
                {props.basket.map((item) => 
                    <div className="basket-list">
                        <p className="product-name">{item.name}</p>
                        <p className="product-price">{item.price}</p>         
                    </div>
                )}
            </div>
        </div>
    )
}
