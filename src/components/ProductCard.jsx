import { useState } from "react"

export function ProductCard(props) {
    
    const [like, setLike] = useState(0)
    let likeCheck = like ? 'like likeCheck' : 'like'

    function addLike(){
        return setLike(+like + 1)
    }

    function removeLike(){
        return setLike(+like - 1)
    }

    return (
        <div className="product-item">
            <div className={likeCheck} onClick={() => !like ? addLike() : removeLike()}>♡</div>
            <img className="product-image" src={require('../img/' + props.image)}/>
            <p className="product-name">{props.name}</p>
            <p className="product-info">{props.info}</p>
            <p className="product-price">{props.price} руб</p>
            <button onClick={props.onClick}>{props.buttonName}</button>         
        </div>
    )
}
