import React from "react"
import { ListChampions } from "../../listChampions"
import styles from "./champions.module.scss"

export function Champions() {

    return (<>
        <div className={styles.container}>
            <div className={styles.homeText}>
                <p>ВЫБЕРИТЕ</p>
                <h1 className={styles.homeTitle}>ЧЕМПИОНА</h1>
            </div>
            <ListChampions />
        </div>
    </>)

}