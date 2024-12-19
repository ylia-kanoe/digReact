export function ProductCard(props) {
    return (
        <div className="product-item">
            <img className="product-image" src={props.image} />
            <p className="product-name">{props.name}</p>
            <p className="product-info">{props.info}</p>
            <p className="product-price">{props.price} руб</p>
            <button onClick={props.onClick}>{props.buttonName}</button>
        </div>
    )
}
