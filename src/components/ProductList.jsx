import {ProductCard} from "./ProductCard";

const products = [
    {
        id: 1,
        name: "Куриное филе",
        image: "url1",
        info: "Какой-то текст про куриное ФИЛЕ",
        price: 300
    }, {
        id: 2,
        name: "Говяжья вырезка",
        image: "url2",
        info: "Какой-то текст про Говяжью вырезку",
        price: 1200
    }, {
        id: 3,
        name: "Страусиное яйцо",
        image: "url3",
        info: "Какой-то текст про Страусиное яйцо",
        price: 6000
    }, {
        id: 4,
        name: "Бекон",
        image: "url4",
        info: "Какой-то текст про Бекон",
        price: 500
    },
]

export function ProductList(props) {

    let productlist = products.map((item) => (
        <ProductCard id={item.id} image={item.image} name={item.name} info={item.info} price={item.price} 
        onClick={() => !props?.basket?.includes(item) ? props.addToCart(item) : props.removeFromCart(item) } 
        buttonName={!props?.basket?.includes(item.name) ? "Добавить" : "Удалить"}
        />
    ))

    return (<>
        <div className="product-list">
            {productlist}
        </div>
    </>
    )
}