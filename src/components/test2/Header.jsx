import { Basket } from "./Basket";

export function Header(props) {
    return (
        <>
            <header className="header">
                <div className="container">
                    <nav className="header__nav">
                        <ul className="header__list">
                            <li className="header__item"><a href="/" className="header__refer">home</a></li>
                            <li className="header__item"><a href="/product" className="header__refer">product</a></li>
                        </ul>
                    </nav>
                    <Basket basket={props.basket} sum={props.sum} />
                </div>
            </header>
        </>
    )
}