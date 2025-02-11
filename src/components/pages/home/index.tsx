import React from "react"
import styles from "../pages.module.scss"

export function Home() {
    return (<>
        <div className={styles.container}>
            <ul>
                <li><a href="/champions">Страница со списком чемпионов</a></li>
                <li><a href="/champions/Vi">Страница с чемпионом Ви</a></li>
                <li><a href="/product">Страница с корзиной и продуктами</a></li>
            </ul>
        </div>
    </>)
}